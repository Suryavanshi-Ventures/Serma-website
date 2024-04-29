import React from "react";
import TopSection from "./top-section/page";
import Partners from "./patners/page";
import UpcomingEvent from "./upcoming-events/page";

function LandingPage() {
  return (
    <div>
      <TopSection />
      <div className="px-[25px] md:px-[85px]  ">
        <Partners />
        <UpcomingEvent />
      </div>
    </div>
  );
}

export default LandingPage;
