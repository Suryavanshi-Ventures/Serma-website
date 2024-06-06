"use client";
import Image from "next/image";
import React from "react";
import { PROFILES } from "@/app/utils/constant/constant";
import { useRouter } from "next/navigation";
function PrivateMember() {
  const router = useRouter();
  ///members-only-content/Dashboard/private-member
  const handleClick = (id) => {
    console.log(id);
    router.push(`/members-only-content/Dashboard/private-member/${id}`);
  };
  return (
    <div className="w-full h-1/2  rounded-lg   border overflow-scroll border-[#D9D9D980]">
      <div className="grid  py-2 bg-[#F5F6F8] grid-cols-4  place-items-center text-[12px] md:text-[16px]  font-semibold">
        <div className="">Profile</div>
        <div>Name</div>
        <div>Organization</div>
        <div>Membership</div>
      </div>
      {PROFILES.map((data) => (
        <>
          <div className="grid  grid-cols-4 place-items-center max-lg:gap-10 my-4 text-[12px] md:text-[16px]  font-normal ">
            <div
              onClick={() => handleClick(data.id)}
              className="cursor-pointer"
            >
              <Image
                src={data.image}
                height={50}
                width={50}
                alt="user_profile"
              />
            </div>
            <div>{data.name}</div>
            <div>{data.organization}</div>
            <div>{data.membership}</div>
          </div>
          <hr className="text-[#D9D9D9]" />
        </>
      ))}
    </div>
  );
}

export default PrivateMember;
