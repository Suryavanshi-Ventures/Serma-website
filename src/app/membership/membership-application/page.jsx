"use client";

import Button from "@/components/button/page";
import Modal from "@/components/common-modal/modal";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const page = () => {
  const card = [
    {
      title: "Industry Membership - Free",
      desc: " Subscription period: Unlimited Risk and claims managers Insurance company In-house counsel",
    },
    {
      title: "Student - $200.00 (USD)",
      desc: "Subscription period: 1 year",
    },
    {
      title: "Attorney/Vendor Membership - $950.00 (USD)",
      desc: "Subscription period: 1 year Outside counsel Service providers Third-party administrator employees Brokers",
    },
  ];

  const [popUp, setPopUp] = useState();
  const [isSelectedCard, setIsSelectedCard] = useState();

  return (
    <div>
      <div className="lg:mx-10 2xl:mx-20 mb-10">
        <div>
          <div className="h-[400px] sm:max-h-[350px] max-w-[1351px] relative">
            <Image
              src="/pages/members-only-content/member-only.png"
              unoptimized
              width={100}
              height={100}
              className="w-full h-full object-cover sm:object-fill"
            />
            <div className="absolute top-0 flex flex-col justify-center items-center w-full h-full">
              <div>
                <h2 className="heading-2 text-white">Membership Application</h2>
              </div>
              <div>
                <h2 className=" text-sm sm:text-lg font-normal text-white">
                  Select membership level
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[50px] flex lg:flex-row flex-col items-center gap-10 lg:gap-[105px] lg:justify-between">
          {/* cards */}
          {card.map((item, index) => (
            <div
              onClick={() => setIsSelectedCard(index)}
              key={index}
              className={` w-[300px] sm:w-[375px] max-sm:py-5 sm:h-[354px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white
         px-[24px] pt-[24px] rounded-[20px] cursor-pointer ${
           index === isSelectedCard ? "border-[#C42C2D] border-2" : ""
         }`}
            >
              <div className="flex justify-between ">
                <h2 className="max-w-[200px] sm:max-w-[300px] text-lg md:text-[24px] font-bold">
                  {item.title}
                </h2>

                {isSelectedCard === index && (
                  <svg
                    className="mt-2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_438_49553)">
                      <path
                        d="M12 0C5.38346 0 0 5.38346 0 12C0 18.6165 5.38346 24 12 24C18.6165 24 24 18.6165 24 12C24 5.38346 18.6165 0 12 0ZM18.7068 8.84211L11.0376 16.4511C10.5865 16.9023 9.86466 16.9323 9.38346 16.4812L5.32331 12.782C4.84211 12.3308 4.81203 11.5789 5.23308 11.0977C5.68421 10.6165 6.43609 10.5865 6.91729 11.0376L10.1353 13.985L16.9925 7.12782C17.4737 6.64662 18.2256 6.64662 18.7068 7.12782C19.188 7.60902 19.188 8.3609 18.7068 8.84211Z"
                        fill="#C42C2D"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_438_49553">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                )}
              </div>
              <div className="max-w-[240px] mt-[24px]">
                <p className="text-lg text-[#9B9A9A]">{item.desc}</p>
              </div>
            </div>
          ))}
          {/* cards end */}
        </div>
        <div className="mt-[50px]">
          <div onClick={() => setPopUp(true)}>
            <Button content={"Next"} px={"px-6"} py={"py-2"} />
          </div>
        </div>
      </div>
      <Modal
        wantTocloseFromScreen={true}
        width={"max-w-[600px]"}
        isOpen={popUp}
        onClose={() => setPopUp(false)}
        className="custom-modal  "
      >



{/* wantTocloseFromScreen={false}
        wantCrossButton={true}
        isOpen={forgetPassPop}
        onClose={() => setForgetPassPop(false)}
        className="custom-modal"
        width={"max-w-[600px]"} */}

        <div className="w-full    px-5 md:px-16  text-center ">
          <div>
            <h2 className="text-2xl font-bold">Membership Application</h2>
          </div>
          <div>
            <p className="text-[#9B9A9A] text-base  font-normal mt-5">
              Student - $200.00 (USD) Subscription period: 1 year
            </p>
          </div>
          <div className="mt-[40px]">
            <input
              placeholder="Enter Your Email"
              className="pl-[30px] py-3 md:py-4 w-full  outline-primary border border-[#D7D7D7] rounded-xl"
            />
          </div>
          <div>
            <Link href="/membership/membership-application/membership-form">
              <Button content={"Next"} px={"md:px-6"} py={"py-2 md:py-3 w-full"} />
            </Link>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default page;
