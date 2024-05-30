"use client";
import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { PRIVATE_MEMBER_DATA } from "@/app/utils/constant/constant";
function MemberProfile() {
  const parem = useParams();
  const id = parem.id;

  const finalData = PRIVATE_MEMBER_DATA.filter((data)=>data.id ==id)
  console.log(finalData);
  return (
    <div className=" w-full">
{finalData.map((data)=>
<>
<div className="flex items-center gap-3">
        <div className="text-gray font-semibold hover:text-primary transition duration-300 cursor-pointer">
          Members-only Directory
        </div>
        <svg
          width="9"
          height="16"
          viewBox="0 0 9 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.63388 7.11612C9.12204 7.60427 9.12204 8.39573 8.63388 8.88388L2.38388 15.1339C1.89573 15.622 1.10427 15.622 0.616117 15.1339C0.127961 14.6457 0.127961 13.8543 0.616117 13.3661L5.98223 8L0.616117 2.63388C0.127961 2.14573 0.127961 1.35427 0.616117 0.866117C1.10427 0.377961 1.89573 0.377961 2.38388 0.866117L8.63388 7.11612Z"
            fill="#C42C2D"
          />
        </svg>

        <div className="text-primary font-semibold">{data?.firstName}{" "}{data.lastName}</div>
      </div>
      <div className=" mb-[100px] mt-7 relative bg-secondary h-[150px] rounded-2xl">
        <Image
          src="/dashboard/dummy-image4.png"
          height={120}
          width={120}
          alt="user-image"
          className="absolute bottom-[-65px] left-8 "
        />
      </div>
      <hr className="text-[#9B9A9A33] mb-5" />
      <div className="space-y-6">
        <div className="grid grid-col-1 md:grid-cols-3 md:px-[40px] items-center  ">
          <div className="hidden md:flex text-gray font-semibold">Name</div>

          <div className="w-full ">
            <div
              htmlFor=""
              className="mb-2 font-semibold max-md:text-gray"
            >
              First Name
            </div>
            <input
              type="text"
              className="border border-gray p-2 rounded-lg w-full"
              value={data?.firstName}
            />
          </div>
          <div className="max-md:mt-5 md:ml-5">
            <div
              htmlFor=""
              className="mb-2 font-semibold max-md:text-gray"
            >
              Last Name
            </div>
            <input
              type="text"
              className="border border-gray p-2 rounded-lg w-full"
              value={data?.lastName}
            />
          </div>
        </div>
     

        <hr className="text-[#9B9A9A33]" />
        <div className="grid grid-col-2 md:grid-cols-3  md:px-[40px]">
          <div className="font-semibold text-gray">Membership Level</div>
          <input type="text" className="border border-gray p-2 rounded-lg" value={data?.membershipLevel} />
        </div>
        <hr className="text-[#9B9A9A33]" />
        <div className="grid grid-col-2 md:grid-cols-3  md:px-[40px]">
          <div className="font-semibold text-gray">Organization</div>
          <input type="text" className="border border-gray p-2 rounded-lg" value={data?.Organization} />
        </div>
        <hr className="text-[#9B9A9A33]" />
        <div className="grid grid-col-2 md:grid-cols-3  md:px-[40px]">
          <div className="font-semibold text-gray">Title</div>
          <input type="text" className="border border-gray p-2 rounded-lg" value={data?.title} />
        </div>
        <hr className="text-[#9B9A9A33]" />
        <div className="grid grid-col-2 md:grid-cols-3  md:px-[40px]">
          <div className="font-semibold text-gray">Email</div>
          <input type="text" className="border border-gray p-2 rounded-lg" value={data?.Email} />
        </div>
        <hr className="text-[#9B9A9A33]" />
        <div className="grid grid-col-2 md:grid-cols-3  md:px-[40px]">
          <div className="font-semibold text-gray">State</div>
          <input type="text" className="border border-gray p-2 rounded-lg" value={data?.State} />
        </div>
        <hr className="text-[#9B9A9A33]" />
        <div className="grid grid-col-2 md:grid-cols-3  md:px-[40px]">
          <div className="font-semibold text-gray">Zipcode</div>
          <input type="text" className="border border-gray p-2 rounded-lg" value={data?.Zipcode} />
        </div>
        <hr className="text-[#9B9A9A33]" />
        <div className="flex flex-col md:flex-row md:space-x-44  md:px-[40px] ">
          <div className="font-semibold text-gray">Professional Bio</div>
          <textarea
            type="text"
            className="border border-gray p-2 rounded-lg w-full"
            value={data?.Professional}
          />
        </div>
        <hr className="text-[#9B9A9A33]" />
      </div>
</>
)}

    
    </div>
  );
}

export default MemberProfile;
