"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import { useSession } from "next-auth/react";
import TopicReply from "@/components/topic-reply/page";
import { formatDate } from "@/components/date-format/page";
import useAxiosFetch from "@/hooks/axiosFetch";
import axios from "axios";
import CustomAlert from "@/components/alert/page";
import Modal from "@/components/common-modal/modal";
import LoadingButton from "@/components/loadingButton/page";

function GetTopic() {
  const router = useRouter();
  const { id: paramdId } = useParams();
  const { data: session } = useSession();
  const token = session?.user?.userToken;
  const userLoginId = session?.user?.userLoginId;
  const [openDeletePop, setOpenDeletePop] = useState(false);
  const [storeTopicId, setStoreTopicId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [AlertDetails, setAlertDetails] = useState({
    isOpen: false,
    message: "",
    duration: 3000,
    position: "bottom",
    type: "success",
  });
  const API_URL = `${process.env.NEXT_PUBLIC_APP_NEXTAUTH_URL}/topic/findById/${paramdId}`;

  const {
    data: topic,
    loading,
    error,
  } = useAxiosFetch(
    API_URL,
    {
      headers: { Authorization: `Bearer ${token}` },
    },
    paramdId
  );

  const FilteredTopic = topic?.result;

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

  const handleDelete = async () => {
    setIsLoading(true);
    const Delete_API = `${process.env.NEXT_PUBLIC_APP_NEXTAUTH_URL}/topic/delete/${storeTopicId}`;

    try {
      const response = await axios.delete(Delete_API, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAlertDetails({
        isOpen: true,
        message: response?.data?.message || "Topic deleted successfully",
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

  const handleOpenPopup = (id) => {
    setOpenDeletePop(true);
    setStoreTopicId(id);
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
      <div className="w-full bg-gray-100">
        <div className="flex text-[16px] justify-between items-center gap-5">
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
              {`${FilteredTopic?.data?.user?.first_name || "Anonymous"} ${
                FilteredTopic?.data?.user?.last_name || ""
              }`}
            </span>
          </div>
          <div>
            <div
              onClick={() => handleReply(FilteredTopic?.data?.id)}
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
        <div className="w-full my-4 bg-[#F8F8F8] shadow-sm rounded-xl p-6 space-y-4 overflow-auto">
          <div className="space-y-4">
            <div className="flex justify-between">
              <h2 className="text-xl font-bold">
                {FilteredTopic?.data?.title}
              </h2>
              {FilteredTopic?.data?.user_id == userLoginId ? (
                <div className="space-x-4">
                  <span className="flex gap-4">
                    {/* -----------------------------edit------------------------------------ */}
                    <div
                      onClick={() => handleQuote(FilteredTopic?.data?.id)}
                      className="border cursor-pointer transition duration-300 border-[#C8C8C8] hover:border-primary p-[10px] rounded-full"
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
                      onClick={() => handleOpenPopup(FilteredTopic?.data?.id)}
                      className="border cursor-pointer  transition duration-300 border-[#C8C8C8] hover:border-primary p-[10px] rounded-full"
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
            </div>
            <Image
              className="w-16 h-16 rounded-full"
              src="/dashboard/profile-pic.png"
              alt="Profile picture of user"
              width={64}
              height={64}
            />
            <p className="text-gray text-[14px]">
              {`${FilteredTopic?.data?.user?.first_name || "N/A"} ${
                FilteredTopic?.data?.user?.last_name || "N/A"
              }`}
            </p>
          </div>
          <p
            className="leading-loose w-[800px] overflow-x-auto"
            dangerouslySetInnerHTML={{ __html: FilteredTopic?.data?.content }}
          />
          <div className="flex justify-between">
            <div className="text-gray text-sm flex items-center gap-5">
              <div className="flex gap-5">
                <Image
                  src="/dashboard/calender.svg"
                  height={18}
                  width={18}
                  alt="calendar-icon"
                />
                <span>{formatDate(FilteredTopic?.data?.updated_at)}</span>
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

            {FilteredTopic?.data?.user_id == userLoginId ? (
              <div
                onClick={() => handleQuote(FilteredTopic?.data?.id)}
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
        </div>
        {/* ----------------------------------comment section--------------------------------------- */}
        <TopicReply />
        {/* -------------------------------------------------------------------------------- */}
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
        <div className="text-center font-semibold text-[#333333]  text-lg my-6">
          Are you sure you want to delete this topic?
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
          <span onClick={handleDelete}>
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

export default GetTopic;
