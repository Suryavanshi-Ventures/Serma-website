"use client";

import Modal from "@/components/common-modal/modal";
import React, { useEffect, useRef, useState } from "react";

const Page = () => {
  const dropList = ["state-1", "state-2", "state-3", "state-4", "state-5"];
  const [isDropDown, setIsDropDown] = useState(false);
  const dropdownRef = useRef(null);
  const [search, setSearch] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropDown(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const filteredList = dropList.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="mt-20 text-[#333333]">
      <div className="mx-5 lg:mx-10 2xl:mx-20  mb-7">
        <div>
          <h2 className="heading-2 font-bold">Membership Application</h2>
        </div>
        <div className=" mt-[60px] flex justify-center">
          <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 ">
              <div className=" w-full lg:w-[436px]">
                <div>
                  <h2 className="font-bold text-lg">First Name*</h2>
                </div>
                <div className="mt-4 ">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter Your First Name"
                    className="outline-none w-full border placeholder:text-[#939393] placeholder:text-base text-lg pl-5 py-3 rounded-[10px] border-[#D7D7D7]"
                  />
                </div>
              </div>
              <div className=" w-full lg:w-[436px]">
                <div>
                  <h2 className="font-bold text-lg">Last Name*</h2>
                </div>
                <div className="mt-4 ">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter Your Last Name"
                    className="outline-none w-full border placeholder:text-[#939393] placeholder:text-base text-lg pl-5 py-3 rounded-[10px] border-[#D7D7D7]"
                  />
                </div>
              </div>
              <div className=" w-full lg:w-[436px]">
                <div>
                  <h2 className="font-bold text-lg">Organization*</h2>
                </div>
                <div className="mt-4 ">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter Your Organization Name"
                    className="outline-none w-full border placeholder:text-[#939393] placeholder:text-base text-lg pl-5 py-3 rounded-[10px] border-[#D7D7D7]"
                  />
                </div>
              </div>
              <div className=" w-full lg:w-[436px]">
                <div>
                  <h2 className="font-bold text-lg">Title*</h2>
                </div>
                <div className="mt-4 ">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter Your Title Name"
                    className="outline-none w-full border placeholder:text-[#939393] placeholder:text-base text-lg pl-5 py-3 rounded-[10px] border-[#D7D7D7]"
                  />
                </div>
              </div>
              <div className=" w-full lg:w-[436px]">
                <div>
                  <h2 className="font-bold text-lg">Email*</h2>
                </div>
                <div className="mt-4 ">
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="info@theserma.org"
                    className="outline-none w-full border placeholder:text-[#939393] placeholder:text-base text-lg pl-5 py-3 rounded-[10px] border-[#D7D7D7]"
                  />
                </div>
              </div>
              <div className=" w-full lg:w-[436px]">
                <div>
                  <h2 className="font-bold text-lg">Address*</h2>
                </div>
                <div className="mt-4 ">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter Your Address"
                    className="outline-none w-full border placeholder:text-[#939393] placeholder:text-base text-lg pl-5 py-3 rounded-[10px] border-[#D7D7D7]"
                  />
                </div>
              </div>
              <div className=" w-full lg:w-[436px]">
                <div>
                  <h2 className="font-bold text-lg">City</h2>
                </div>
                <div className="mt-4 ">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter Your City"
                    className="outline-none w-full border placeholder:text-[#939393] placeholder:text-base text-lg pl-5 py-3 rounded-[10px] border-[#D7D7D7]"
                  />
                </div>
              </div>
              <div className=" w-full lg:w-[436px]">
                <div>
                  <h2 className="font-bold text-lg">State*</h2>
                </div>
                <div className="mt-4 ">
                  <div className="relative" ref={dropdownRef}>
                    <div
                      onClick={() => setIsDropDown(!isDropDown)}
                      className="py-3 rounded-[10px] border border-[#D7D7D7] flex justify-between items-center px-5 relative cursor-pointer"
                    >
                      <input
                        type="search"
                        name=""
                        id=""
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Select State"
                        className="outline-none w-full placeholder:text-[#939393] placeholder:text-base text-lg  "
                      />
                      <div>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className={
                            isDropDown
                              ? "rotate-180 duration-300"
                              : "rotate-0 duration-300"
                          }
                        >
                          <path
                            d="M12.0002 15.9999C11.8686 16.0007 11.7381 15.9755 11.6163 15.9257C11.4944 15.8759 11.3836 15.8026 11.2902 15.7099L5.29019 9.70994C5.10188 9.52164 4.99609 9.26624 4.99609 8.99994C4.99609 8.73364 5.10188 8.47825 5.29019 8.28994C5.47849 8.10164 5.73388 7.99585 6.00019 7.99585C6.26649 7.99585 6.52188 8.10164 6.71019 8.28994L12.0002 13.5899L17.2902 8.29994C17.4815 8.13612 17.7276 8.05051 17.9792 8.06023C18.2309 8.06995 18.4697 8.17428 18.6477 8.35238C18.8258 8.53047 18.9302 8.76921 18.9399 9.02089C18.9496 9.27256 18.864 9.51864 18.7002 9.70994L12.7002 15.7099C12.5139 15.8947 12.2625 15.9988 12.0002 15.9999Z"
                            fill="#939393"
                          />
                        </svg>
                      </div>
                    </div>
                    <div
                      className={`mt-1 absolute top-full transition-all ${
                        isDropDown
                          ? "block  w-full lg:w-[436px] translate-y-0 duration-300 opacity-100  z-50 bg-white"
                          : "opacity-0 w-full "
                      }`}
                    >
                      <ul className="space-y-2">
                        {filteredList.map((item) => (
                          <li className="border py-3 rounded-[10px]  border-[#D7D7D7] px-5 ">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" w-full lg:w-[436px]">
                <div>
                  <h2 className="font-bold text-lg">Zip Code</h2>
                </div>
                <div className="mt-4 ">
                  <input
                    type="number"
                    name=""
                    id=""
                    placeholder="Enter Your Zip Code"
                    className="outline-none w-full border placeholder:text-[#939393] placeholder:text-base text-lg pl-5 py-3 rounded-[10px] border-[#D7D7D7]"
                  />
                </div>
              </div>
              <div className=" w-full lg:w-[436px]">
                <div>
                  <h2 className="font-bold text-lg">Business Phone*</h2>
                </div>
                <div className="mt-4 ">
                  <input
                    type="number"
                    name=""
                    id=""
                    placeholder="Enter Business Phone"
                    className="outline-none w-full border placeholder:text-[#939393] placeholder:text-base text-lg pl-5 py-3 rounded-[10px] border-[#D7D7D7]"
                  />
                </div>
              </div>
              <div className=" w-full lg:w-[436px]">
                <div>
                  <h2 className="font-bold text-lg">Mobile Phone</h2>
                </div>
                <div className="mt-4 ">
                  <input
                    type="number"
                    name=""
                    id=""
                    placeholder="Enter Your Mobile Phone"
                    className="outline-none w-full border placeholder:text-[#939393] placeholder:text-base text-lg pl-5 py-3 rounded-[10px] border-[#D7D7D7]"
                  />
                </div>
              </div>
              <div className=" w-full lg:w-[436px]">
                <div>
                  <h2 className="font-bold text-lg">Date</h2>
                </div>
                <div className="mt-4 ">
                  <div className="flex justify-between items-center border  text-lg px-5 py-3 rounded-[10px] border-[#D7D7D7]">
                    <div>
                      <p>select date</p>
                    </div>
                    <div className="relative">
                      <svg
                        onClick={() => setShowDatePicker(!showDatePicker)}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.0859 10.7808C18.6037 10.7808 19.0234 10.361 19.0234 9.84326C19.0234 9.32549 18.6037 8.90576 18.0859 8.90576C17.5682 8.90576 17.1484 9.32549 17.1484 9.84326C17.1484 10.361 17.5682 10.7808 18.0859 10.7808Z"
                          fill="#939393"
                        />
                        <path
                          d="M20.2441 1.87476H19.0254V0.937256C19.0254 0.419475 18.6057 -0.000244141 18.0879 -0.000244141C17.5701 -0.000244141 17.1504 0.419475 17.1504 0.937256V1.87476H12.8848V0.937256C12.8848 0.419475 12.465 -0.000244141 11.9473 -0.000244141C11.4295 -0.000244141 11.0098 0.419475 11.0098 0.937256V1.87476H6.79102V0.937256C6.79102 0.419475 6.3713 -0.000244141 5.85352 -0.000244141C5.33573 -0.000244141 4.91602 0.419475 4.91602 0.937256V1.87476H3.74414C1.67639 1.87476 -0.00585938 3.55701 -0.00585938 5.62476V20.2498C-0.00585938 22.3175 1.67639 23.9998 3.74414 23.9998H10.916C11.4338 23.9998 11.8535 23.58 11.8535 23.0623C11.8535 22.5445 11.4338 22.1248 10.916 22.1248H3.74414C2.71027 22.1248 1.86914 21.2836 1.86914 20.2498V5.62476C1.86914 4.59088 2.71027 3.74976 3.74414 3.74976H4.91602V4.68726C4.91602 5.20504 5.33573 5.62476 5.85352 5.62476C6.3713 5.62476 6.79102 5.20504 6.79102 4.68726V3.74976H11.0098V4.68726C11.0098 5.20504 11.4295 5.62476 11.9473 5.62476C12.465 5.62476 12.8848 5.20504 12.8848 4.68726V3.74976H17.1504V4.68726C17.1504 5.20504 17.5701 5.62476 18.0879 5.62476C18.6057 5.62476 19.0254 5.20504 19.0254 4.68726V3.74976H20.2441C21.278 3.74976 22.1191 4.59088 22.1191 5.62476V10.9685C22.1191 11.4863 22.5389 11.906 23.0566 11.906C23.5744 11.906 23.9941 11.4863 23.9941 10.9685V5.62476C23.9941 3.55701 22.3119 1.87476 20.2441 1.87476Z"
                          fill="#939393"
                        />
                        <path
                          d="M18.3223 12.6558C15.1948 12.6558 12.6504 15.2001 12.6504 18.3276C12.6504 21.4551 15.1948 23.9995 18.3223 23.9995C21.4498 23.9995 23.9941 21.4551 23.9941 18.3276C23.9941 15.2001 21.4498 12.6558 18.3223 12.6558ZM18.3223 22.1245C16.2287 22.1245 14.5254 20.4213 14.5254 18.3276C14.5254 16.234 16.2287 14.5308 18.3223 14.5308C20.4158 14.5308 22.1191 16.234 22.1191 18.3276C22.1191 20.4213 20.4158 22.1245 18.3223 22.1245Z"
                          fill="#939393"
                        />
                        <path
                          d="M19.6816 17.3901H19.2598V16.4058C19.2598 15.888 18.84 15.4683 18.3223 15.4683C17.8045 15.4683 17.3848 15.888 17.3848 16.4058V18.3276C17.3848 18.8454 17.8045 19.2651 18.3223 19.2651H19.6816C20.1994 19.2651 20.6191 18.8454 20.6191 18.3276C20.6191 17.8099 20.1994 17.3901 19.6816 17.3901Z"
                          fill="#939393"
                        />
                        <path
                          d="M14.0098 10.7808C14.5275 10.7808 14.9473 10.361 14.9473 9.84326C14.9473 9.32549 14.5275 8.90576 14.0098 8.90576C13.492 8.90576 13.0723 9.32549 13.0723 9.84326C13.0723 10.361 13.492 10.7808 14.0098 10.7808Z"
                          fill="#939393"
                        />
                        <path
                          d="M9.93164 14.8589C10.4494 14.8589 10.8691 14.4392 10.8691 13.9214C10.8691 13.4036 10.4494 12.9839 9.93164 12.9839C9.41387 12.9839 8.99414 13.4036 8.99414 13.9214C8.99414 14.4392 9.41387 14.8589 9.93164 14.8589Z"
                          fill="#939393"
                        />
                        <path
                          d="M5.85352 10.7808C6.37128 10.7808 6.79102 10.361 6.79102 9.84326C6.79102 9.32549 6.37128 8.90576 5.85352 8.90576C5.33575 8.90576 4.91602 9.32549 4.91602 9.84326C4.91602 10.361 5.33575 10.7808 5.85352 10.7808Z"
                          fill="#939393"
                        />
                        <path
                          d="M5.85352 14.8589C6.37128 14.8589 6.79102 14.4392 6.79102 13.9214C6.79102 13.4036 6.37128 12.9839 5.85352 12.9839C5.33575 12.9839 4.91602 13.4036 4.91602 13.9214C4.91602 14.4392 5.33575 14.8589 5.85352 14.8589Z"
                          fill="#939393"
                        />
                        <path
                          d="M5.85352 18.9373C6.37128 18.9373 6.79102 18.5175 6.79102 17.9998C6.79102 17.482 6.37128 17.0623 5.85352 17.0623C5.33575 17.0623 4.91602 17.482 4.91602 17.9998C4.91602 18.5175 5.33575 18.9373 5.85352 18.9373Z"
                          fill="#939393"
                        />
                        <path
                          d="M9.93164 18.9373C10.4494 18.9373 10.8691 18.5175 10.8691 17.9998C10.8691 17.482 10.4494 17.0623 9.93164 17.0623C9.41387 17.0623 8.99414 17.482 8.99414 17.9998C8.99414 18.5175 9.41387 18.9373 9.93164 18.9373Z"
                          fill="#939393"
                        />
                        <path
                          d="M9.93164 10.7808C10.4494 10.7808 10.8691 10.361 10.8691 9.84326C10.8691 9.32549 10.4494 8.90576 9.93164 8.90576C9.41387 8.90576 8.99414 9.32549 8.99414 9.84326C8.99414 10.361 9.41387 10.7808 9.93164 10.7808Z"
                          fill="#939393"
                        />
                      </svg>
                      {showDatePicker && (
                        <Modal
                          wantTocloseFromScreen={true}
                          onClose={() => setShowDatePicker(false)}
                          isOpen={showDatePicker}
                          className="custom-modal"
                          width={"max-w-[200px]"}
                        >
                          <div>
                            <input
                              defaultValue={true}
                              type="date"
                              name=""
                              id=""
                            />
                          </div>
                        </Modal>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 w-full">
              <div>
                <p className="text-lg font-normal">
                  Are you interested in volunteering on a SERMA committee?
                </p>
              </div>
              <div className="flex items-center gap-11 mt-10">
  <div className="flex gap-4 items-center">
    <div>
      <input
        type="radio"
        name="option"
        id="yes"
        className="w-4 h-4 flex items-center accent-primary"
      />
    </div>
    <div>
      <p className="text-[18px] font-normal">Yes</p>
    </div>
  </div>
  <div className="flex gap-4 items-center">
    <div>
      <input
        type="radio"
        name="option"
        id="no"
        className="w-4 h-4 flex items-center accent-primary"
      />
    </div>
    <div>
      <p className="text-[18px] font-normal">No</p>
    </div>
  </div>
</div>

            </div>
            <div className="mt-[60px] flex justify-between">
              <div>
                <button className="border text-lg font-medium text-[#C42C2D] border-[#C8C8C8] rounded-full px-8 py-3">
                  Cancel
                </button>
              </div>
              <div>
                <button className="border flex items-center gap-2 text-lg font-medium bg-[#C42C2D] text-white  rounded-full px-8 py-3">
                  Next
                  <svg
                    width="20"
                    height="9"
                    viewBox="0 0 20 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 4L0.5 4L0.5 5L1 5L1 4ZM19.3536 4.85356C19.5488 4.6583 19.5488 4.34171 19.3536 4.14645L16.1716 0.964469C15.9763 0.769207 15.6597 0.769207 15.4645 0.964469C15.2692 1.15973 15.2692 1.47631 15.4645 1.67158L18.2929 4.5L15.4645 7.32843C15.2692 7.52369 15.2692 7.84027 15.4645 8.03554C15.6597 8.2308 15.9763 8.2308 16.1716 8.03554L19.3536 4.85356ZM1 5L19 5L19 4L1 4L1 5Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
