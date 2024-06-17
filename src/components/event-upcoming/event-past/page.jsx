import { MONTHS } from "@/app/utils/constant/constant";
import BlueLine from "@/components/blue-line/page";
import Image from "next/image";
import React from "react";
import SwiperSlidePast from "./swiper-past/page";

function EventPast() {
  return (
    <div>
      <div>
        <div className="flex flex-col lg:flex-row  max-md:px-5 ">
          {/* -------------------------------- */}
          <div className="lg:w-1/5  w-full">
            <div className="heading-2 font-bold  text-left">Past Events</div>
            <div className="my-2 ">
              <BlueLine width={"70px"} />
            </div>
            <div className=" my-3 lg:my-10 text-left  text-gray responsive-Text w-auto 2xl:w-auto ">
              View our Past events and get ready for our upcoming one
            </div>
            <div className="w-[250px] gap-2 border-b  border-[#A5A5A5] flex py-2">
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
            <div className="my-5 text-gray  max-md:flex max-md:overflow-scroll  ">
              {MONTHS.map((month) => (
                <div className="flex items-center gap-4 max-md:ml-3 md:gap-10 mb-3">
                  <div className=" max-md:w-[12px]">
                    <Image
                      src="/events/blue-dot.svg"
                      height={12}
                      width={12}
                      alt="dot"
                      className="h-[12px] w-[12px]"
                    />
                  </div>
                  <div className="hover:text-[#13A6AC] cursor-pointer hover:underline">
                    {month}
                  </div>
                </div>
              ))}
            </div>
     {/* <div className="md:hidden flex gap-3">
      <button>Prev</button>
      <button>Next</button>
     </div> */}
          </div>
          {/* ------------------------ */}

          <div className="w-full lg:w-[80%]">
            <SwiperSlidePast />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventPast;
