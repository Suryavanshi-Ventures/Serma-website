import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="w-full">
      <div className="text-gray  text-base font-bold flex items-center gap-3">
        <div>
          <Link href="/members-only-content/Dashboard/profile">
            <p className=" hover:text-primary transition duration-300">
              Profile
            </p>
          </Link>
        </div>
        <div>
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
        </div>
        <div>
          <p className="text-[#C42C2D]">Change Password</p>
        </div>
      </div>
      <div className="mt-10 text-[#333333] border border-[#D9D9D980] w-full p-[30px] rounded-2xl">
        <div>
          <h2 className="text-xl font-bold ">Change Password</h2>
        </div>
        <div className="max-w-[700px] mt-[30px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-28 gap-y-7">
            <div>
              <div>
                <h2 className="text-lg font-bold">Current Password*</h2>
              </div>
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Current Password"
                  className="border border-[#9B9A9A4D]  outline-primary text-lg font-normal  rounded-xl w-full mt-5  px-3 py-3 "
                />
              </div>
            </div>
            <div>
              <div>
                <h2 className="text-lg font-bold">New Password*</h2>
              </div>
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter New Password"
                  className="border border-[#9B9A9A4D]  outline-primary text-lg font-normal  rounded-xl w-full mt-5  px-3 py-3"
                />
              </div>
            </div>
            <div>
              <div>
                <h2 className="text-lg font-bold">Confirm New password*</h2>
              </div>
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Confirm new Password"
                  className="border border-[#9B9A9A4D]  outline-primary text-lg font-normal  rounded-xl w-full mt-5  px-3 py-3 text-gray font-base placeholder:tra"
                />
              </div>
            </div>
          </div>
          <div >
            <div className="my-4">
              <h2 className="text-gray text-base font-bold">
                Password must have:
              </h2>
            </div>
            <div className="text-gray text-base font-bold ">
              <li>12 characters or more</li>
              <li>Upper and Lower case letters</li>
              <li>At least one number</li>
              <li>At least one special character #?!@$%^&*-</li>
            </div>
          </div>
        </div>
      </div>
      <div className="gap-x-10  items-center mt-10 flex justify-end">
        <div>
          <button className="border hover:bg-primary hover:text-white transition duration-300  border-[#C42C2D] text-[#C42C2D] bg-white rounded-lg px-8 py-3">
            Cancel
          </button>
        </div>
        <div>
          <button className=" text-white bg-[#C42C2D] rounded-lg px-8 py-3">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
