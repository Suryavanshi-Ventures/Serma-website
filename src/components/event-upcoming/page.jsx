import React from "react";
import BlueLine from "../blue-line/page";
import { EVENT_CARD_DETAILS } from "@/app/utils/constant/constant";
import Image from "next/image";
import SwiperSlideIncoming from "./swiper-incoming/page";
function EventUpcoming({ data, error,loading }) {
  return (
    <div>
      <div className="flex flex-col lg:flex-row max-md:px-5 px-[25px]  ">
        {/* -------------------------------- */}
        <div className="lg:w-1/5  w-full">
          <div className="heading-2 font-bold text-left">Upcoming Events</div>
          <div className="my-2 ">
            {" "}
            <BlueLine width={"150px"} />
          </div>
          <div className="my-3 md:my-5 lg:text-left text-gray responsive-Text w-auto 2xl:w-auto
          ">
            View our Recent events and register for the Events
          </div>
        </div>
        {/* ------------------------ */}

        <div className="w-full lg:w-[80%]">
         
          <SwiperSlideIncoming data={data} error={error} loading={loading}  />
        </div>
      </div>
    </div>
  );
}

export default EventUpcoming;
