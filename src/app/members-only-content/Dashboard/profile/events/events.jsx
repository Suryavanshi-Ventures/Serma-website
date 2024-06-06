import Image from "next/image";
import React from "react";

const Events = () => {
  const eventsList = [
    {
      date: "March 19, 2024 4:00 PM (MDT)  ",
      title: "Virtual",
      img: "/dashboard/webinar/item-1.png",
      desc: "SERMA® Webinar: Treating Elite Athlete Injuries Webinar",
    },
    {
      date: "March 19, 2024 4:00 PM (MDT)  ",
      title: "Virtual",
      img: "/dashboard/webinar/item-1.png",
      desc: "SERMA® Webinar: Treating Elite Athlete Injuries Webinar",
    },
    {
      date: "March 19, 2024 4:00 PM (MDT)  ",
      title: "Virtual",
      img: "/dashboard/webinar/item-1.png",
      desc: "SERMA® Webinar: Treating Elite Athlete Injuries Webinar",
    },
    {
      date: "March 19, 2024 4:00 PM (MDT)  ",
      title: "Virtual",
      img: "/dashboard/webinar/item-1.png",
      desc: "SERMA® Webinar: Treating Elite Athlete Injuries Webinar",
    },
    {
      date: "March 19, 2024 4:00 PM (MDT)  ",
      title: "Virtual",
      img: "/dashboard/webinar/item-1.png",
      desc: "SERMA® Webinar: Treating Elite Athlete Injuries Webinar",
    },
    {
      date: "March 19, 2024 4:00 PM (MDT)  ",
      title: "Virtual",
      img: "/dashboard/webinar/item-1.png",
      desc: "SERMA® Webinar: Treating Elite Athlete Injuries Webinar",
    },
    {
      date: "March 19, 2024 4:00 PM (MDT)  ",
      title: "Virtual",
      img: "/dashboard/webinar/item-1.png",
      desc: "SERMA® Webinar: Treating Elite Athlete Injuries Webinar",
    },
    {
      date: "March 19, 2024 4:00 PM (MDT)  ",
      title: "Virtual",
      img: "/dashboard/webinar/item-1.png",
      desc: "SERMA® Webinar: Treating Elite Athlete Injuries Webinar",
    },
    {
      date: "March 19, 2024 4:00 PM (MDT)  ",
      title: "Virtual",
      img: "/dashboard/webinar/item-1.png",
      desc: "SERMA® Webinar: Treating Elite Athlete Injuries Webinar",
    },
  ];
  return (
    <div className="px-7">
      <div>
        <div>
          <h2 className="text-xl font-bold">Registered Events</h2>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-10 justify-items-center">
            {eventsList.map((item, index) => (
              <div>
                <div className=" rounded-[22px] bg-white shadow-xl p-[22px] max-w-[300px]">
                  <div className="max-w-[300px]">
                    <div className="h-[154px] max-w-[272px]">
                      <Image
                        src={item.img}
                        width={100}
                        unoptimized
                        height={100}
                        className="object-fill w-full h-full"
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
                            <g clip-path="url(#clip0_584_1805)">
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
                          <p className="text-[10px] text-[#9B9A9A]">
                            {item.date}
                          </p>
                        </div>
                      </div>
                      <div className="mt-[16px]">
                        <p className="text-[13px] font-normal">{item.title}</p>
                      </div>
                      <div className="mt-5">
                        <p className="text-[13px] font-bold text-[#525971]">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
