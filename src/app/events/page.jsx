"use client";
import EventPast from "@/components/event-upcoming/event-past/page";
import EventUpcoming from "@/components/event-upcoming/page";
import Image from "next/image";
import React from "react";
import { fetchData } from "../utils/api-fetcher/api";
import Container from "@/components/container/page";
import useAxiosFetch from "@/hooks/axiosFetch";
import { useSession } from "next-auth/react";
export default function Events() {
  // const upcoming_events = await fetchData(
  //   `${process.env.NEXT_PUBLIC_APP_NEXTAUTH_URL}/event/upcoming_events`
  // );
  const { data: session } = useSession();
  const token = session?.user?.userToken;
 
  const API_URL = `${process.env.NEXT_PUBLIC_APP_NEXTAUTH_URL}/event/upcoming_events`;
  const {
    data: upcoming_events,
    loading,
    error,
  } = useAxiosFetch(
    API_URL ,
    {
      headers: { Authorization: `Bearer ${token}` },
    },
    token
  );
 
  // const past_events = await fetchData(
  //   `${process.env.NEXT_PUBLIC_APP_NEXTAUTH_URL}/event/past_events`
  // );





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
            priority={true}
          />
        </div>
        <div className="md:hidden">
          <Image
            src="/upcoming-event/responsive-img2.png"
            width={2000}
            height={444}
            alt="Event Image"
            className="rounded-md"
          />
        </div>
      </Container>
      {/* </div> */}
      <div className="my-[40px] lg:pl-[10px] xl:pl-[62px]  ">
      
        <EventUpcoming
          data={upcoming_events && upcoming_events?.result}
          error={error}
          loading ={loading}
        />
      </div>
      <div className="my-[40px] lg:pl-[10px] xl:pl-[62px]">
        <EventPast
          // data={past_events && past_events?.result}
          // error={ past_events?.error}
        />
      </div>
    </div>
  );
}
