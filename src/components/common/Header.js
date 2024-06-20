"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import AboutUs from "@/app/about-us/page";
const Header = () => {
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [showMenuItems, setShowMenuItems] = useState(false);
  const [handleVectorChange, setHandleVectorChange] = useState(false);
  const [OpenMobileSidebar, setOpenMobileSidebar] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const aboutDropdownRef = useRef(null);
  useEffect(() => {
    setShowAboutDropdown(false);
    setShowMenuItems(false);
    setOpenMobileSidebar(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        aboutDropdownRef.current &&
        !aboutDropdownRef.current.contains(event.target)
      ) {
        setShowAboutDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleAboutDropdown = () => {
    setShowAboutDropdown(!showAboutDropdown);
  };
  const handleOpenMenu = () => {
    setShowMenuItems(!showMenuItems);
  };

  const handleNavigateToMembership = () => {
    router.push("/membership/membership-application");
  };
  const OpenMobileSidebarFunct = () => {
    setOpenMobileSidebar(!OpenMobileSidebar);
  };

  return (
    <header className="relative pt-[40px] pb-[40px] px-[20px] lg:px-[50px] xl:px-[85px]">
      <div className="flex justify-between items-center w-full gap-0  xxl:gap-10">
        <div className="">
          <Link href="/">
            <Image src="/logo.svg" height={60} width={135} alt="Logo" />
            {""}
          </Link>
        </div>

        <ul
          className={`hidden lg:flex max-[1100px]:text-[15px] text-[17px] gap-6  md:gap-8 xl:gap-12 animate-flip-down   text-[#333333]`}
        >
          <li
            className={`font-semibold ${
              pathname == "/" ? "text-primary " : "text-[#333333]"
            }   cursor-pointer hover:text-primary transition duration-200`}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`font-semibold ${
              pathname.includes("/events") ? "text-primary" : "text-[#333333]"
            }   cursor-pointer hover:text-primary transition duration-200`}
          >
            <Link href="/events">Events</Link>
          </li>
          <li
            className={`font-semibold  ${
              pathname.includes("/the-sermapod")
                ? "text-primary"
                : "text-[#333333]"
            }  cursor-pointer hover:text-primary transition duration-200`}
          >
            {" "}
            <Link href="/the-sermapod">The Sermapod</Link>
          </li>
          <li
            className="flex justify-center items-center gap-2 cursor-pointer bg-white relative font-semibold  "
            onClick={toggleAboutDropdown}
            ref={aboutDropdownRef}
          >
            <span
              className={`hover:text-primary ${
                pathname.includes("/about-us") ||
                pathname.includes("/advisory-board")
                  ? "text-primary"
                  : "text-[#333333]"
              } transition duration-200`}
            >
              {" "}
              About{" "}
            </span>
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
                <li
                  className={`hover:text-primary cursor-pointer ${
                    pathname.includes("/about-us")
                      ? "text-primary"
                      : "text-[#333333]"
                  }`}
                >
                  <Link href="/about-us">About Us</Link>
                </li>

                <li
                  className={`hover:text-primary cursor-pointer ${
                    pathname.includes("/advisory-board")
                      ? "text-primary"
                      : "text-[#333333]"
                  }`}
                >
                  <Link href="/advisory-board">Advisory Board</Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className={`font-semibold ${
              pathname.includes("/members-only-content")
                ? "text-primary"
                : "text-[#333333]"
            } cursor-pointer hover:text-primary transition duration-200`}
          >
            <Link href="/members-only-content">Members-Only Content</Link>
          </li>
          <li
            className={`font-semibold text-[#333333] cursor-pointer hover:text-primary transition duration-200`}
          >
            Contact Us
          </li>
        </ul>

        {pathname.includes("/member-forum") ||
        pathname.includes("/private-member") ||
        pathname.includes("/webinar") ||
        pathname.includes("/profile") ? (
          ""
        ) : (
          <div>
            <button
              onMouseEnter={() => setHandleVectorChange(true)}
              onMouseLeave={() => setHandleVectorChange(false)}
              onClick={handleNavigateToMembership}
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
          </div>
        )}

        {/* ----------------------hamburger menu------------------------ */}
        <div
          onClick={handleOpenMenu}
          className="lg:hidden animate-fade-left cursor-pointer "
        >
          {showMenuItems ? (
            <svg
              width="20"
              height="21"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-fade-left"
            >
              <path
                d="M7.43032 6.57838L13.1739 0.834735L14.8149 2.47576L9.07133 8.2194L14.8149 13.963L13.1739 15.604L7.43032 9.86041L1.68668 15.604L0.0456543 13.963L5.7893 8.2194L0.0456543 2.47576L1.68668 0.834735L7.43032 6.57838Z"
                fill="#333333"
              />
            </svg>
          ) : (
            <svg
              width="35"
              height="35"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="15.5" cy="15.5" r="15.5" fill="#1A1A1A" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.75 10.7083C21.75 10.3171 21.4329 10 21.0417 10H9.70833C9.31712 10 9 10.3171 9 10.7083C9 11.0995 9.31712 11.4167 9.70833 11.4167H21.0417C21.4329 11.4167 21.75 11.0995 21.75 10.7083ZM21.75 14.9583C21.75 14.5671 21.4329 14.25 21.0417 14.25H13.9583C13.5671 14.25 13.25 14.5671 13.25 14.9583C13.25 15.3495 13.5671 15.6667 13.9583 15.6667H21.0417C21.4329 15.6667 21.75 15.3495 21.75 14.9583ZM21.75 19.2083C21.75 18.8171 21.4329 18.5 21.0417 18.5H17.5C17.1088 18.5 16.7917 18.8171 16.7917 19.2083C16.7917 19.5995 17.1088 19.9167 17.5 19.9167H21.0417C21.4329 19.9167 21.75 19.5995 21.75 19.2083Z"
                fill="white"
              />
            </svg>
          )}
        </div>

        {/* --------------------------------------showMenuItems--------------------------------- */}
      </div>
      {/* ----------------------------Menu's for mobile view----------------------- */}
      <div className="w-full px-[20px] bg-white  absolute visible lg:hidden animate-fade-left z-50">
        {showMenuItems && (
          <ul className="space-y-3  p-3 animate-fade-right transition duration-300">
            <div className="border-b-[1px] border-[#dcd9d9] p-2 rounded-md hover:text-primary">
              <li
                className={`${
                  pathname == "/" ? "text-primary" : "text-[#333333]"
                } `}
              >
                <Link href="/">Home</Link>
              </li>
            </div>
            <div className="border-b-[1px] border-[#dcd9d9] p-2 rounded-md hover:text-primary">
              <li
                className={`${
                  pathname.includes("/events")
                    ? "text-primary"
                    : "text-[#333333]"
                } `}
              >
                <Link href="/events">Events</Link>
              </li>
            </div>
            <div className="border-b-[1px] border-[#dcd9d9] p-2 rounded-md hover:text-primary">
              <li
                className={` ${
                  pathname.includes("/the-sermapod")
                    ? "text-primary"
                    : "text-[#333333]"
                } `}
              >
                <Link href="/the-sermapod">The Sermapod</Link>
              </li>
            </div>
            <div className="border-b-[1px] border-[#dcd9d9] p-2 rounded-md ">
              <li
                onClick={OpenMobileSidebarFunct}
                className="flex items-center gap-3"
              >
                {" "}
                <span>About</span>
                <svg
                  width="16"
                  height="9"
                  viewBox="0 0 16 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transform ${
                    OpenMobileSidebar
                      ? "rotate-180 animate-fade duration-300"
                      : "animate-fade duration-300"
                  }`}
                >
                  <path
                    d="M7.99996 10.0599C7.71321 10.0599 7.42649 9.95042 7.20787 9.7319L0.328226 2.85219C-0.109409 2.41455 -0.109409 1.705 0.328226 1.26755C0.765684 0.830089 1.47509 0.830089 1.91276 1.26755L7.99996 7.3551L14.0872 1.26776C14.5248 0.830301 15.2342 0.830301 15.6716 1.26776C16.1094 1.70522 16.1094 2.41477 15.6716 2.8524L8.79205 9.73211C8.57332 9.95066 8.2866 10.0599 7.99996 10.0599Z"
                    fill="#111111"
                  />
                </svg>
              </li>
              {OpenMobileSidebar ? (
                <div className="border-l animate-flip-down border-gray my-2 pl-[20px] space-y-2">
                  <div
                    className={`hover:text-primary cursor-pointer ${
                      pathname.includes("/about-us")
                        ? "text-primary"
                        : "text-[#333333]"
                    }`}
                  >
                    <Link href="/about-us">About Us</Link>
                  </div>
                  <div
                    className={`hover:text-primary cursor-pointer ${
                      pathname.includes("/advisory-board")
                        ? "text-primary"
                        : "text-[#333333]"
                    }`}
                  >
                    <Link href="/advisory-board">Advisory Board</Link>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="border-b-[1px] border-[#dcd9d9] p-2 rounded-md ">
              <li
                className={`hover:text-primary ${
                  pathname.includes("/members-only-content")
                    ? "text-primary"
                    : "text-[#333333]"
                }`}
              >
                <Link href="/members-only-content">
                  Membership Only Content
                </Link>
              </li>
            </div>
            <div className="border-b-[1px] border-[#dcd9d9] p-2 rounded-md hover:text-primary">
              <li>Contact Us</li>
            </div>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
