"use client";
import Button from "@/components/button/page";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

function Membership() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/membership");
  };
  return (
    <>
      <div className="flex flex-col md:items-center md:flex-row gap-10 md:gap-20 lg:gap-36 ">
        <div className="md:text-[36px] text-xl font-bold  max-md:flex max-md:justify-center max-md:items-center gap-2 text-[#333333] ">
          <div>SERMA </div>
          <div className="my-2">Membership</div>
        </div>
        <div className="responsive-Text text-[#9B9A9A] ">
          While there are a number of excellent organizations with a wide range
          of services in our community, there isn’t one specifically dealing
          with the issues that we face in handling sports and entertainment
          claims and risk management. SERMA will fill that void by providing
          compelling and interesting programming in an exciting and interactive
          environment.
        </div>
      </div>
      <div className="grid  sm:grid-cols-2 lg:grid-cols-4 grid-rows-1 gap-x-5 gap-y-1 md:my-10 my-5">
        <div className="  rounded-xl shadow-lg p-1 md:p-3 max-sm:py-4 ">
          <div className="w-full flex max-sm:justify-center">
            <Image
              src="/membership/member-1.png"
              width={322}
              height={198}
              objectFit="cover"
            />
          </div>
          <div className="text-center font-semibold text-[18px] my-3 text-[#333333]">
            Industry Membership
          </div>
          <div className="px-2 text-[14px] max-md:pb-5 text-center">
            Open to industry professionals engaged in risk or claims management.
            This includes risk managers, claims managers, insurance
            professionals, and in-house counsel.
          </div>
        </div>
        <div className="  rounded-xl shadow-lg p-1 md:p-3 max-sm:py-4">
          <div className="w-full flex max-sm:justify-center">
            <Image
              src="/membership/member-2.png"
              width={322}
              height={198}
              objectFit="cover"
            />
          </div>
          <div className="text-center font-semibold text-[18px] my-3 text-[#333333]">
            Founding Member
          </div>
          <div className="px-2 text-[14px] max-md:pb-5 text-center">
            The first 25 members to join SERMA will be granted the designation
            of Founding Member. This is a lifetime appointment.
          </div>
        </div>
        <div className="  rounded-xl shadow-lg p-1 md:p-3   max-sm:py-4 ">
          <div className="w-full flex max-sm:justify-center">
            <Image
              src="/membership/member-3.png"
              width={322}
              height={198}
              objectFit="cover"
            />
          </div>
          <div className="text-center font-semibold text-[18px] my-3 text-[#333333]">
            Attorney/Vendor Membership
          </div>
          <div className="px-2 text-[14px] max-md:pb-5 text-center">
            Open to outside counsel, TPA professionals, brokers, and service
            providers.
          </div>
        </div>
        <div className="  rounded-xl shadow-lg p-1 md:p-3  max-sm:py-4 ">
          <div className="w-full flex max-sm:justify-center">
            <Image
              src="/membership/member-4.png"
              width={322}
              height={198}
              objectFit="cover"
            />
          </div>
          <div className="text-center font-semibold text-[18px] my-3 text-[#333333]">
            Student Membership
          </div>
          <div className="px-2 text-[14px] max-md:pb-5 text-center">
            Open to college/university students.
          </div>
        </div>
      </div>
      <div onClick={handleClick}>
        <Button content={"Join SERMA"} px={"px-5"} py={"py-2"} />
      </div>
    </>
  );
}

export default Membership;
