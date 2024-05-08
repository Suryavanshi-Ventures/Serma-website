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

  return (
    <div>
      <div className="mx-20 mb-10">
        <div>
          <div className="max-h-[350px] max-w-[1351px] relative">
            <Image
              src="/pages/members-only-content/member-only.png"
              unoptimized
              width={100}
              height={100}
              className="w-full h-full object-fill"
            />
            <div className="absolute top-0 flex flex-col justify-center items-center w-full h-full">
              <div>
                <h2 className="text-[36px] font-bold text-white">
                  Membership Application
                </h2>
              </div>
              <div>
                <h2 className="text-lg font-normal text-white">
                  Select membership level
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[50px] flex gap-[105px]">
          {/* cards */}
          {card.map((item, index) => (
            <div
              key={index}
              className="w-[375px] h-[354px] shadow-xl drop-shadow-xl
         pl-[30px] pt-[24px] rounded-[20px]"
            >
              <div>
                <h2 className="max-w-[310px] text-[24px] font-bold">
                  {item.title}
                </h2>
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
        width={"w-[600px]"}
        isOpen={popUp}
        onClose={() => setPopUp(false)}
        className="custom-modal  "
      >
        <div className="w-full px-16  text-center ">
          <div>
            <h2 className="text-2xl font-bold">Membership Application</h2>
          </div>
          <div>
            <p className="text-[#9B9A9A] text-base font-normal mt-5">
              Student - $200.00 (USD) Subscription period: 1 year
            </p>
          </div>
          <div className="mt-[40px]">
            <input
              placeholder="Enter Your Email"
              className="pl-[30px] py-4 w-full outline-none border border-[#D7D7D7] rounded-xl"
            />
          </div>
          <div>
            <Link href="/membership/membership-application/membership-form">
              <Button content={"Next"} px={"px-6"} py={"py-3 w-full"} />
            </Link>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default page;
