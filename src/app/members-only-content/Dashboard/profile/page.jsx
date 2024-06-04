"use client";

import Image from "next/image";
import React, { useState } from "react";
import ContactDetails from "./contact-details/contactDetails";
import Membership from "./membership/membership";
import Events from "./events/events";
import { useRouter } from "next/router";

function Profile() {
  const tabList = ["Contact Details", "Membership", "Events"];
  const [tab, setTab] = useState(0);

  return (
    <div className="w-full">
      <div>
        <div className="flex gap-40">
          {tabList.map((item, index) => (
            <div onClick={() => setTab(index)} key={index}>
              <h2
                className={` ${
                  tab === index ? "border-b-[3px] border-[#C42C2D]  pb-1" : ""
                }`}
              >
                {item}
              </h2>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 bg-[#D9D9D933] w-full py-10 rounded-2xl ">
        {tab === 0 ? (
          <ContactDetails />
        ) : tab === 1 ? (
          <Membership />
        ) : tab === 2 ? (
          <Events />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Profile;
