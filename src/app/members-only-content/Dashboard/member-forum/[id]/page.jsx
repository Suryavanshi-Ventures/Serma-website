"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import { TOPICDETAILS } from "@/app/utils/constant/constant";
import { useSession } from "next-auth/react";
import axios from "axios";
import { formatDate } from "@/components/date-format/page";

function GetTopic() {
  const { id: paramdId } = useParams();
  const router = useRouter();
  const { data: session } = useSession();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [topic, setTopic] = useState(null);
  const token = session?.user?.userToken;
  const userLoginId = session?.user?.userLoginId;

  useEffect(() => {
    const fetchTopic = async () => {
      try {
        if (token) {
          const response = await axios.get(
            `${process.env.NEXT_PUBLIC_APP_NEXTAUTH_URL}/topic/findById/${paramdId}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          setTopic(response.data.result);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTopic();
  }, [token, paramdId]);

  const handleQuote = (quoteId) => {
    router.push(
      `/members-only-content/Dashboard/member-forum/quote/${quoteId}`
    );
  };

  const handleReply = (replyId) => {
    router.push(
      `/members-only-content/Dashboard/member-forum/reply/${replyId}`
    );
  };

  const goBack = () => {
    router.push("/members-only-content/Dashboard/member-forum");
  };

  return (
    <div className="w-full bg-gray-100">
      <div className="flex text-[16px] justify-start items-center gap-5">
        <div
          onClick={goBack}
          className="text-gray font-semibold cursor-pointer transition hover:text-primary"
        >
          Member Chat Forum
        </div>
        <span>
          <svg
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.63388 7.11612C9.12204 7.60427 9.12204 8.39573 8.63388 8.88388L2.38388 15.1339C1.89573 15.622 1.10427 15.622 0.616117 15.1339C0.127961 14.6457 0.127961 13.8543 0.616117 13.3661L5.98223 8L0.616117 2.63388C0.127961 2.14573 0.127961 1.35427 0.616117 0.866117C1.10427 0.377961 1.89573 0.377961 2.38388 0.866117L8.63388 7.11612Z"
              fill="#C42C2D"
            />
          </svg>
        </span>
        <span className="text-primary font-semibold">
          {`${topic?.data?.user?.first_name || "Anonymous"} ${
            topic?.data?.user?.last_name || ""
          }`}
        </span>
      </div>
      <div className="w-full my-4 bg-[#F8F8F8] shadow-sm rounded-xl p-6 space-y-4">
        <div className="space-y-4">
          <div className="flex justify-between">
            <h2 className="text-xl font-bold">{topic?.data?.title}</h2>
            {topic?.data?.user_id == userLoginId ? (
              <div
                onClick={() => handleQuote(topic?.data?.id)}
                className="flex border cursor-pointer border-[#C8C8C8] hover:border-primary duration-300 transition p-2 px-4 rounded-full justify-center items-center gap-2"
              >
                <svg
                  width="22"
                  height="16"
                  viewBox="0 0 22 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.77679 0.164063C8.61608 0.164063 10.6657 2.5081 10.6656 5.97885C10.6474 11.0216 6.8565 14.587 1.38755 15.2717C0.880166 15.3353 0.684524 14.6324 1.15176 14.4246C3.25024 13.4915 4.31008 12.3075 4.44698 11.1355C4.54926 10.2599 4.07326 9.49284 3.47557 9.34922C1.92607 8.97688 0.887896 7.04726 0.887896 5.05295C0.887896 2.35289 3.07673 0.164063 5.77679 0.164063Z"
                    fill="#C42C2D"
                  />
                  <path
                    d="M16.4448 0.164063C19.2841 0.164063 21.3336 2.5081 21.3336 5.97885C21.3154 11.0216 17.5245 14.587 12.0555 15.2717C11.5481 15.3353 11.3525 14.6324 11.8197 14.4246C13.9182 13.4915 14.9781 12.3075 15.1149 11.1355C15.2172 10.2599 14.7412 9.49284 14.1435 9.34922C12.594 8.97688 11.5559 7.04726 11.5559 5.05295C11.5559 2.35289 13.7447 0.164063 16.4448 0.164063Z"
                    fill="#C42C2D"
                  />
                </svg>
                <div className="text-primary">Quote</div>
              </div>
            ) : (
              ""
            )}
          </div>
          <Image
            className="w-16 h-16 rounded-full"
            src="/dashboard/profile-pic.png"
            alt="Profile picture of user"
            width={64}
            height={64}
          />
          <p className="text-gray text-[14px]">
            {`${topic?.data?.user?.first_name || "N/A"} ${
              topic?.data?.user?.last_name || "N/A"
            }`}
          </p>
        </div>
        <p
          className="leading-loose w-[800px] overflow-x-auto"
          dangerouslySetInnerHTML={{ __html: topic?.data?.content }}
        />
        <div className="text-gray text-sm flex gap-5">
          <div className="flex gap-5">
            <Image
              src="/dashboard/calender.svg"
              height={18}
              width={18}
              alt="calendar-icon"
            />
            <span>{formatDate(topic?.data?.updated_at)}</span>
          </div>
          <div className="flex gap-5">
            <Image
              src="/dashboard/message.svg"
              height={18}
              width={18}
              alt="message-icon"
            />
            <span>
              Message <span className="underline">{"N/A"}</span>
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-end px-6">
        <div
          onClick={() => handleReply(topic?.data?.id)}
          className="flex border cursor-pointer items-center border-[#C8C8C8] hover:border-primary duration-300 transition gap-2 p-2 px-4 rounded-full"
        >
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 14.9999C1.186 14.9999 1.36138 14.8959 1.44725 14.7235C2.373 12.872 3.2495 11.1195 8 11.0058V14.4999C8 14.6986 8.11763 14.8783 8.29938 14.9579C8.48112 15.0375 8.69338 15.0023 8.83938 14.867L15.3394 8.86701C15.4419 8.77288 15.5 8.63951 15.5 8.49988C15.5 8.36026 15.4419 8.22688 15.3394 8.13263L8.83938 2.13263C8.69338 1.99738 8.4805 1.96276 8.29938 2.04176C8.11763 2.12151 8 2.30113 8 2.49988V6.00576C1.07475 6.17763 0.5 9.95638 0.5 14.4999C0.5 14.7318 0.659625 14.933 0.88525 14.9868C0.923375 14.9955 0.961875 14.9999 1 14.9999ZM14.2628 8.49988L9 13.3578V10.4999C9 10.2235 8.77637 9.99988 8.5 9.99988C4.354 9.99988 2.58887 11.1571 1.55325 12.5483C1.78713 9.13613 2.9765 6.99988 8.5 6.99988C8.77637 6.99988 9 6.77626 9 6.49988V3.64201L14.2628 8.49988Z"
              fill="#C42C2D"
            />
          </svg>
          <span className="text-primary">Reply</span>
        </div>
      </div>
    </div>
  );
}

export default GetTopic;
