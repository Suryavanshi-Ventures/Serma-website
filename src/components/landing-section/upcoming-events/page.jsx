"use client";
import Image from "next/image";
import Button from "@/components/button/page";
import { useRouter } from "next/navigation";
import { EVENT_CARD_DETAILS } from "@/app/utils/constant/constant";
function UpcomingEvent() {
  const router = useRouter();
  const handlePush = () => {
    router.push("/events");
  };
  return (
    <>
      <div className="text-center text-xl md:text-[36px] font-semibold text-[#333333] ">
        Upcoming Events
      </div>
      <div className="text-center responsive-Text text-gray  md:my-8 md:space-y-2 ">
        <p>
          The Sports and Entertainment Risk Management Alliance (SERMA) is the
          first risk management association devoted entirely to the sports and
        </p>
        <p>entertainment industries.</p>{" "}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-1 gap-x-3 gap-y-1 max-sm:space-y-5">
        {EVENT_CARD_DETAILS.map((event, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-xl flex max-sm:justify-center max-sm:p-0 md:p-3"
          >
            <div className="max-md:p-3">
              <div className="">
                <Image
                  src={event.imageSrc}
                  height={225}
                  width={396}
                  alt="image"
                  className="w-full rounded-2xl"
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
                  <div className="text-gray text-sm">{event.date}</div>
                </div>
                <div className="text-lg my-2">{event.type}</div>
                <div className="font-semibold text-[#525971]">
                  {event.title}
                </div>
                <div className="flex justify-end items-center gap-3">
                  <span className="text-primary text-lg my-3">Register</span>
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
        ))}
      </div>
      <div onClick={handlePush} className="mt-16">
        <Button content={"View all events"} px={"px-5"} py={"py-2"} />
      </div>
    </>
  );
}

export default UpcomingEvent;
