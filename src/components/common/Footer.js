"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const Footer = () => {
  const [handleVectorChange, setHandleVectorChange] = useState(false);
  const [facebook, setFacebook] = useState(false);
  const [twitter, setTwitter] = useState(false);
  const [insta, setInsta] = useState(false);
  return (
    <div className="bg-[#F3F3F3]">
      <div className="grid grid-cols-1  max-md:px-[15px] md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 grid-rows-1 gap-x-0 gap-y-1 ">
        <div className="md:border-r max-md:border-b border-[#3333331c] p-7 md:pt-12 flex md:justify-center">
          <div className="">
            <div className="flex">
              <Image src="/logo.svg" height={60} width={135} alt="logo" />
            </div>
            <div className="my-[20px] sm:my-[40px] xl:w-[300px] responsive-Text-footer text-[#333333]">
            Sports & Entertainment Risk Management Alliance
            </div>
          </div>
        </div>

        <div className="md:border-r max-md:border-b border-[#3333331c] p-7 md:pt-12">
          <div className="font-[700] text-[20px] text-[#333333]">
            Contact Us
          </div>

          <div className="sm:mt-[60px] xs:space-y-8 ">
            <div className="my-3 underline responsive-Text-footer text-[#333333]">
              <Link href="mailto:info@theserma.org" className="text-primary">info@theserma.org</Link>
            </div>
            <div className="responsive-Text-footer text-[#333333]">
              <Link href="tel:+1(123)456-7890">+1(123)456-7890</Link>
            </div>
          </div>
        </div>
        <div className="md:border-r max-md:border-b border-[#3333331c] p-7 md:pt-12 text-center max-sm:text-left ">
          <div className="flex md:ms-4">
            <div>
              <div className="font-[700]  text-left text-[20px] text-[#333333]">
                Links
              </div>
              <div className="sm:mt-[60px] space-y-5 responsive-Text-footer text-[#333333] text-left">
                <div className="my-3 hover:text-primary transition duration-200">
                  {" "}
                  <Link href="/about-us">About</Link>
                </div>
                <div className="hover:text-primary transition duration-200 ">
                  <Link href="/events">Events</Link>
                </div>
                <div className="my-3 hover:text-primary transition duration-200 ">
                  <Link href="/membership">Membership</Link>
                </div>
                <div className="hover:text-primary transition duration-200 ">
                  {" "}
                  <Link href="/the-sermapod">The SERMApod</Link>{" "}
                </div>
                <div className="my-3 hover:text-primary transition duration-200 ">
                  {" "}
                  <Link href="/members-only-content">
                    Members-Only Content
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-7 md:pt-12">
          <div className="md:text-center font-[700] text-[16px] sm:text-[20px] text-[#333333]">
            Connect With Us
          </div>
          <div className="flex flex-wrap max-md:justify-start md:justify-center gap-3 mt-[20px] sm:mt-[60px]">
            <div
              onMouseEnter={() => setHandleVectorChange(true)}
              onMouseLeave={() => setHandleVectorChange(false)}
              className="cursor-pointer"
            >
              <Link href="https://www.linkedin.com/company/the-serma/" target="_blank">
                <svg
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hover:bg-[#0073AF] rounded-full transition duration-300  "
                >
                  <path
                    opacity="0.1"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22.6732 44.3479C34.643 44.3479 44.3464 34.6445 44.3464 22.6747C44.3464 10.7049 34.643 1.00146 22.6732 1.00146C10.7034 1.00146 1 10.7049 1 22.6747C1 34.6445 10.7034 44.3479 22.6732 44.3479Z"
                    stroke="#282828"
                    strokeWidth="1.8577"
                  />
                  <path
                    d="M17.6987 18.2992C18.7134 18.2992 19.536 17.4766 19.536 16.4618C19.536 15.4471 18.7134 14.6245 17.6987 14.6245C16.6839 14.6245 15.8613 15.4471 15.8613 16.4618C15.8613 17.4766 16.6839 18.2992 17.6987 18.2992Z"
                    fill="#333333"
                    className={`${
                      handleVectorChange ? "text-white" : ""
                    }  fill-current`}
                  />
                  <path
                    d="M19.2298 19.5266H16.1675C15.9985 19.5266 15.8613 19.6638 15.8613 19.8328V29.0195C15.8613 29.1885 15.9985 29.3257 16.1675 29.3257H19.2298C19.3988 29.3257 19.536 29.1885 19.536 29.0195V19.8328C19.536 19.6638 19.3988 19.5266 19.2298 19.5266Z"
                    fill="#333333"
                    className={`${
                      handleVectorChange ? "text-white" : ""
                    }  fill-current`}
                  />
                  <path
                    d="M28.3552 19.0177C27.0464 18.5693 25.4093 18.9631 24.4276 19.6693C24.3939 19.5376 24.2738 19.4396 24.1311 19.4396H21.0689C20.8999 19.4396 20.7627 19.5768 20.7627 19.7458V28.9325C20.7627 29.1015 20.8999 29.2387 21.0689 29.2387H24.1311C24.3002 29.2387 24.4374 29.1015 24.4374 28.9325V22.3304C24.9322 21.9041 25.5698 21.7681 26.0916 21.9898C26.5974 22.2036 26.8871 22.7254 26.8871 23.4205V28.9325C26.8871 29.1015 27.0243 29.2387 27.1934 29.2387H30.2556C30.4246 29.2387 30.5618 29.1015 30.5618 28.9325V22.8038C30.5269 20.2872 29.343 19.3557 28.3552 19.0177Z"
                    fill="#333333"
                    className={`${
                      handleVectorChange ? "text-white" : ""
                    }  fill-current`}
                  />
                </svg>
              </Link>
            </div>
            {/* -------------------------------facebook------------------------------- */}
            <div
              onMouseEnter={() => setFacebook(true)}
              onMouseLeave={() => setFacebook(false)}
              className="cursor-pointer "
            >
              {" "}
              <Link href="https://www.facebook.com/theserma" target="_blank"
              >
                <svg
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`hover:bg-[#1877F2] text-white rounded-full transition duration-300 `}
                >
                  <path
                    opacity="0.1"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22.597 44.3479C34.5668 44.3479 44.2703 34.6445 44.2703 22.6747C44.2703 10.7049 34.5668 1.00146 22.597 1.00146C10.6273 1.00146 0.923828 10.7049 0.923828 22.6747C0.923828 34.6445 10.6273 44.3479 22.597 44.3479Z"
                    stroke="#282828"
                    strokeWidth="1.8577"
                  />
                  <path
                    d="M24.5705 17.1272H26.5624C26.7456 17.1272 26.8944 16.987 26.8944 16.8144V14.9373C26.8944 14.7647 26.7456 14.6245 26.5624 14.6245H24.5705C22.5573 14.6245 20.9186 16.168 20.9186 18.0657V20.2555H18.5947C18.4114 20.2555 18.2627 20.3957 18.2627 20.5684V22.4454C18.2627 22.6181 18.4114 22.7582 18.5947 22.7582H20.9186V29.3277C20.9186 29.5004 21.0673 29.6406 21.2506 29.6406H23.2425C23.4258 29.6406 23.5745 29.5004 23.5745 29.3277V22.7582H25.8984C26.0412 22.7582 26.168 22.6719 26.2138 22.5442L26.8778 20.6672C26.9116 20.5721 26.8944 20.467 26.832 20.3851C26.7689 20.3037 26.6693 20.2555 26.5624 20.2555H23.5745V18.0657C23.5745 17.5483 24.0214 17.1272 24.5705 17.1272Z"
                    fill={`${facebook ? "white" : "black"}`}
                  />
                </svg>
              </Link>
            </div>
            {/* -----------------------------------twitter----------------------------- */}
            <div
              onMouseEnter={() => setTwitter(true)}
              onMouseLeave={() => setTwitter(false)}
              className="cursor-pointer"
            >
              {" "}
              <svg
                width="47"
                height="46"
                viewBox="0 0 47 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hover:bg-[#333333] rounded-full transition duration-300 "
              >
                <path
                  opacity="0.1"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.5209 44.3479C35.4907 44.3479 45.1941 34.6445 45.1941 22.6747C45.1941 10.7049 35.4907 1.00146 23.5209 1.00146C11.5511 1.00146 1.84766 10.7049 1.84766 22.6747C1.84766 34.6445 11.5511 44.3479 23.5209 44.3479Z"
                  stroke="#282828"
                  strokeWidth="1.8577"
                />
                <g clipPath="url(#clip0_1978_310)">
                  <path
                    d="M25.1016 21.8309L31.06 14.9048H29.648L24.4743 20.9186L20.3422 14.9048H15.5762L21.8248 23.9988L15.5762 31.2619H16.9882L22.4517 24.9111L26.8156 31.2619H31.5816L25.1012 21.8309H25.1016ZM23.1676 24.0789L22.5345 23.1734L17.497 15.9677H19.6658L23.7311 21.7829L24.3642 22.6885L29.6487 30.2473H27.4799L23.1676 24.0793V24.0789Z"
                    fill={`${twitter ? "white" : "#333333"} `}
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1978_310">
                    <rect
                      width="16.3571"
                      height="16.3571"
                      fill="white"
                      transform="translate(15.4004 14.9048)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            {/* ---------------------------------------insta----------------------------------------- */}
            <div
              onMouseEnter={() => setInsta(true)}
              onMouseLeave={() => setInsta(false)}
              className="cursor-pointer  h-[48px] w-[48px]"
            >
              {" "}
              <Link href="https://www.instagram.com/the.serma?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
                <Image
                  src={`${
                    insta ? "/footer/InstaNew.svg" : "/footer/Insta.svg"
                  }`}
                  height={48}
                  width={48}
                  alt="logo"
                  className="transition duration-300  h-[48px] w-[48px]"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:p-10 p-6 md:flex justify-between md:border-t-0 border-t border-[#333333]/[20%]">
          <div className="lg:ms-auto xl:me-16 lg:me-8 font-semibold text-[#333333] md:mb-0 mb-4">
            Copyright 2024 © Suryavanshi Ventures- All rights reserved.
          </div>
          <div className="xl:mx-16 lg:mx-8 font-semibold text-[#333333]">
            Terms & Conditions Privacy Policy
          </div>
      </div>
    </div>
  );
};
export default Footer;
