"use client";
import Image from "next/image";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const ContactDetails = dynamic(() =>
  import("./contact-details/contactDetails")
);
const Membership = dynamic(() => import("./membership/membership"));
const Events = dynamic(() => import("./events/events"));

function Profile() {
  const tabList = ["Contact Details", "Membership", "Events"];
  const [tab, setTab] = useState(0);
  const renderTabContent = () => {
    switch (tab) {
      case 0:
        return <ContactDetails />;
      case 1:
        return <Membership />;
      case 2:
        return <Events />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      <div className="md:absolute top-0">
        <div className="flex md:gap-10 lg:gap-20 xl:gap-32 justify-between items-center">
          {tabList.map((item, index) => (
            <div onClick={() => setTab(index)} key={index}>
              <h2
                className={`text-[#333333]  text-sm sm:text-xl text-nowrap cursor-pointer py-2 max-sm:font-bold ${
                  tab === index
                    ? "border-b-[3px] animate-fade font-bold border-[#C42C2D] pb-1  transition duration-500 ease-in-out"
                    : ""
                }`}
              >
                {item}
              </h2>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 bg-[#d9d9d91c] bg-opacity-20 w-full py-10 rounded-2xl">
        {renderTabContent()}
      </div>
    </div>
  );
}

export default Profile;
