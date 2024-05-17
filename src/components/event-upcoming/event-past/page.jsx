import { MONTHS } from "@/app/utils/constant/constant";
import BlueLine from "@/components/blue-line/page";
import Image from "next/image";
import React from "react";
import SwiperSlidePast from "./swiper-past/page";

function EventPast() {
  return (
    <div>
      <div>
        <div className="flex flex-col lg:flex-row   ">
          {/* -------------------------------- */}
          <div className="lg:w-1/5  w-full">
            <div className="text-3xl font-bold text-center lg:text-left">
              Past Events
            </div>
            <div className="my-2 hidden lg:flex">
              <BlueLine width={"70px"}/>
            </div>
            <div className="text-center my-5 lg:my-10 lg:text-left  text-gray responsive-Text w-auto 2xl:w-auto ">
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
              <input type="text" placeholder="Search all Events" className="w-full outline-none" />
            </div>
            <div className="my-5 text-gray">
              {MONTHS.map((month) => (
                <div className="flex items-center gap-10 mb-3">
                  <div>
                    <Image
                      src="/events/blue-dot.svg"
                      height={12}
                      width={12}
                      alt="dot"
                      className=""
                    />
                  </div>
                  <div className="hover:text-[#13A6AC] cursor-pointer hover:underline">{month}</div>
                </div>
              ))}
            </div>
          </div>
          {/* ------------------------ */}

          <div className="w-full lg:w-[80%] ">
         <SwiperSlidePast/>        

          </div>
        </div>
      </div>
    </div>
  );
}

export default EventPast;
