import Image from "next/image";
import React from "react";

function OurMission() {
  return (
    <div>
      <div className="flex flex-col md:items-center md:flex-row gap-10 md:gap-20 lg:gap-36">
        <div className="md:text-[36px] text-xl font-bold  flex gap-2 max-md:justify-center text-[#333333]">
          <div>Our </div>
          <div>Mission</div>
        </div>
        <p className="responsive-Text text-[#9B9A9A] ">
          SERMA is a marketplace of ideas for those in the sports &
          entertainment risk & claims industry We share resources, best
          practices, strategies We are inclusive of a broad range of
          professionals, ideas, viewpointsn We present educational & networking
          opportunities in an intimate environment that promotes relationship
          building & individual growth  Our goal is to be the foremost
          clearinghouse for sharing current trends and strategies & networking
          opportunities. These opportunities will present themselves both online
          and in the form of regional and national conferences.
        </p>
      </div>
      <div className="mt-8">
        <Image src="/our-mission/mission.webp" height={500} width={1800} alt="image" className="rounded-md"/>
      </div>
    </div>
  );
}

export default OurMission;
