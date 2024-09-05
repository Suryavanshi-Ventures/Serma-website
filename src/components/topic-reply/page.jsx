"use client";
import React, { useState } from "react";
import useAxiosFetch from "@/hooks/axiosFetch";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { formatDate } from "../date-format/page";
import Skeleton from "../skeleton/skeleton";

function TopicReply() {
  const { id: paramId } = useParams();
  const { data: session } = useSession();
  const token = session?.user?.userToken;

  const API_URL = `${process.env.NEXT_PUBLIC_APP_NEXTAUTH_URL}/topic_reply/findById/${paramId}`;
  const {
    data: topicReply,
    loading: loadingReply,
    error: errorReply,
  } = useAxiosFetch(
    API_URL,
    {
      headers: { Authorization: `Bearer ${token}` },
    },
    paramId
  );

  const ReplyTopics = topicReply?.result || [];

  const [expanded, setExpanded] = useState({}); // State to manage expanded content

  const handleToggle = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const renderError = () => (
    <div className="text-red-500 text-center">
      No replies found or an error occurred.
    </div>
  );

  const renderSkeleton = () => (
    <Skeleton item={5} style="h-[150px] w-full rounded-lg mb-3" />
  );

  const renderReply = (data, index) => {
    const isExpanded = expanded[index];

    // Truncate content if not expanded
    const content = isExpanded
      ? data?.content
      : `${data?.content?.slice(0, 70)}`; // Adjust slice length as needed

    return (
      <div
        className="w-full text-[#333333] mx-auto p-4 bg-[#F8F8F8] rounded-lg"
        key={index}
      >
        <div className="space-y-4">
          <Image
            src={data?.attachments[0] ?? "/dashboard/profile-pic.png"}
            alt="Profile Picture"
            width={50}
            height={50}
            className="rounded-full h-[50px] w-[50px]"
          />
          <p className="text-[18px] text-[#9B9A9A]">
            {data?.user?.first_name} {data?.user?.last_name}
          </p>
        </div>

        <div className="mt-4">
          <p
            className="leading-loose w-[800px] overflow-x-auto"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          {data?.content.length > 200 && (
            <button
              className="mt-2 text-[#C42C2D]"
              onClick={() => handleToggle(index)}
            >
              {isExpanded ? "Read less" : "Read more"}
            </button>
          )}
        </div>

        <div className="mt-4 flex items-center text-gray-500 text-sm">
          <div className="flex items-center mr-4 gap-3">
            <Image
              src="/dashboard/calender.svg"
              height={18}
              width={18}
              alt="calendar-icon"
            />
            <span>{formatDate(data?.updated_at)}</span>
          </div>
          <div className="flex items-center gap-3">
            <Image
              src="/dashboard/message.svg"
              height={18}
              width={18}
              alt="message-icon"
            />
            <span>
              Reply <span className="underline">{"N/A"}</span>
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-5">
      {loadingReply
        ? renderSkeleton()
        : errorReply || !ReplyTopics.length
        ? renderError()
        : ReplyTopics.map(renderReply)}
    </div>
  );
}

export default TopicReply;
