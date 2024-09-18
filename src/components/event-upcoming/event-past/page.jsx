"use client";

import { MONTHS } from "@/app/utils/constant/constant";
import BlueLine from "@/components/blue-line/page";
import Image from "next/image";
import React, { useState } from "react";
import SwiperSlidePast from "./swiper-past/page";
import { useSession } from "next-auth/react";
import useAxiosFetch from "@/hooks/axiosFetch";
function EventPast() {
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [filteredMonth, setFilteredMonth] = useState("");

  const { data: session } = useSession();
  const token = session?.user?.userToken;
  const API_URL2 = `${process.env.NEXT_PUBLIC_APP_NEXTAUTH_URL}/event/past_events?search_month=${filteredMonth}`;
  const {
    data: data,
    loading2,
    error2: error,
  } = useAxiosFetch(
    // token ? API_URL2 : null,
    API_URL2,
    {
      headers: { Authorization: `Bearer ${token}` },
    },
    token
  );
  console.log(data);

  const handleSelectMonth = (month, i) => {
    console.log(month);

    const toLowerCaseMonth = month.toLowerCase();

    setFilteredMonth(i === 0 ? "" : toLowerCaseMonth);

    setSelectedMonth(i);
  };
  const handlePrevMonth = () => {
    if (selectedMonth > 0) {
      setSelectedMonth(selectedMonth - 1);
    }
  };
  const handleNextMonth = () => {
    if (selectedMonth < MONTHS.length - 1) {
      setSelectedMonth(selectedMonth + 1);
    }
  };

  return (
    <div>
      <div>
        <div className="flex flex-col lg:flex-row  max-md:px-5 px-[25px]">
          {/* -------------------------------- */}
          <div className="lg:w-1/5  w-full">
            <div className="heading-2 font-bold text-left">Past Events</div>
            <div className="my-2 ">
              <BlueLine width={"70px"} />
            </div>
            <div className=" my-3 lg:my-10 text-left  text-gray responsive-Text w-auto 2xl:w-auto ">
              View our Past events and get ready for our upcoming one
            </div>
            <div className="xl:w-[250px]  gap-2 border-b  border-[#A5A5A5] flex py-2">
              <Image
                src="/events/search.svg"
                height={17}
                width={17}
                alt="search-image"
                className=""
              />
              <input
                type="text"
                placeholder="Search all Events"
                className="w-full outline-none"
              />
            </div>
            <div className="my-5 text-gray  max-md:flex max-md:overflow-scroll">
              {MONTHS.map((month, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 max-md:ml-3 md:gap-10 mb-4"
                >
                  <div className="max-md:w-[14px]">
                    <Image
                      src="/events/blue-dot.svg"
                      height={12}
                      width={12}
                      alt="dot"
                      className="h-[14px] w-[14px]"
                    />
                  </div>

                  <div
                    onClick={() => handleSelectMonth(month, i)}
                    className={`cursor-pointer text-[18px] ${
                      selectedMonth === i ? "text-[#13A6AC] underline" : ""
                    }`}
                  >
                    {month}
                  </div>
                </div>
              ))}
            </div>
            {/* -----------------next button------------------- */}
            <div className="md:hidden flex justify-end gap-5 my-5 pr-3 ">
              <button onClick={handlePrevMonth} disabled={selectedMonth === 0}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1410_132717)">
                    <path
                      d="M12 24C18.617 24 24 18.617 24 12C24 5.38298 18.617 0 12 0C5.38298 0 0 5.38298 0 12C0 18.617 5.38298 24 12 24ZM8.29298 11.293L13.293 6.29302C13.488 6.09802 13.744 6 14 6C14.256 6 14.512 6.09802 14.707 6.29302C15.098 6.684 15.098 7.31602 14.707 7.707L10.414 12L14.707 16.293C15.098 16.684 15.098 17.316 14.707 17.707C14.316 18.098 13.684 18.098 13.293 17.707L8.29298 12.707C7.902 12.316 7.902 11.684 8.29298 11.293Z"
                      fill="#9B9A9A"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1410_132717">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="matrix(-1 0 0 -1 24 24)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
              <button
                onClick={handleNextMonth}
                disabled={selectedMonth === MONTHS.length - 1}
                className="rotate-180"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#1DB2B9"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1410_132717)">
                    <path
                      d="M12 24C18.617 24 24 18.617 24 12C24 5.38298 18.617 0 12 0C5.38298 0 0 5.38298 0 12C0 18.617 5.38298 24 12 24ZM8.29298 11.293L13.293 6.29302C13.488 6.09802 13.744 6 14 6C14.256 6 14.512 6.09802 14.707 6.29302C15.098 6.684 15.098 7.31602 14.707 7.707L10.414 12L14.707 16.293C15.098 16.684 15.098 17.316 14.707 17.707C14.316 18.098 13.684 18.098 13.293 17.707L8.29298 12.707C7.902 12.316 7.902 11.684 8.29298 11.293Z"
                      fill={selectedMonth === 0 ? "#1DB2B9" : ""}
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1410_132717">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="matrix(-1 0 0 -1 24 24)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
          </div>
          {/* ------------------------ */}

          <div className="w-full lg:w-[80%]">
            <SwiperSlidePast data={data && data} error={error} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventPast;
