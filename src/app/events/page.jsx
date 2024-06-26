import EventPast from "@/components/event-upcoming/event-past/page";
import EventUpcoming from "@/components/event-upcoming/page";
import Image from "next/image";
import React from "react";

async function fetchData() {
  try {
    const response = await fetch(
      "http://34.235.48.203/api/v1/event/upcoming_event"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error("Error fetching events:", error.message);
    // You can handle the error here, for example, you might want to return an empty array or a specific error object
    return []; // or throw error; depending on how you want to handle it downstream
  }
}
export default async function Events() {
  const data = await fetchData();

  return (
    <div className="">
      <div className="px-[25px] lg:px-[50px]  xl:px-[85px]">
        <div className="hidden md:flex ">
          <Image
            src="/upcoming-event/event-bg-image-svg.svg"
            width={2000}
            height={444}
            alt="Event Image"
            className=""
          />
        </div>
        <div className=" md:hidden">
          <Image
            src="/upcoming-event/responsive-img.png"
            width={2000}
            height={444}
            alt="Event Image"
            className="rounded-md"
          />
        </div>
      </div>
      <div className="my-[40px] lg:pl-[62px] ">
        <EventUpcoming data={data} />
      </div>
      <div className="my-[40px]  lg:pl-[85px]">
        <EventPast />
      </div>
    </div>
  );
}
