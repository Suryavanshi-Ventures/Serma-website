import React from "react";
import TopSection from "./top-section/page";
import Partners from "./patners/page";
import UpcomingEvent from "./upcoming-events/page";
import Membership from "./membership/page";
import OurMission from "./our-mission/page";
import Podcast from "./podcast/page";

function LandingPage() {
  return (
    <>
      <TopSection />
      <div className="px-[25px] md:px-[30px] xl:px-[85px] space-y-[30px] md:space-y-[80px] ">
        <Partners />
        <UpcomingEvent />
        <Membership/>
        <OurMission/>
        <Podcast/>
      </div>
    </>
  );
}

export default LandingPage;
