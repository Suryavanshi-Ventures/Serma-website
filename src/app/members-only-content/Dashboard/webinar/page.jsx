"use client";
import useAxiosFetch from "@/hooks/axiosFetch";
import Image from "next/image";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { formatDate } from "@/components/date-format/page";
import Card_skeleton from "@/components/card-skeleton/card_skeleton";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Webinar() {
  const { data: session } = useSession();
  const token = session?.user?.userToken;
  const router = useRouter();
  const API_URL = `${process.env.NEXT_PUBLIC_APP_NEXTAUTH_URL}/event/upcoming_events`;

  const {
    data: webinars,
    loading,
    error,
  } = useAxiosFetch(
    API_URL,
    {
      headers: { Authorization: `Bearer ${token}` },
    },
    token
  );

  const webinarList = webinars?.result;

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [expanded, setExpanded] = useState({}); // State to track expanded descriptions

  const totalPages = Math.ceil(webinarList?.length / itemsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const currentData = webinarList?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleToggleExpand = (id) => {
    setExpanded((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Toggle the expand state for the clicked item
    }));
  };

  const handleGotoEvent = (id) => {

    router.push(`/events/${id}`);
  };

  return (
    <div className="w-full">
      {loading ? (
        <Card_skeleton width={920} />
      ) : (
        <div className="grid w-full  sm:grid-cols-2 xl:grid-cols-23 gap-6">
          {currentData?.map((item) => {
            const isExpanded = expanded[item.id]; // Check if the current item is expanded
            const shouldShowReadMore = item?.description?.length > 50; // Show "Read More" if length is > 20
            const descriptionPreview = isExpanded
              ? item?.description
              : `${item?.description?.substring(0, 40)}`; // Show full or partial description

            return (
              <div key={item?.id}>
                <div className="flex flex-col lg:justify-center    bg-white">
                  <div className=" w-full md:w-3/4 lg:w-full  shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-[22px]   p-4 xl:p-[22px]">
                    <div className="flex justify-center  h-[150px] xl:h-[250px] w-full">
                      <Image
                        src={item?.image_url}
                        width={445}
                        unoptimized
                        height={252}
                        className="max-sm:object-contain w-full h-full rounded-lg"
                      />
                    </div>
                    <div className="mt-4">
                      <div className="flex items-center gap-4">
                        <div>
                          <svg
                            width="23"
                            height="23"
                            viewBox="0 0 23 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_584_1805)">
                              <path
                                d="M15.7207 13.7589L12.5868 11.4084V6.62055C12.5868 6.13913 12.1977 5.75 11.7162 5.75C11.2348 5.75 10.8457 6.13913 10.8457 6.62055V11.8437C10.8457 12.1179 10.9746 12.3765 11.1939 12.5402L14.676 15.1518C14.8327 15.2693 15.0155 15.3259 15.1975 15.3259C15.463 15.3259 15.7241 15.2066 15.8948 14.9768C16.1839 14.5928 16.1055 14.047 15.7207 13.7589Z"
                                fill="#9B9A9A"
                              />
                              <path
                                d="M11.717 0.523438C5.51974 0.523438 0.478516 5.56467 0.478516 11.762C0.478516 17.9593 5.51974 23.0005 11.717 23.0005C17.9144 23.0005 22.9556 17.9593 22.9556 11.762C22.9556 5.56467 17.9144 0.523438 11.717 0.523438ZM11.717 21.2595C6.48081 21.2595 2.21957 16.9982 2.21957 11.762C2.21957 6.52574 6.48081 2.26449 11.717 2.26449C16.9542 2.26449 21.2145 6.52574 21.2145 11.762C21.2145 16.9982 16.9533 21.2595 11.717 21.2595Z"
                                fill="#9B9A9A"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_584_1805">
                                <rect
                                  width="22.4771"
                                  height="22.4771"
                                  fill="white"
                                  transform="translate(0.476562 0.53125)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div>
                          <p className=" text-[12px] md:text-[15px] text-[#9B9A9A]">
                            {formatDate(item?.start_date_time)}
                          </p>
                        </div>
                      </div>
                      <div className="my-3 xl:my-5">
                        <p className="responsive-Text font-normal text-[#333333]">
                          {item?.title}
                        </p>
                      </div>
                      <div className={`${!isExpanded ? "" : ""} items-center min-h-[70px]`}>
                        <p
                          className="responsive-Text font-semibold text-[#525971] overflow-y-auto"
                          dangerouslySetInnerHTML={{
                            __html: descriptionPreview,
                          }}
                        ></p>
                        {shouldShowReadMore && (
                          <span
                            className="text-primary text-xs cursor-pointer"
                            onClick={() => handleToggleExpand(item.id)}
                          >
                            {isExpanded ? "Read Less" : "...Read More"}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center justify-end gap-3 mt-6">
                      <div
                        className="cursor-pointer"
                        onClick={() => handleGotoEvent(item.id)}
                      >
                        <p className="responsive-Text font-normal text-[#C42C2D]">
                          Register
                        </p>
                      </div>
                      <div>
                        <svg
                          width="24"
                          height="10"
                          viewBox="0 0 24 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.626953 4.08709L0.00310893 4.08709L0.00310867 5.33478L0.626953 5.33478L0.626953 4.08709ZM23.5265 5.15207C23.7701 4.90844 23.7701 4.51344 23.5265 4.26982L19.5564 0.299696C19.3127 0.0560695 18.9177 0.0560694 18.6741 0.299696C18.4305 0.543322 18.4305 0.938318 18.6741 1.18194L22.2031 4.71094L18.6741 8.23994C18.4305 8.48356 18.4305 8.87856 18.6741 9.12219C18.9177 9.36581 19.3127 9.36581 19.5564 9.12219L23.5265 5.15207ZM0.626953 5.33478L23.0738 5.33478L23.0738 4.08709L0.626953 4.08709L0.626953 5.33478Z"
                            fill="#C42C2D"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="flex justify-center mt-9 gap-1.5">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="w-8 h-8 rounded-full bg-white  border border-[#F1F1F1] flex justify-center items-center"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.06 12L11 11.06L7.94667 8L11 4.94L10.06 4L6.06 8L10.06 12Z"
              fill="black"
            />
          </svg>
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`w-8 h-8 rounded-full    text-sm font-bold  mx-1 ${
              currentPage === index + 1
                ? "bg-[#03989E] text-white"
                : "bg-white text-black border border-[#F1F1F1]"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="w-8 h-8 rounded-full bg-white  border border-[#F1F1F1] flex justify-center items-center"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.94 4L6 4.94L9.05333 8L6 11.06L6.94 12L10.94 8L6.94 4Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Webinar;
