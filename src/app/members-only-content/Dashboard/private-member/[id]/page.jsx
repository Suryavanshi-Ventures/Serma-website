"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useSession } from "next-auth/react";
import useAxiosFetch from "@/hooks/axiosFetch";
import { useRouter } from "next/navigation";

function MemberProfile() {
  const { id } = useParams();
  const { data: session } = useSession();
  const router = useRouter();
  const token = session?.user?.userToken;
  const API_URL = `${process.env.NEXT_PUBLIC_APP_NEXTAUTH_URL}/contact/findById/${id}`;
  const {
    data: userDetail,
    loading,
    error,
  } = useAxiosFetch(
    token ? API_URL : null,
    {
      headers: { Authorization: `Bearer ${token}` },
    },
    id
  );
  const userDetailsData = userDetail?.result?.data;
  const handleGoBack = () => {
    router.push("/members-only-content/Dashboard/private-member");
  };
  return (
    <div className="w-full">
      <>
        <div className="hidden md:flex  items-center gap-3">
          <div
            onClick={handleGoBack}
            className="text-gray font-semibold hover:text-primary transition duration-300 cursor-pointer"
          >
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

          <div className="text-primary font-semibold">
            {userDetailsData?.first_name} {userDetailsData?.last_name}
          </div>
        </div>
        <div className=" mb-[100px] mt-7 relative bg-secondary h-[150px] rounded-2xl">
          <Image
            // src={userDetailsData?.profile_url ?? "/image-not-found3.png"}
            src="/image-not-found3.png"
            height={120}
            width={120}
            alt="user-image"
            className="absolute bottom-[-65px] left-8 rounded-full h-[110px] w-[110px]"
          />
        </div>
        <hr className="text-[#9B9A9A33] mb-5" />
        <div className="space-y-6">
          <div className="grid grid-col-1 md:grid-cols-3 md:px-[20px] items-center  ">
            <div className="hidden md:flex text-gray font-semibold">Name</div>

            <div className="w-full   ">
              <div htmlFor="" className="mb-2 font-semibold max-md:text-gray">
                First Name
              </div>
              <input
                type="text"
                className="border border-gray p-2 rounded-lg w-full"
                value={userDetailsData?.first_name}
              />
            </div>
            <div className="max-md:mt-5 md:ml-5">
              <div htmlFor="" className="mb-2 font-semibold max-md:text-gray">
                Last Name
              </div>
              <input
                type="text"
                className="border border-gray p-2 rounded-lg w-full"
                value={userDetailsData?.last_name}
              />
            </div>
          </div>

          <hr className="text-[#9B9A9A33]" />
          <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 items-center md:px-[20px]">
            <div className="font-semibold text-gray my-2">Membership Level</div>
            <input
              type="text"
              className="border border-gray p-2 rounded-lg"
              value={userDetailsData?.membership_level}
            />
          </div>
          <hr className="text-[#9B9A9A33]" />
          <div className="grid grid-cols-1  sm:grid-cols-2  items-center md:grid-cols-3  md:px-[20px]">
            <div className="font-semibold text-gray my-2">Organization</div>
            <input
              type="text"
              className="border border-gray p-2 rounded-lg"
              value={userDetailsData?.organization}
            />
          </div>
          <hr className="text-[#9B9A9A33]" />
          <div className="grid grid-cols-1  sm:grid-cols-2  items-center md:grid-cols-3  md:px-[20px]">
            <div className="font-semibold text-gray my-2">Title</div>
            <input
              type="text"
              className="border border-gray p-2 rounded-lg"
              value={userDetailsData?.title}
            />
          </div>
          <hr className="text-[#9B9A9A33]" />
          <div className="grid grid-cols-1  sm:grid-cols-2  items-center md:grid-cols-3  md:px-[20px]">
            <div className="font-semibold text-gray my-2">Email</div>
            <input
              type="text"
              className="border border-gray p-2 rounded-lg"
              value={userDetailsData?.email}
            />
          </div>
          <hr className="text-[#9B9A9A33]" />
          <div className="grid grid-cols-1  sm:grid-cols-2  items-center md:grid-cols-3  md:px-[20px]">
            <div className="font-semibold text-gray my-2">State</div>
            <input
              type="text"
              className="border border-gray p-2 rounded-lg"
              value={userDetailsData?.state}
            />
          </div>
          <hr className="text-[#9B9A9A33]" />
          <div className="grid grid-cols-1  sm:grid-cols-2  items-center md:grid-cols-3  md:px-[20px]">
            <div className="font-semibold text-gray my-2">Zipcode</div>
            <input
              type="text"
              className="border border-gray p-2 rounded-lg"
              value={userDetailsData?.zip_code}
            />
          </div>
          <hr className="text-[#9B9A9A33]" />
          <div className="flex flex-col 2xl:space-x-[185px] xl:space-x-[150px]  md:flex-row  md:px-[25px]  ">
            <div className="font-semibold text-gray my-2">Professional Bio</div>
            <textarea
              type="text"
              className="border border-gray p-2 rounded-lg md:w-1/2"
              value={userDetailsData?.Professional ?? "N/A"}
            />
          </div>
          <hr className="text-[#9B9A9A33]" />
        </div>
      </>
    </div>
  );
}

export default MemberProfile;
