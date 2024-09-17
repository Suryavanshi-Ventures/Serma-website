"use client";
import React, { useEffect, useState } from "react";
import useAxiosFetch from "@/hooks/axiosFetch";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { formatDate } from "../date-format/page";
import Skeleton from "../skeleton/skeleton";
import Modal from "../common-modal/modal";
import LoadingButton from "../loadingButton/page";
import CustomAlert from "../alert/page";
import axios from "axios";
import { useRouter } from "next/navigation";
function TopicReply() {
  const { id: paramId } = useParams();
  const { data: session } = useSession();
  const [openDeletePop, setOpenDeletePop] = useState(false);
  const [storeTopicId, setStoreTopicId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [AlertDetails, setAlertDetails] = useState({
    isOpen: false,
    message: "",
    duration: 3000,
    position: "bottom",
    type: "success",
  });
  console.log(storeTopicId, "storeTopicId");
  const token = session?.user?.userToken;
  const userLoginId = session?.user?.userLoginId;
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
  console.log(topicReply, "topicReply");
  const ReplyTopics = topicReply?.result || [];

  const [expanded, setExpanded] = useState({}); // State to manage expanded content

  const handleEditReply = (topicEdit) => {
    router.push(
      `/members-only-content/Dashboard/member-forum/topic_edit/${topicEdit}`
    );
  };

  const handleToggle = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const renderError = () => (
    <div className=" flex justify-center mt-20 h-full">
      <Image
        src="/dashboard/no-reply/no-reply.png"
        width={500}
        height={500}
        alt="No-reply-Image"
      />
    </div>
  );

  const renderSkeleton = () => (
    <Skeleton item={5} style="h-[150px] w-full rounded-lg mb-3" />
  );

  const handleDelete = (id) => {
    console.log(id, "hchc");
    setOpenDeletePop(true);
    setStoreTopicId(id);
  };
  const handleDeleteReply = async () => {
    setIsLoading(true);
    const API_URL_For_Delete_Reply = `${process.env.NEXT_PUBLIC_APP_NEXTAUTH_URL}/topic_reply/delete/${storeTopicId}`;

    try {
      const response = await axios.delete(API_URL_For_Delete_Reply, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAlertDetails({
        isOpen: true,
        message: response?.data?.message || "Topic Reply deleted successfully",
        duration: 3000,
        position: "top",
        type: "success",
      });

      setTimeout(() => {
        router.push("/members-only-content/Dashboard/member-forum");
      }, 2000);
      setIsLoading(false);
    } catch (error) {
      setAlertDetails({
        isOpen: true,
        message: error?.response?.data?.message || "Error deleting topic",
        duration: 3000,
        position: "top",
        type: "danger",
      });
      setIsLoading(false);
      console.error("Error deleting topic:", error?.response?.data?.message);
    }
    setIsLoading(false);
  };

  const renderReply = (data, index) => {
    console.log(data, "dd");
    const isExpanded = expanded[index];

    // Truncate content if not expanded
    const content = isExpanded
      ? data?.content
      : `${data?.content?.slice(0, 70)}`; // Adjust slice length as needed

    useEffect;
    return (
      <div
        className="w-full text-[#333333] mx-auto p-4 bg-[#F8F8F8] rounded-lg"
        key={index}
      >
        <div className="space-y-4">
          <div className="flex justify-between">
            <Image
              src={data?.attachments[0] ?? "/dashboard/profile-pic.png"}
              alt="Profile Picture"
              width={50}
              height={50}
              className="rounded-full h-[50px] w-[50px]"
            />
            {data?.user?.id && userLoginId && data?.user?.id == userLoginId ? (
              <div className="space-x-4">
                <span className="flex gap-4">
                  {/* -----------------------------edit------------------------------------ */}
                  <div
                    onClick={() => handleEditReply(data?.id)}
                    className="border cursor-pointer transition duration-300 border-[#C8C8C8] hover:border-primary p-[15px] rounded-full"
                  >
                    <svg
                      width="16"
                      height="15"
                      viewBox="0 0 16 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.17398 12.0397C3.17398 12.0397 3.22732 12.0397 3.24732 12.0397L5.20065 11.8597C5.47398 11.8331 5.72732 11.7131 5.92065 11.5197L13.294 4.14641C13.6407 3.79974 13.834 3.33974 13.834 2.85307C13.834 2.36641 13.6407 1.90641 13.294 1.55974L12.8207 1.08641C12.1273 0.393073 10.9207 0.393073 10.2273 1.08641L9.28732 2.02641L2.86065 8.45307C2.66732 8.64641 2.54732 8.89974 2.52732 9.17307L2.34732 11.1264C2.32732 11.3731 2.41398 11.6131 2.58732 11.7931C2.74732 11.9531 2.95398 12.0397 3.17398 12.0397ZM11.5273 1.54641C11.7407 1.54641 11.954 1.62641 12.114 1.79307L12.5873 2.26641C12.7473 2.42641 12.834 2.63307 12.834 2.85307C12.834 3.07307 12.7473 3.28641 12.5873 3.43974L12.0007 4.02641L10.354 2.37974L10.9406 1.79307C11.1007 1.63307 11.314 1.54641 11.5273 1.54641ZM3.52065 9.26641C3.52065 9.22641 3.54065 9.19307 3.56732 9.16641L9.64065 3.08641L11.2873 4.73307L5.21398 10.8064C5.21398 10.8064 5.14732 10.8531 5.11398 10.8531L3.36065 11.0131L3.52065 9.25974V9.26641ZM15.1673 14.1664C15.1673 14.4397 14.9406 14.6664 14.6673 14.6664H1.33398C1.06065 14.6664 0.833984 14.4397 0.833984 14.1664C0.833984 13.8931 1.06065 13.6664 1.33398 13.6664H14.6673C14.9406 13.6664 15.1673 13.8931 15.1673 14.1664Z"
                        fill="#C42C2D"
                      />
                    </svg>
                  </div>
                  {/* -------------delete--------------------- */}
                  <div
                    onClick={() => handleDelete(data?.id)}
                    className="border cursor-pointer  transition duration-300 border-[#C8C8C8] hover:border-primary p-[15px] rounded-full"
                  >
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.666 5.16602C12.4892 5.16602 12.3196 5.23625 12.1946 5.36128C12.0696 5.4863 11.9993 5.65587 11.9993 5.83268V13.2933C11.9802 13.6305 11.8287 13.9464 11.5777 14.1723C11.3267 14.3982 10.9966 14.5157 10.6593 14.4993H5.33935C5.00208 14.5157 4.672 14.3982 4.42102 14.1723C4.17003 13.9464 4.01847 13.6305 3.99935 13.2933V5.83268C3.99935 5.65587 3.92911 5.4863 3.80409 5.36128C3.67906 5.23625 3.50949 5.16602 3.33268 5.16602C3.15587 5.16602 2.9863 5.23625 2.86128 5.36128C2.73625 5.4863 2.66602 5.65587 2.66602 5.83268V13.2933C2.68504 13.9842 2.97707 14.6393 3.47814 15.1152C3.9792 15.5912 4.64846 15.8492 5.33935 15.8327H10.6593C11.3502 15.8492 12.0195 15.5912 12.5206 15.1152C13.0216 14.6393 13.3137 13.9842 13.3327 13.2933V5.83268C13.3327 5.65587 13.2624 5.4863 13.1374 5.36128C13.0124 5.23625 12.8428 5.16602 12.666 5.16602Z"
                        fill="#C42C2D"
                      />
                      <path
                        d="M13.3333 3.16602H10.6667V1.83268C10.6667 1.65587 10.5964 1.4863 10.4714 1.36128C10.3464 1.23625 10.1768 1.16602 10 1.16602H6C5.82319 1.16602 5.65362 1.23625 5.5286 1.36128C5.40357 1.4863 5.33333 1.65587 5.33333 1.83268V3.16602H2.66667C2.48986 3.16602 2.32029 3.23625 2.19526 3.36128C2.07024 3.4863 2 3.65587 2 3.83268C2 4.00949 2.07024 4.17906 2.19526 4.30409C2.32029 4.42911 2.48986 4.49935 2.66667 4.49935H13.3333C13.5101 4.49935 13.6797 4.42911 13.8047 4.30409C13.9298 4.17906 14 4.00949 14 3.83268C14 3.65587 13.9298 3.4863 13.8047 3.36128C13.6797 3.23625 13.5101 3.16602 13.3333 3.16602ZM6.66667 3.16602V2.49935H9.33333V3.16602H6.66667Z"
                        fill="#C42C2D"
                      />
                      <path
                        d="M7.33333 11.8333V7.16667C7.33333 6.98986 7.2631 6.82029 7.13807 6.69526C7.01305 6.57024 6.84348 6.5 6.66667 6.5C6.48986 6.5 6.32029 6.57024 6.19526 6.69526C6.07024 6.82029 6 6.98986 6 7.16667V11.8333C6 12.0101 6.07024 12.1797 6.19526 12.3047C6.32029 12.4298 6.48986 12.5 6.66667 12.5C6.84348 12.5 7.01305 12.4298 7.13807 12.3047C7.2631 12.1797 7.33333 12.0101 7.33333 11.8333Z"
                        fill="#C42C2D"
                      />
                      <path
                        d="M9.99935 11.8333V7.16667C9.99935 6.98986 9.92911 6.82029 9.80409 6.69526C9.67906 6.57024 9.50949 6.5 9.33268 6.5C9.15587 6.5 8.9863 6.57024 8.86128 6.69526C8.73625 6.82029 8.66602 6.98986 8.66602 7.16667V11.8333C8.66602 12.0101 8.73625 12.1797 8.86128 12.3047C8.9863 12.4298 9.15587 12.5 9.33268 12.5C9.50949 12.5 9.67906 12.4298 9.80409 12.3047C9.92911 12.1797 9.99935 12.0101 9.99935 11.8333Z"
                        fill="#C42C2D"
                      />
                    </svg>
                  </div>
                </span>
              </div>
            ) : (
              ""
            )}

            {/* :""} */}
          </div>
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
    <>
      {AlertDetails.isOpen && (
        <CustomAlert
          message={AlertDetails.message}
          duration={AlertDetails.duration}
          onClose={() =>
            setAlertDetails({
              ...AlertDetails,
              isOpen: false,
            })
          }
          position={AlertDetails.position}
          type={AlertDetails.type}
        />
      )}
      <div className="space-y-5">
        {loadingReply
          ? renderSkeleton()
          : errorReply || !ReplyTopics.length
          ? renderError()
          : ReplyTopics.map(renderReply)}
      </div>

      <Modal
        wantTocloseFromScreen={true}
        wantCrossButton={true}
        isOpen={openDeletePop}
        onClose={() => setOpenDeletePop(false)}
        className="custom-modal"
        width={"max-w-[500px]"}
      >
        <div className="flex justify-center items-center gap-2">
          <Image
            src="/dashboard/delete-topic.png"
            height={50}
            width={50}
            alt="delete-image"
          />
        </div>
        <div className="text-center font-semibold text-[#333333]  text-sm my-6">
          Are you sure you want to delete this reply?
        </div>
        <div className="flex justify-center gap-6">
          <span onClick={() => setOpenDeletePop(false)}>
            <LoadingButton
              disabledProp={() => {}}
              style="hover:bg-primary  transition-all font-[700] duration-200 text-black p-[7px]  w-full xs:w-[132px]  rounded-xl text-primary border border-primary hover:text-white "
              text="Cancel"
              spinnerWidth="23"
              spinnerHeight="23"
              loading={false}
            />
          </span>
          <span onClick={handleDeleteReply}>
            <LoadingButton
              disabledProp={() => {}}
              style="hover:bg-primary  transition-all font-[700] duration-200 text-black p-[7px]  w-full xs:w-[132px]  rounded-xl text-primary border border-primary hover:text-white "
              text="Delete"
              spinnerWidth="23"
              spinnerHeight="23"
              loading={isLoading}
            />
          </span>
        </div>
      </Modal>
    </>
  );
}

export default TopicReply;
