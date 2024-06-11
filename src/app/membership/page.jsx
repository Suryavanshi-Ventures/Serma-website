import Button from "@/components/button/page";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Membership = () => {
  const sermaMembership = [
    {
      title: "Industry Membership",
      detail:
        "Open to industry professionals engaged in risk or claims management. This includes risk managers, claims managers, insurance professionals, and in-house counsel.",
    },
    {
      title: "Founding Member",
      detail:
        "The first 25 members to join SERMA will be granted the designation of Founding Member. This is a lifetime appointment.",
    },
    {
      title: "Attorney/Vendor Membership",
      detail:
        "Open to industry professionals engaged in risk or claims management. This includes risk managers, claims managers, insurance professionals, and in-house counsel.",
    },
    {
      title: "Student Membership",
      detail: "Open to college/university students.",
    },
  ];

  const memeberBenefit = [
    { title: "Peer-to-peer Networking", img: "/pages/membership/card-1.png" },
    {
      title: "Access to our Members-only Directory",
      img: "/pages/membership/card-2.png",
    },
    {
      title: "Opportunities to speak at SERMA Events",
      img: "/pages/membership/card-3.png",
    },
  ];
  return (
    <div className="md:mt-20 text-[#333333]">
      <div>
        <div className="flex flex-col mx-5 lg:mx-10 2xl:mx-20">
          <div>
            <h2 className="heading-2 font-semibold text-[#333333] text-center lg:text-left">
              WHY JOIN SERMA?
            </h2>
          </div>
          <div className="flex lg:justify-end mt-[40px]">
            <p className="paragraph text-[#9B9A9A] max-w-[1008px] loos">
              While there are a number of excellent organizations with a wide
              range of services in our community, there isn’t one specifically
              dealing with the issues that we face in handling sports and
              entertainment claims and risk management. SERMA will fill that
              void by providing compelling and interesting programming in an
              exciting and interactive environment.
            </p>
          </div>
        </div>
        <div className=" hidden sm:flex  w-full h-[300px] mt-10">
          <Image
            src="/pages/membership/top-image.png"
            unoptimized
            width={100}
            height={100}
            className="object-fill w-full h-full"
          />
        </div>
        <div className=" flex sm:hidden w-full h-[380px] mt-10">
          <Image
            src="/pages/membership/responsive.png"
            unoptimized
            width={100}
            height={100}
            className="object-fill w-full h-full"
          />
        </div>
      </div>
      <div className="mx-5 lg:mx-10 2xl:mx-20 mt-5 md:mt-20">
        <div>
          <div>
            <div>
              <h2 className="heading-2 lg:text-left text-center font-semibold">
                SERMA Membership
              </h2>
            </div>
            <div className="md:mt-[50px] flex lg:flex-row items-center flex-col-reverse gap-3 ">
              <div className="border-t border-[#9B9A9A66]">
                {sermaMembership.map((item, index) => (
                  <div>
                    <div className="flex  items-center py-[30px]">
                      <div className="w-1/2">
                        <h2 className="text-[16px] md:text-xl font-bold max-md:px-2">
                          {item.title}
                        </h2>
                      </div>
                      <div className="w-1/2">
                        <p className="text-[#9B9A9A] paragraph max-w-[551px]">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                    <hr className="border-[#9B9A9A66]" />
                  </div>
                ))}
              </div>
              <div>
                <div className="max-w-[450px] h-[300px]  lg:mt-0">
                  <Image
                    src="/pages/membership/hand-img.png"
                    unoptimized
                    width={100}
                    height={100}
                    className="object-fill w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[50px] md:mt-[100px]">
          <div className="text-center">
            <h2 className="heading-2 lg:text-left font-semibold">
              Member Benefits
            </h2>
            <p className="paragraph md:hidden mt-3 text-gray leading-loose">
              While there are a number of excellent organizations with a wide
              range of services in our community, there isn’t one specifically
              dealing with the issues that we face in handling sports and
              entertainment claims and risk management. SERMA will fill that
              void by providing compelling and interesting programming in an
              exciting and interactive environment.
            </p>
          </div>
          <div className="mt-10 flex lg:flex-row flex-col items-center gap-5">
            {/* card */}
            {memeberBenefit.map((items, index) => (
              <div
                key={index}
                className="max-w-[434px] h-[423px] rounded-2xl shadow-xl drop-shadow-xl"
              >
                <div className="flex flex-col justify-between items-center h-full w-full">
                  <div className="mt-10">
                    <h2 className="text-xl md:text-[24px] font-bold max-w-[333px]">
                      {items.title}
                    </h2>
                  </div>
                  <div>
                    <div className="max-w-[434px] h-[273px] ">
                      <Image
                        src={items.img}
                        unoptimized
                        width={100}
                        height={100}
                        className="object-fill w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/*  */}
          </div>
        </div>
        <div className="mt-[60px] mx-5 sm:mx-0">
          <ul className="list-disc space-y-2 paragraph">
            <li>
              Access to exclusive member events, including conferences,
              webinars, and networking events
            </li>
            <li>
              Opportunities to speak at SERMA events and contribute blog
              content, showcasing your organization's expertise
            </li>
            <li>Quarterly Members-only e-newsletter</li>
            <li>
              Access to the Membership Directory for peer-to-peer knowledge
              sharing
            </li>
            <li>
              Create your own profile and bespoke members page in our Members
              Area
            </li>
            <li>
              Download speaker presentations, resources, and watch video clips
              from our events
            </li>
          </ul>
        </div>
        <div className="mt-[60px]">
          <Link href="/membership/membership-application">
            {" "}
            <Button content={"Join SERMA"} px={"px-5"} py={"py-2"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Membership;
