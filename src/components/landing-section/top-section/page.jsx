"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const imagesData = [
  {
    id: 1,
    path: "/hero-section/changing-image/runner.svg",
    dimensions: { height: 776, width: 850 },
    responsive: { height: 400, width: 400, left: 30 },
    position: { left: 45, bottom: "" },
  },
  {
    id: 2,
    path: "/hero-section/changing-image/female-singer-new.png",
    dimensions: { height: 500, width: 400 },
    responsive: { height: 150, width: 200, left: 24 },
    position: { left: 45, bottom: "" },
  },
  {
    id: 3,
    path: "/hero-section/changing-image/basketball-player-new.png",
    dimensions: { height: 766, width: 502 },
    responsive: { height: 260, width: 260, left: 45 },
    position: { left: 45, bottom: "" },
  },
  {
    id: 4,
    path: "/hero-section/changing-image/drms.svg",
    dimensions: { height: 630, width: 620 },
    responsive: { height: 300, width: 400, left: 45 },
    position: { left: 45, bottom: "" },
  },
  {
    id: 5,
    path: "/hero-section/changing-image/cyclelist.svg",
    dimensions: { height: 750, width: 500 },
    responsive: { height: 250, width: 250, left: 45 },
    position: { left: 45, bottom: "" },
  },
  {
    id: 6,
    path: "/hero-section/changing-image/dj-new.png",
    dimensions: { height: 1020, width: 680 },
    responsive: { height: 250, width: 450, left: 45 },
    position: { left: 45, bottom: "0" },
  },
];

function TopSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out
  
      // Use a slightly longer delay before switching images to ensure the fade-out completes
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesData.length);
        setFade(true); // Start fade-in
      }, 500); // Match this with the CSS transition duration for smooth fading
  
    }, 6000); // Increase interval slightly to give time for fade transitions
  
    return () => clearInterval(interval);
  }, []);
  



  //------------before------------------
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setFade(false);
  //     setTimeout(() => {
  //       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesData.length);
  //       setFade(true);
  //     }, 500);
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, []);

  const currentImage = imagesData[currentImageIndex];

  const getPositionClasses = () => {
    const { id, position } = currentImage;
    return `
      ${id === 1 || id === 4 || id === 6 ? "md:left-[22%]" : "md:left-[40%]"}
      ${id === 1 || id === 6 ? "left-[-10%]" : "left-[20%]"}
      ${id === 1 ? "lg:left-[30%]" : "lg:left-[45%]"}
      ${position.bottom === "0" ? "bottom-[0.2%]" : ""}
    `;
  };

  return (
    <div>
      {/* Desktop View */}
      <div className="hidden lg:flex relative justify-between items-center">
        <div className="lg:w-[55%] lg:h-[800px] lg:bg-primaryBlue flex justify-center lg:pt-[158px] pt-[400px] rounded-r-3xl">
          <div className="xl:w-2/3 max-xl:w-[500px] max-xl:px-[20px]">
            <h1 className="text-[#FFFFFF] font-semibold text-[24px] md:text-[30px] lg:text-[40px]">
              <div>Sports and Entertainment</div>
              <div className="my-[6px]">Risk Management Alliance</div>
            </h1>
            <div className="my-[40px] overflow-hidden">
              <p className="text-[#FFFFFF] xl:w-[500px] max-lg:pr-3">
                The Sports and Entertainment Risk Management Alliance (SERMA) is
                the first risk management association devoted entirely to the
                sports and entertainment industries. It is an organization of
                risk managers, claims managers, general counsels, outside counsel,
                and other associated professionals who work in the sports and
                entertainment field.
              </p>
            </div>
            <Link href="/membership">
              <button className="my-5 max-md:pr-[20px] flex justify-start group max-md:w-full transition duration-500 text-[#DDDDDD] font-normal  items-center gap-3 text-lg tracking-wider py-3 px-6 border border-[#C8C8C8] rounded-full">
                Membership
                <span className="group-hover:translate-x-1 duration-200">
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
            </Link>
          </div>
        </div>

        {/* Image Zone */}
        <div
          className={`absolute max-lg:top-3 transition-opacity duration-500 ease-in-out ${fade ? "opacity-100" : "opacity-0"} ${getPositionClasses()}`}
        >
          <Image
            src={currentImage.path}
            height={currentImage.dimensions.height}
            width={currentImage.dimensions.width}
            alt="image"
          />
        </div>

        <div className="overflow-hidden max-lg:mt-[-400px] lg:pr-10 xl:pr-20">
          <Image
            src="/hero-section/rotate-content.svg"
            height={40}
            width={60}
            alt="image"
            className="max-lg:h-[300px] max-lg:w-[300px]"
          />
        </div>
      </div>

      {/* Mobile View */}
      <div className="visible relative lg:hidden bg-[#03989E] w-full px-[20px]">
        <div
          className={`flex justify-center items-center h-[400px] transition-opacity duration-500 ease-in-out ${fade ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src={currentImage.path}
            height={currentImage.responsive.height}
            width={currentImage.responsive.width}
            alt="image"
            className={`max-lg:w-[${currentImage.responsive.width}px] max-lg:h-[${currentImage.responsive.height}px] ${
              currentImage.id === 1 ? "mr-[60px]" : ""
            }`}
          />
        </div>

        <div className="flex justify-center">
          <div>
            <h1 className="text-2xl sm:flex sm:justify-center sm:items-center gap-3 font-semibold text-[#FFFFFF]">
              <div className="sm:text-center">Sports and Entertainment</div>
              <div className="my-[6px] sm:text-center">Risk Management Alliance</div>
            </h1>
            <p className="max-md:text-[14px] sm:text-center sm:px-[40px] text-[#FFFFFF] my-5 leading-loose">
              The Sports and Entertainment Risk Management Alliance (SERMA) is
              the first risk management association devoted entirely to the
              sports and entertainment industries. It is an organization of risk
              managers, claims managers, general counsels, outside counsel and
              other associated professionals who work in the sports and
              entertainment field.
            </p>

            <div className="my-3">
              <Link href="/membership" className="my-3 flex md:justify-center">
                <button className="flex group max-md:w-full px-5 transition duration-500 text-[#DDDDDD] font-normal justify-center items-center gap-2 text-lg tracking-wider py-2 border border-[#C8C8C8] rounded-full">
                  Membership
                  <span className="group-hover:translate-x-1 duration-200">
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
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopSection;
