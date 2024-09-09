"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { formatDate } from "@/components/date-format/page";
import Skeleton from "@/components/skeleton/skeleton";
import useAxiosFetch from "@/hooks/axiosFetch";

const TopicItem = ({ post, handleSeePost }) => {
  return (
    <div className="bg-white p-4 animate-fade">
      <div className="flex items-start space-x-4">
        <div
          onClick={() => handleSeePost(post.id)}
          className="w-10 h-10 relative cursor-pointer"
        >
          <Image
            src={
              post.attachments && post.attachments.length > 0
                ? post.attachments[0]
                : "/dashboard/profile-pic.png"
            }
            alt="user-Image"
            layout="fill"
            className="rounded-full object-cover border h-[30px]"
          />
        </div>
        <div className="flex-1">
          <div>
            <span
              className="cursor-pointer"
              onClick={() => handleSeePost(post.id)}
            >
              {post.title}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 md:gap-5 my-1">
              <h2
                onClick={() => handleSeePost(post.id)}
                className="max-md:text-[12px] text-gray cursor-pointer"
              >
                {post.user.first_name} {post.user.last_name}
              </h2>
              <p className="text-[12px] text-gray md:text-sm">
                {formatDate(post.updated_at)}
              </p>
            </div>
            <div className="text-gray-500">
              <span
                onClick={() => handleSeePost(post.id)}
                className="text-sm cursor-pointer flex gap-2"
              >
                {/* Comment SVG */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0003 19.9991C15.523 19.999 20 15.522 20 9.99924C20 7.34715 18.9465 4.8037 17.0712 2.92839C13.1654 -0.976637 6.83355 -0.976051 2.92856 2.92968C-0.476709 6.33557 -0.970564 11.6849 1.75355 15.6567C1.62742 16.1769 0.902166 17.6479 0.234564 18.8224C0.0459347 19.1543 0.162027 19.5762 0.493855 19.7648C0.701975 19.8831 0.956539 19.8853 1.16665 19.7706C1.17364 19.7667 1.87331 19.3855 2.65998 19.0079C3.76253 18.4786 4.23923 18.3364 4.41974 18.2982C6.06786 19.4107 8.01184 20.0032 10.0003 19.9991ZM10.0003 1.3819C14.7519 1.3819 18.6176 5.24763 18.6176 9.99928C18.6176 14.7509 14.7519 18.6167 10.0003 18.6167C8.23348 18.6205 6.50871 18.0777 5.06254 17.0627C4.67548 16.7915 4.15807 16.912 3.65667 17.0825C3.33207 17.1931 2.92657 17.3598 2.44963 17.5792C2.67193 17.1196 2.84224 16.7293 2.95661 16.4171C3.16793 15.8405 3.25504 15.3815 2.99333 15.0167C1.94202 13.5553 1.37844 11.7995 1.38282 9.99932C1.38282 5.24763 5.24859 1.3819 10.0003 1.3819Z"
                    fill="#9B9A9A"
                  />
                </svg>
                {post.comments}
              </span>
            </div>
          </div>
          <p
            className="mt-2 text-[#333333] text-[14px] w-[850px] overflow-hidden"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></p>
        </div>
      </div>
    </div>
  );
};

const TopicList = ({ posts = [], handleSeePost }) => {
  return (
    <div>
      {posts &&
        posts.map((post, index) => (
          <TopicItem key={index} post={post} handleSeePost={handleSeePost} />
        ))}
    </div>
  );
};

const MemberForum = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const token = session?.user?.userToken;
  const API_URL = `${process.env.NEXT_PUBLIC_APP_NEXTAUTH_URL}/topic/find`;

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status]);

  const {
    data: posts,
    loading,
    error,
  } = useAxiosFetch(
    API_URL,
    {
      headers: { Authorization: `Bearer ${token}` },
    },
    status === "authenticated" && token ? token : null
  );

  const handleSeePost = (id) => {
    router.push(`/members-only-content/Dashboard/member-forum/${id}`);
  };

  return (
    <div className="w-full rounded-lg border border-[#D9D9D980] overflow-hidden">
      <div className="flex justify-between rounded-lg items-center pt-2 px-4 bg-[#F5F6F8]">
        <h1 className="text-[16px] font-[600] mb-4">Topic</h1>
        <h2 className="text-[16px] font-[600] mb-4">Replies</h2>
      </div>
      {loading ? (
        <Skeleton item={10} style={`h-[100px] w-full rounded-lg mb-3`} />
      ) : posts?.result.length < 1 ? (
        "No Topic Added yet"
      ) : (
        <TopicList posts={posts?.result} handleSeePost={handleSeePost} />
      )}
    </div>
  );
};

export default MemberForum;
