import {
  EVENT_CARD_DESHBOARD,
  EVENT_CARD_DETAILS,
} from "@/app/utils/constant/constant";
import Image from "next/image";
import React from "react";
import LoadingButton from "../loadingButton/page";
import Button from "../button/page";
import Link from "next/link";
import { useSession } from "next-auth/react";
import useAxiosFetch from "@/hooks/axiosFetch";
import { useRouter } from "next/navigation";
function DashboardEvents() {
  const router = useRouter();
  const { data: session } = useSession();
  const token = session?.user?.userToken;
  const API_URL = `${process.env.NEXT_PUBLIC_APP_NEXTAUTH_URL}/event/upcoming_events`;
  const {
    data: upcoming_events,
    loading,
    error,
  } = useAxiosFetch(
    token ? API_URL : null,
    {
      headers: { Authorization: `Bearer ${token}` },
    },
    token
  );

  const handleClick = (id) => {
   
    router.push(`/events/${id}`);
  };

  return (
    <div className="">
      <div className="text-xl font-semibold text-center text-[#111111]">
        Events
      </div>
      {upcoming_events &&
        upcoming_events?.result.slice(0, 2).map((event, index) => (
          <div
            key={event?.id}
            className="w-full md:w-[300px] flex   rounded-2xl   max-lg:justify-center  max-lg:items-center max-sm:p-0  "
          >
            <div className="md:py-3   shadow-xl my-2 py-4 px-3 rounded-xl ">
              <div className="">
                <Image
                  src={event.image_url || "/event-empty.png"}
                  height={225}
                  width={396}
                  alt="image"
                  className="rounded-2xl"
                />
              </div>
              <div className="max-lg:px-2 lg:px-1">
                <div className="flex lg:gap-5  gap-2 my-3 ">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_867_9341)">
                      <path
                        d="M13.5634 11.7659L10.7748 9.67449V5.41426C10.7748 4.9859 10.4286 4.63965 10.0002 4.63965C9.57184 4.63965 9.22559 4.9859 9.22559 5.41426V10.0618C9.22559 10.3058 9.34023 10.5359 9.53543 10.6815L12.6338 13.0053C12.7732 13.1099 12.9359 13.1602 13.0978 13.1602C13.334 13.1602 13.5664 13.0541 13.7182 12.8496C13.9755 12.508 13.9057 12.0223 13.5634 11.7659Z"
                        fill="#9B9A9A"
                      />
                      <path
                        d="M10 0C4.48566 0 0 4.48566 0 10C0 15.5143 4.48566 20 10 20C15.5143 20 20 15.5143 20 10C20 4.48566 15.5143 0 10 0ZM10 18.4508C5.34082 18.4508 1.54918 14.6592 1.54918 10C1.54918 5.34082 5.34082 1.54918 10 1.54918C14.66 1.54918 18.4508 5.34082 18.4508 10C18.4508 14.6592 14.6592 18.4508 10 18.4508Z"
                        fill="#9B9A9A"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_867_9341">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="text-gray text-sm">
                    {event.start_date_time}
                  </div>
                </div>
                <div className="text-lg my-2">{event.event_type}</div>
                <div className="font-semibold text-[#525971]">
                  {event.title}
                </div>
                <div className="flex items-center justify-between">
                  <div className="underline text-[#474747] text-[16px] cursor-pointer">
                    Show Detail
                  </div>
                  <div className="flex cursor-pointer items-center gap-3 ">
                    <span
                      onClick={() => handleClick(event.id)}
                      className="text-primary text-[16px] my-3"
                    >
                      Register
                    </span>
                    <span>
                      <svg
                        width="18"
                        height="8"
                        viewBox="0 0 20 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 3.5L0.5 3.5L0.5 4.5L1 4.5L1 3.5ZM19.3536 4.35356C19.5488 4.1583 19.5488 3.84171 19.3536 3.64645L16.1716 0.464469C15.9763 0.269207 15.6597 0.269207 15.4645 0.464469C15.2692 0.659731 15.2692 0.976314 15.4645 1.17158L18.2929 4L15.4645 6.82843C15.2692 7.02369 15.2692 7.34027 15.4645 7.53554C15.6597 7.7308 15.9763 7.7308 16.1716 7.53554L19.3536 4.35356ZM1 4.5L19 4.5L19 3.5L1 3.5L1 4.5Z"
                          fill="#C42C2D"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      <div>
        <Link href="/events">
          <Button
            content={"View all events"}
            px={"px-6"}
            py={"py-2"}
            width={"full"}
          />
        </Link>
      </div>
    </div>
  );
}

export default DashboardEvents;
