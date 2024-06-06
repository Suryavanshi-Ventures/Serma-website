"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AboutUs from "@/app/about-us/page";
const Header = () => {
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [showMenuItems, setShowMenuItems] = useState(false);
  const [handleVectorChange, setHandleVectorChange] = useState(false);
  const toggleAboutDropdown = () => {
    setShowAboutDropdown(!showAboutDropdown);
  };
  const handleOpenMenu = () => {
    setShowMenuItems(!showMenuItems);
  };

  return (
    <header className=" relative pt-[40px] pb-[14px] px-[20px] lg:px-[85px]">
      <div className="flex justify-between  items-center w-full gap-0  xxl:gap-10  ">
        <div className="">
          <Link href="/">
            <Image src="/logo.svg" height={60} width={135} alt="Logo" />{" "}
          </Link>
        </div>

        <ul className=" hidden lg:flex text-[17px] gap-5 xxl:gap-12  animate-flip-down  xxl:text-[17px] text-[#333333] ">
          <li className="font-semibold text-[#333333]  cursor-pointer ">
            <Link href="/">Home</Link>
          </li>
          <li className="font-semibold text-[#333333]  cursor-pointer">
            <Link href="/events">Events</Link>
          </li>
          <li className="font-semibold text-[#333333]  cursor-pointer">
            {" "}
            <Link href="/the-sermapod">The Sermapod</Link>
          </li>
          <li
            className="flex justify-center items-center gap-2 cursor-pointer bg-white relative font-semibold text-[#333333] "
            onClick={toggleAboutDropdown}
          >
            About{" "}
            <span>
              <svg
                width="16"
                height="9"
                viewBox="0 0 16 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transform ${
                  showAboutDropdown
                    ? "rotate-180 animate-fade duration-300"
                    : "animate-fade duration-300"
                }`}
              >
                <path
                  d="M7.99996 10.0599C7.71321 10.0599 7.42649 9.95042 7.20787 9.7319L0.328226 2.85219C-0.109409 2.41455 -0.109409 1.705 0.328226 1.26755C0.765684 0.830089 1.47509 0.830089 1.91276 1.26755L7.99996 7.3551L14.0872 1.26776C14.5248 0.830301 15.2342 0.830301 15.6716 1.26776C16.1094 1.70522 16.1094 2.41477 15.6716 2.8524L8.79205 9.73211C8.57332 9.95066 8.2866 10.0599 7.99996 10.0599Z"
                  fill="#111111"
                />
              </svg>
            </span>{" "}
            {showAboutDropdown && (
              <ul className="absolute animate-fade p-5 w-[200px] space-y-2 rounded-lg left-0 top-8 bg-white shadow-lg py-2 z-50">
                <li className="hover:text-primary cursor-pointer">
                  <Link href="/about-us">About Us</Link>
                </li>
                <li className="hover:text-primary cursor-pointer">
                  <Link href="/advisory-board">Advisory Board</Link>
                </li>
              </ul>
            )}
          </li>
          <li className="font-semibold text-[#333333]  cursor-pointer">
            <Link href="/members-only-content"> Membership Only Content</Link>
          </li>
          <li className="font-semibold text-[#333333]  cursor-pointer">
            Contact Us
          </li>
        </ul>

        {/* <div>
          <button
            onMouseEnter={() => setHandleVectorChange(true)}
            onMouseLeave={() => setHandleVectorChange(false)}
            className="lg:flex group hidden transition duration-500 hover:bg-primary hover:text-white  font-semibold  justify-center items-center gap-3 text-lg  tracking-wider text-primary  py-[6px] px-6 border border-[#C8C8C8]  hover:border-none  rounded-full"
          >
            Join{" "}
            <span className="group-hover:translate-x-1 duration-200">
              {handleVectorChange ? (
                <svg
                  width="18"
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
              ) : (
                <svg
                  width="18"
                  height="8"
                  viewBox="0 0 20 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  //   class=""
                >
                  <path
                    d="M1 3.5L0.5 3.5L0.5 4.5L1 4.5L1 3.5ZM19.3536 4.35356C19.5488 4.1583 19.5488 3.84171 19.3536 3.64645L16.1716 0.464469C15.9763 0.269207 15.6597 0.269207 15.4645 0.464469C15.2692 0.659731 15.2692 0.976314 15.4645 1.17158L18.2929 4L15.4645 6.82843C15.2692 7.02369 15.2692 7.34027 15.4645 7.53554C15.6597 7.7308 15.9763 7.7308 16.1716 7.53554L19.3536 4.35356ZM1 4.5L19 4.5L19 3.5L1 3.5L1 4.5Z"
                    fill="#C42C2D"
                  />
                </svg>
              )}
            </span>
          </button>
          </div> */}
        {/* ----------------------hamburger menu------------------------ */}
        <div
          onClick={handleOpenMenu}
          className="lg:hidden animate-fade-left cursor-pointer"
        >
          <svg
            class="w-10 h-10"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>

        {/* --------------------------------------showMenuItems--------------------------------- */}
      </div>
      {/* ----------------------------Menu's for mobile view----------------------- */}
      <div className="w-full px-[20px] bg-white  absolute visible lg:hidden animate-fade-left z-50">
        {showMenuItems && (
          <ul className="space-y-3  p-3">
            <div className="border-b-[1px] border-[#dcd9d9] p-2 rounded-md hover:bg-primary hover:text-white">
              <li className="">
                <Link href="/">Home</Link>
              </li>
            </div>
            <div className="border-b-[1px] border-[#dcd9d9] p-2 rounded-md hover:bg-primary hover:text-white">
              <li>
                <Link href="/events">Events</Link>
              </li>
            </div>
            <div className="border-b-[1px] border-[#dcd9d9] p-2 rounded-md hover:bg-primary hover:text-white">
              <li>
                <Link href="/the-sermapod">The Sermapod</Link>
              </li>
            </div>
            <div className="border-b-[1px] border-[#dcd9d9] p-2 rounded-md hover:bg-primary hover:text-white">
              <li>About</li>
            </div>
            <div className="border-b-[1px] border-[#dcd9d9] p-2 rounded-md hover:bg-primary hover:text-white">
              <li>
                <Link href="/members-only-content">
                  Membership Only Content
                </Link>
              </li>
            </div>
            <div className="border-b-[1px] border-[#dcd9d9] p-2 rounded-md hover:bg-primary hover:text-white">
              <li>Contact Us</li>
            </div>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
