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
    <div className="xl:mt-20 text-[#333333]">
      <div>
        <div className="flex flex-col mx-5 lg:mx-10 2xl:mx-20">
          <div>
            <h2 className="heading-2 font-semibold text-[#333333] text-center lg:text-left">
              WHY JOIN SERMA?
            </h2>
          </div>
          <div className="flex lg:justify-end mt-[20px]">
            <p className="paragraph text-[#9B9A9A] max-w-[1008px] leading-loose">
              While there are a number of excellent organizations with a wide
              range of services in our community, there isn’t one specifically
              dealing with the issues that we face in handling sports and
              entertainment claims and risk management. SERMA will fill that
              void by providing compelling and interesting programming in an
              exciting and interactive environment.
            </p>
          </div>
        </div>
        <div className="w-full relative mt-10">
          <Image
            src="/pages/membership/top-image.png"
            unoptimized
            width={1512}
            height={550}
            className="object-fill w-full h-full hidden sm:flex"
          />
          <Image
            src="/pages/membership/responsive.png"
            unoptimized
            width={1024}
            height={1400}
            className="object-fill w-full h-full sm:hidden flex"
          />
          <div className="absolute bottom-0 w-full lg:p-10 p-5 ps-10 backdrop-blur-md">
            <ul className="text-white mb-0 max-w-[1148px] mx-auto list-disc">
              <li className="mb-2">To learn more about crucial issues facing the entertainment and sports claims, risk, insurance and legal communities.</li>
              <li className="mb-2">To contribute content in this important and emerging area.</li>
              <li className="mb-0">To expand your network and professional development by meeting other peers through online webinars and in-person events.</li>
            </ul>
          </div>
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
                    <div className="sm:flex py-[10px] md:py-[30px]">
                      <div className="sm:w-1/2">
                        <h2 className="text-[16px] md:text-xl font-bold md:px-2 sm:mb-0 mb-2">
                          {item.title}
                        </h2>
                      </div>
                      <div className="sm:w-2/3 md:w-1/2">
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
                <div className="xl:max-w-[450px] max-w-[350px] lg:mt-0">
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
            <h2 className="heading-2 text-center font-semibold ">
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
          <div className="mt-10 row mx-0 items-center">
            {/* card */}
            {memeberBenefit.map((items, index) => (
              <div key={index} className="lg:col-4 sm:col-6 lg:mb-0 mb-6 h-full">
                <div className="rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                  <div className="flex flex-col justify-between items-center 2xl:h-[423px] w-full">
                    <div className="2xl:h-[150px] sm:h-[100px] 2xl:p-10 sm:p-7 h-auto p-4 w-full">
                      <h2 className="lg:text-lg text-base md:px-2 text-center 2xl:text-[24px] font-bold text-[#333333]">
                        {items.title}
                      </h2>
                    </div>
                    <div>
                      <div className="">
                        <Image
                          src={items.img}
                          unoptimized
                          width={473}
                          height={273}
                          className="object-fill w-full h-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/*  */}
          </div>
        </div>
        <div className="mt-[60px] mx-5 ">
          <ul className="list-disc space-y-2 text-[14px] md:text-[16px] lg:text-[18px] xl:text-[19px] leading-loose">
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
        <div className="md:mt-[60px] mt-[20px] w-full ">
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
