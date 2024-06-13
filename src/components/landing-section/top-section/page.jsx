"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function TopSection() {
  const Images = [
    {
      id: 1,
      path: "/hero-section/changing-image/runner.svg",

      height: 776,
      width: 850,
      position: 45,
      responsiveHeight: 400,
      responsivePositionLeft: 30,
      responsiveWidth: 400,
      positionBottom: "",
    },
    {
      id: 2,
      path: "/hero-section/changing-image/female-singer-new.png",

      height: 500,
      width: 400,
      position: 45,
      responsiveHeight: 150,
      responsivePositionLeft: 24,
      responsiveWidth: 200,
      positionBottom: "",
    },
    {
      id: 3,
      path: "/hero-section/changing-image/basketball-player-new.png",

      height: 766,
      width: 502,
      position: 45,
      responsiveHeight: 260,
      responsivePositionLeft: 45,
      responsiveWidth: 260,
      positionBottom: "",
    },
    {
      id: 4,
      path: "/hero-section/changing-image/drms.svg",

      height: 630,
      width: 620,
      position: 45,
      responsiveHeight: 300,
      responsivePositionLeft: 45,
      responsiveWidth: 400,
      positionBottom: "",
    },
    {
      id: 5,
      path: "/hero-section/changing-image/cyclelist.svg",

      height: 750,
      width: 500,
      position: 45,
      responsiveHeight: 250,
      responsivePositionLeft: 45,
      responsiveWidth: 250,
      positionBottom: "",
    },
    {
      id: 6,
      path: "/hero-section/changing-image/dj-new.png",

      height: 1020,
      width: 680,
      position: 45,
      responsiveHeight: 300,
      responsivePositionLeft: 45,
      responsiveWidth: 500,
      positionBottom: "0",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [IslgScreenActive, setIslgScreenActive] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
 

  useEffect(() => {
    const handleResize = () => {
      setIslgScreenActive(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial state

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % Images.length);
        setFadeIn(false);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, [Images.length]);

  return (
    <div>
      <div className="relative flex max-lg:bg-primaryBlue  justify-between items-center ">
        <div className="lg:w-[55%]    lg:h-[800px] lg:bg-primaryBlue flex justify-center lg:pt-[158px] pt-[400px]  rounded-r-3xl ">
          <div className="lg:w-2/3 max-lg:px-[20px] ">
            <div className="text-[24px] md:text-[30px] lg:text-[40px] text-[#FFFFFF] font-semibold">
              <div>Sports and Entertainment </div>
              <div className="my-[6px]">Risk Management Alliance</div>
            </div>
            <div className="my-[40px] overflow-hidden">
              <p className="text-[#FFFFFF] xl:w-[500px] max-lg:pr-3">
                The Sports and Entertainment Risk Management Alliance (SERMA) is
                the first risk management association devoted entirely to the
                sports and entertainment industries. It is an organization of
                risk managers, claims managers, general counsels, outside
                counsel and other associated professionals who work in the
                sports and entertainment field.
              </p>
            </div>
            <Link href="/membership">
              <div className="my-5 max-md:pr-[20px]">
                <button className="flex group max-md:w-full  transition duration-500  text-[#DDDDDD]  font-normal  justify-center items-center gap-3 text-lg  tracking-wider py-3 px-6 border border-[#C8C8C8]    rounded-full">
                  Membership
                  <span className="group-hover:translate-x-1  duration-200">
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
                  </span>
                </button>
              </div>
            </Link>
          </div>
        </div>
    
        <div
          // className={`absolute left-[${Images[currentImageIndex].position}%] ${
          // className={`absolute max-lg:top-0 md:left-[35%] left-[${Images[currentImageIndex].responsivePositionLeft}%]  lg:left-[45%] ${
          className={`absolute max-lg:top-3 ${Images[currentImageIndex].id == 1 || Images[currentImageIndex].id == 4 || Images[currentImageIndex].id == 6 ? "md:left-[22%]" : "md:left-[40%]"}  ${Images[currentImageIndex].id == 1 || Images[currentImageIndex].id == 6 ? "left-[-10%]" : "left-[20%]"} ${Images[currentImageIndex].id == 1 ? "lg:left-[30%]" :"lg:left-[45%]"}    ${
            Images[currentImageIndex].positionBottom === "0"
              ? "bottom-[0.2%]"
              : ""
          } transition-opacity duration-500 ${
            fadeIn ? "opacity-0" : "opacity-100"
          }`}
        >
          <Image
            src={Images[currentImageIndex].path}
            // src="/hero-section/changing-image/dj-new.png"
            height={
              IslgScreenActive
                ? Images[currentImageIndex].height
                : Images[currentImageIndex].responsiveHeight
            }
            // height={1020}
            // height={100}
            width={
              IslgScreenActive
                ? Images[currentImageIndex].width
                : Images[currentImageIndex].responsiveWidth
            }
            // width={680}
            // width={100}
            alt="image"
            className={`animate-fade max-lg:w-[${Images[currentImageIndex].responsiveWidth}px]  max-lg:h-[${Images[currentImageIndex].responsiveHeight}px] `}
          />
        </div>
        <div className="  max-lg:mt-[-400px] max-lg:ml-[-70px] lg:pr-20">
          <Image
            src="/hero-section/rotate-content.svg"
            height={40}
            width={60}
            alt="image"
            className="max-lg:h-[300px] max-lg:w-[300px]"
          />
        </div>
      </div>
    </div>
  );
}

export default TopSection;
