import React from "react";
import BlueLine from "../blue-line/page";
import { EVENT_CARD_DETAILS } from "@/app/utils/constant/constant";
import Image from "next/image";
import SwiperSlideIncoming from "../event-upcoming/swiper-incoming/page";
function OtherEvent() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row  my-5 ">
        {/* -------------------------------- */}
        <div className="lg:w-1/5  w-full">
          <div className="text-3xl font-bold text-center lg:text-left">
            Other Events
          </div>
          <div className="my-2 hidden lg:flex">
            {" "}
            <BlueLine width={"100px"} />
          </div>
          <div className="text-center my-5 lg:my-10 lg:text-left  text-gray responsive-Text w-auto 2xl:w-auto ">
            View our Recent events and register for the Event
          </div>
        </div>
        {/* ------------------------ */}

        <div className="w-full lg:w-[80%]">
          <SwiperSlideIncoming />
        </div>
      </div>
    </div>
  );
}

export default OtherEvent;
