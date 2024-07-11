import Container from "@/components/container/page";
import Image from "next/image";
import Link from "next/link";

function AboutUs() {
  return (
    <Container> 
    <div className="relative md:pt-[40px] pb-[14px]   mb-14 text-[#333333]">
      <div className="w-full">
        <div className=" flex justify-center md:justify-start ">
          <div className="text-xl   text-center sm:text-left md:text-2xl xl:text-4xl font-bold w-80 text-light-black">
            What is SERMA?
          </div>
        </div>
        <div className="grid grid-flow-row-dense grid-cols-5 md:grid-cols-6 gap-2">
          <div className="col-span-0 md:col-span-2"></div>
          <div className="paragraph text-center sm:text-left col-span-5 md:col-span-4 text-gray max-md:leading-loose">
            The Sports and Entertainment Risk Management Alliance (SERMA) is the
            first risk management association devoted entirely to the sports and
            entertainment industries. It is an organization of risk managers,
            claims managers, general counsels, outside counsel and other
            associated professionals who work in the sports and entertainment
            field. 
          </div>
        </div>
      </div>

      <div className="w-full  mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="w-full">
            <Image
              src="/images/about-us-1.svg"
              alt="Vercel Logo"
              className=" w-full"
              width={0}
              height={0}
              sizes="100vw"
              priority
            />
          </div>
          <div className="w-full">
            <Image
              src="/images/about-us-2.svg"
              alt="Vercel Logo"
              className=" w-full"
              width={0}
              height={0}
              sizes="100vw"
              priority
            />
          </div>
          <div className="w-full">
            <Image
              src="/images/about-us-3.svg"
              alt="Vercel Logo"
              className=" w-full"
              width={0}
              height={0}
              sizes="100vw"
              priority
            />
          </div>
        </div>
      </div>

      <div className="w-full mt-8 md:mt-14 flex items-center">
        <div className="w-full md:w-3/5 ">
          <div className="text-xl max-md:text-center md:text-2xl xl:text-4xl font-bold w-full md:w-80  text-light-black">
            Our Mission
          </div>
          <div className="text-xl text-gray mt-5 paragraph text-center sm:text-left  ">
            To be the world's foremost resource for information and networking
            in the sports and entertainment risk industries. We strive to
            provide a respectful, transparent and inclusive dialogue where
            members can share ideas, best practices and strategies in managing
            risk and claims.  
          </div>

          <div className=" text-[16px] md:text-lg xl:text-xl text-light-black  mt-8">
            SERMA is a marketplace of ideas for those in sports & entertainment
            risk and the claims industry
          </div>
          <div className="mt-5">
            <ul className="pl-6 list-disc list-outside ">
              <li className="text-lg text-gray paragraph">
                We share resources, best practices, strategies 
              </li>
              <li className="text-lg text-gray paragraph">
                We are inclusive of a broad range of professionals, ideas,
                viewpoints
              </li>
              <li className="text-lg text-gray paragraph space-x-1">
                We present educational & networking opportunities in an intimate
                environment that promotes relationship building & individual
                growth
              </li>
            </ul>
          </div>
          <div className="mt-5 text-[16px] md:text-lg xl:text-xl light-black">
            Our goal is to be the foremost resource for sharing current trends
            and strategies as well as providing endless networking
            opportunities. These opportunities will present themselves both
            virtually and in-person events.
          </div>
        </div>
        <div className="hidden md:flex w-2/5">
          <div className="flex w-full justify-center items-center">
            <div className="w-96">
              <Image
                src="/images/our-mission.svg"
                alt="Vercel Logo"
                className=" w-full rounded-full "
                width={0}
                height={0}
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-14 ">
        <div className="text-xl md:text-2xl xl:text-4xl font-bold  w-full max-md:text-center md:w-80 text-light-black">
          Strategic Partners
        </div>

        <div className="flex flex-col gap-6 mt-5 md:mt-10">
          <div className="flex max-md:flex-col md:p-10 py-8  max-md:space-y-5 bg-[#F0F0F0] bg-opacity-50 items-center rounded-2xl">
            <div className="w-[233px] xl:w-[290px] ">
              <Image
                src="/images/strategic-partner-1.png"
                alt="Hackney Publications Logo"
                className=" w-full"
                width={0}
                height={0}
                sizes="100vw"
                priority
              />
            </div>
            <div className="flex-1 md:ml-[30px] xl:ml-10 max-md:p-3">
              <div className="text-[14px] md:text-[16px] xl:text-lg light-black max-md:my-3 leading-loose">
                Hackney Publications delivers valuable and important information
                about the legal side of the sports industry. Its overriding
                mission is to maintain a narrow editorial focus on issues that
                matter to subscribers and readers.
              </div>
              <div className="mt-2">
                <Link
                  href={"#"}
                  className="text-[14px] xl:text-xl light-black font-bold underline"
                >
                  Learn More.
                </Link>
              </div>
            </div>
          </div>
          <div className="flex max-md:flex-col md:p-10 py-6  max-md:space-y-5 bg-[#F0F0F0] bg-opacity-50  items-center rounded-2xl">
            <div className=" w-[222px] xl:w-[290px]">
              <Image
                src="/images/strategic-partner-2.png"
                alt="ClaimsXchange Logo"
                className=" w-full"
                width={0}
                height={0}
                sizes="100vw"
                priority
              />
            </div>
            <div className="flex-1 md:ml-[45px] xl:ml-10 max-md:p-3">
              <div className="text-[14px] md:text-[16px] xl:text-lg light-black max-md:my-3 leading-loose">
                The ClaimsXchange is a membership organization that connects
                innovative and collaborative professionals who share a passion
                for advancing the claims industry. Through exclusive events,
                members will forge lasting connections while sharing unique and
                memorable experiences throughout the country. Membership is FREE
                for claims professionals.
              </div>
              <div className="mt-2">
                <Link
                  href={"#"}
                  className="text-[14px] xl:text-xl light-black font-bold underline"
                >
                  Learn More.
                </Link>
              </div>
            </div>
          </div>
          <div className="flex max-md:flex-col md:p-10 py-6  max-md:space-y-5 bg-[#F0F0F0] bg-opacity-50  items-center rounded-2xl">
            <div className="w-[133px] xl:w-[290px]">
              <Image
                src="/images/strategic-partner-3.png"
                alt="MusicallyFed Logo"
                className=" w-full"
                width={0}
                height={0}
                sizes="100vw"
                priority
              />
            </div>
            <div className="flex-1 md:ml-32 xl:ml-10 max-md:p-3">
              <div className="text-[14px] md:text-[16px] xl:text-lg light-black max-md:my-3 leading-loose">
                MusicallyFed is a non-profit organization that works to mobilize
                the music industry in the fight against hunger. They work with
                artists, promoters, management, and venues nationwide to donate
                unused, backstage meals to community organizations comprised of
                at least 50% veterans and who focus on feeding the homeless,
                hungry, and food insecure.
              </div>
              <div className="mt-2">
                <Link
                  href={"#"}
                  className="text-[14px] xl:text-xl light-black font-bold underline"
                >
                  Learn More.
                </Link>
              </div>
            </div>
          </div>
          <div className="flex max-md:flex-col md:p-10 py-6  max-md:space-y-5 bg-[#F0F0F0] bg-opacity-50  items-center rounded-2xl">
            <div className="w-[175px] xl:w-[290px]">
              <Image
                src="/images/strategic-partner-4.png"
                alt="NAYS Logo"
                className=" w-full"
                width={0}
                height={0}
                sizes="100vw"
                priority
              />
            </div>
            <div className="flex-1 md:ml-[90px] xl:ml-10 max-md:p-3">
              <div className="text-[14px] md:text-[16px] xl:text-lg light-black max-md:my-3 leading-loose">
                MusicallyFed is a non-profit organization that works to mobilize
                the music industry in the fight against hunger. They work with
                artists, promoters, management, and venues nationwide to donate
                unused, backstage meals to community organizations comprised of
                at least 50% veterans and who focus on feeding the homeless,
                hungry, and food insecure.
              </div>
              <div className="mt-2">
                <Link
                  href={"#"}
                  className="text-[14px] xl:text-xl light-black font-bold underline"
                >
                  Learn More.
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Container>
  );
}
export default AboutUs;
