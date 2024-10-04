"use client";
import Image from "next/image";
import Button from "@/components/button/page";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import useAxiosFetch from "@/hooks/axiosFetch";
import { FormatDateOnly } from "@/components/date-format/date-only/pae";
import { FormatTimeOnly } from "@/components/date-format/time-only/page";
function UpcomingEvent() {
  const router = useRouter();
  const { data: session } = useSession();
  const token = session?.user?.userToken;

  const API_URL = `${process.env.NEXT_PUBLIC_APP_NEXTAUTH_URL}/event/upcoming_events`;
  const {
    data: upcoming_events,
    loading,
    error,
  } = useAxiosFetch(
    API_URL,
    {
      headers: { Authorization: `Bearer ${token}` },
    },
    token
  );

  const handlePush = () => {
    router.push("/events");
  };
  return (
    <div>
      <div className="text-center max-md:mt-[50px] text-xl md:text-[36px] font-semibold text-[#333333] ">
        Upcoming Events
      </div>
      <div className="text-center text-[14px] md:text-[16px] lg:text-[17px] xl:text-[18px]  text-gray my-6 xl:my-8">
        <p className="leading-loose">
          The Sports and Entertainment Risk Management Alliance (SERMA) is the
          first risk management association devoted entirely to the sports and
          entertainment industries.
        </p>
        {/* <p>entertainment industries.</p>{" "} */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg2:grid-cols-3 grid-rows-1 gap-x-3 gap-y-5 max-sm:space-y-5">
        {upcoming_events &&
          upcoming_events.result.slice(0, 6).map((event, index) => (
            <div
              key={index}
              className="rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex max-sm:justify-center max-sm:p-0 md:p-3"
            >
              <div className="max-md:p-3">
                <div className=" min-h-[225px] h-auto  w-full">
                  <Image
                    src={event.image_url}
                    height={225}
                    width={396}
                    alt="image"
                    className=" rounded-2xl h-[250px]  "
                  />
                </div>
                <div className="max-md:px-2 md:px-1">
                  <div className="flex md:gap-5 gap-2 my-3 ">
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
                      {" "}
                      {FormatDateOnly(event.start_date_time)},{" "}
                      {FormatTimeOnly(event.start_date_time)}
                    </div>
                  </div>
                  <div className="text-lg my-2">{event.event_type}</div>
                  {/* event_type */}

                  <div className="text-lg font-semibold text-[#525971]">
                    {event.title}
                    {/* title */}
                  </div>
                  <div className="text-end">
                    <div className="inline-flex justify-end items-center ms-auto gap-3 cursor-pointer ">
                      <span
                        onClick={() => router.push(`/events/${event.id}`)}
                        className="text-primary text-lg my-3"
                      >
                        Register
                      </span>
                      {/* id */}
                      <span onClick={() => router.push(`/events/${event.id}`)}>
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
      </div>
      <div onClick={handlePush} className="mt-16">
        <Button content={"View all events"} px={"px-5"} py={"py-2"} />
      </div>
    </div>
  );
}

export default UpcomingEvent;
