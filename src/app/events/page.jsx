import EventPast from "@/components/event-upcoming/event-past/page";
import EventUpcoming from "@/components/event-upcoming/page";
import Image from "next/image";
import React from "react";

async function fetchData(url) {
  try {
    const response = await fetch(url, { next: { revalidate: 60 } });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return { result: data.result, error: null };
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error.message);
    return { result: null, error: error.message };
  }
}

export default async function Events() {
  const upcoming_events = await fetchData(
    "http://34.235.48.203/api/v1/event/upcoming_events"
  );
  const past_events = await fetchData(
    "http://34.235.48.203/api/v1/event/past_events"
  );

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
        <EventUpcoming
          data={upcoming_events.result}
          error={upcoming_events.error}
        />
      </div>
      <div className="my-[40px]  lg:pl-[85px]">
        <EventPast data={past_events.result} error={past_events.error} />
      </div>
    </div>
  );
}
