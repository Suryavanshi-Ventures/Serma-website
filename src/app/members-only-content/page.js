import Button from "@/components/button/page";
import Image from "next/image";
import React from "react";

const Membership = () => {
  return (
    <div>
      <div className="mx-20">
        <div>
          <div className="max-h-[350px] max-w-[1351px] relative">
            <Image
              src="/pages/members-only-content/member-only.png"
              unoptimized
              width={100}
              height={100}
              className="w-full h-full object-fill"
            />
            <div className="absolute top-0 flex justify-center items-center w-full h-full">
              <h2 className="text-[36px] font-bold text-white">
                Members Only Content
              </h2>
            </div>
          </div>
        </div>
        <div className="mt-[64px]">
          <div className="flex gap-9 items-start">
            <div>
              <div>
                <h2 className="text-3xl font-bold">Welcome to SERMA!</h2>
              </div>
              <hr className="w-full my-8" />
              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl font-bold">MEMBERS-ONLY CONTENT</h2>
                </div>
                <div>
                  <p className="text-gray text-xl font-normal">
                    Please take a moment to update your user profile so that you
                    can start interacting with other SERMA members.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-base">
                    Complete your member bio and upload your headshot
                  </p>
                </div>
              </div>
              <hr className=" w-full mt-8" />
            </div>
            <div>
              <div className="max-h-[338px] max-w-[344px] relative">
                <Image
                  src="/pages/members-only-content/member-only2.png"
                  unoptimized
                  width={100}
                  height={100}
                  className="w-full h-full object-fill"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[94px] ">
          <div className="relative flex flex-col items-center ">
            <div className="">
              <h2 className="text-[30px] font-bold">Members-only Login</h2>
            </div>
            <div className="mt-[57px] q">
              <div className="flex justify-center w-[791px] h-[655px] z-50 bg-white rounded-[36px] shadow-xl shadow-[#00000014] drop-shadow-xl">
                <div className="w-full px-[60px] py-16  ">
                  <div>
                    <div>
                      <h2 className="text-[40px] font-normal text-black">
                        Sign in
                      </h2>
                    </div>
                    <hr className="w-full my-[30px]" />
                    <div className="space-y-4">
                      <div>
                        <h2 className="text-base">Enter your email</h2>
                      </div>
                      <div>
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Email address "
                          className="pl-[38px] py-[20px] outline-none border border-[#B3B3B3] rounded-xl w-full"
                        />
                      </div>
                    </div>
                    <div className="space-y-4 mt-[14px]">
                      <div>
                        <h2>Enter your Password</h2>
                      </div>
                      <div>
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Password"
                          className="pl-[38px] py-[20px] outline-none border border-[#B3B3B3] rounded-xl w-full"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end text-lg mt-[13px]">
                      <p>Forgot Password</p>
                    </div>
                    <div className="mt-[27px]">
                      <button className="w-full text-[22px] py-[26px]  text-white bg-[#C42C2D]">
                        Sign in
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#03989E] flex justify-center items-center text-white h-[588px] -mt-20 -z-10">
        <div className="flex flex-col items-center text-center space-y-[50px]">
          <div>
            <h2 className="text-[30px] font-normal">
              Have additional questions? Email us below. 
            </h2>
          </div>
          <div>
            <p className="text-[24px] font-bold max-w-[805px]">
              Please take a moment to update your user profile so that you can
              start interacting with other SERMA members. 
            </p>
          </div>
          <div>
            <button className="flex gap-2.5 items-center px-7 py-3 border rounded-full">
              <p>Contact Team</p>
              <svg
                width="20"
                height="8"
                viewBox="0 0 20 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 3.5L0.5 3.5L0.5 4.5L1 4.5L1 3.5ZM19.3536 4.35356C19.5488 4.1583 19.5488 3.84171 19.3536 3.64645L16.1716 0.464469C15.9763 0.269207 15.6597 0.269207 15.4645 0.464469C15.2692 0.659731 15.2692 0.976314 15.4645 1.17158L18.2929 4L15.4645 6.82843C15.2692 7.02369 15.2692 7.34027 15.4645 7.53554C15.6597 7.7308 15.9763 7.7308 16.1716 7.53554L19.3536 4.35356ZM1 4.5L19 4.5L19 3.5L1 3.5L1 4.5Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
