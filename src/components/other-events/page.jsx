import React from "react";
import BlueLine from "../blue-line/page";
import { EVENT_CARD_DETAILS } from "@/app/utils/constant/constant";
import SwiperSlideIncoming from "../event-upcoming/swiper-incoming/page";
import useAxiosFetch from "@/hooks/axiosFetch";
import { useSession } from "next-auth/react";
import Skeleton from "../skeleton/skeleton";
function OtherEvent() {
  //
  const { data: session } = useSession();
  const token = session?.user?.userToken;
  const API_URL_UPCOMING = `${process.env.NEXT_PUBLIC_APP_NEXTAUTH_URL}/event/upcoming_events`;
  const {
    data: upcoming_events,
    loading,
    error,
  } = useAxiosFetch(
    API_URL_UPCOMING,
    {
      headers: { Authorization: `Bearer ${token}` },
    },
    token
  );
  const upcoming_data = upcoming_events?.result;
  

  return (
    <div>
      <div className="flex flex-col lg:flex-row  my-5 ">
        {/* -------------------------------- */}
        <div className="lg:w-1/5  w-full">
          <div className=" text-[#333333] text-xl  sm:text-2xl lg:text-3xl  font-bold text-center lg:text-left">
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
          {loading ? (
            <Skeleton
              key={10}
              item={5}
              style="h-[50px] w-full rounded-lg mb-3"
            />
          ) : (
            <SwiperSlideIncoming data={upcoming_data} error={error} />
          )}
        </div>
      </div>
    </div>
  );
}

export default OtherEvent;
