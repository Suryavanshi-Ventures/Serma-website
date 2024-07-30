import EventPast from "@/components/event-upcoming/event-past/page";
import EventUpcoming from "@/components/event-upcoming/page";
import Image from "next/image";
import React from "react";
import { fetchData } from "@/utils/api";
import Container from "@/components/container/page";

export default async function Events() {
  const upcoming_events = await fetchData(
    `${process.env.NEXT_PUBLIC_APP_NEXTAUTH_URL}/event/upcoming_events`
  );
  const past_events = await fetchData(
    `${process.env.NEXT_PUBLIC_APP_NEXTAUTH_URL}/event/past_events`
  );

  console.log(
    "Upcoming Events URL:",
    `${process.env.NEXT_PUBLIC_APP_NEXTAUTH_URL}/event/upcoming_events`
  );
  console.log(
    "Past Events URL:",
    `${process.env.NEXT_PUBLIC_APP_NEXTAUTH_URL}/event/past_events`
  );

  return (
    <div className="">
      {/* <div className="px-[25px] lg:px-[30px]  xl:px-[85px]"> */}
      <Container>
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
      </Container>
      {/* </div> */}
      <div className="my-[40px] lg:pl-[10px] xl:pl-[62px] ">
        <EventUpcoming
          data={upcoming_events.result}
          error={upcoming_events.error}
        />
      </div>
      <div className="my-[40px] lg:pl-[35px] xl:pl-[85px]">
        <EventPast data={past_events.result} error={past_events.error} />
      </div>
    </div>
  );
}
