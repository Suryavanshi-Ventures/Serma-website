import Image from "next/image";
import Link from "next/link";

import Container from "@/components/container/page";

function AdvisoryBoard() {
  const advisory_board_members = [
    {
      id: 1,
      name: "Scott Bermack",
      position: "Partner, General Liability Co-chair",
      department: "Weber Gallagher",
    },
    {
      id: 2,
      name: "Jason Bernstein",
      position: "VP, Assistant General Counsel ",
      department: "twice- Anschutz Entertainment Group, Inc. ",
    },
    { id: 3, name: "Adam Bunge", position: "Chairman", department: "ideal3" },
    {
      id: 4,
      name: "Brian Cafritz",
      position: "Partner",
      department: "KPM Law",
    },
    {
      id: 5,
      name: "Zandria Conyers ",
      position: "Senior Vice President & General Counsel  ",
      department: "Portland Trail Blazers",
    },
    {
      id: 6,
      name: "Christian Deputy",
      position: "President",
      department: "Lockton Companies",
    },
    {
      id: 7,
      name: "David Dwortz",
      position: "President/Chief Executive Officer",
      department: "Helmsman Management",
    },
    {
      id: 8,
      name: "Jayson DeMarco",
      position: "Head of MGA-US and VP",
      department: "Underwriting at Players Health",
    },
    {
      id: 9,
      name: "Warren Harper",
      position: "Global Sports & Events Practice Leader, Managing Director",
      department: "Marsh USA",
    },
    {
      id: 10,
      name: "Peter Hecht",
      position: "Founder & EVP",
      department: "Magna Legal Services",
    },
    {
      id: 11,
      name: "Simon Keshishian",
      position: "Vice President, Risk Management",
      department: "Red Bull",
    },
    {
      id: 12,
      name: "Laurie Kleinman",
      position: "Vice President Legal & Risk Management",
      department: "Comcast Spectacor",
    },
    {
      id: 13,
      name: "Carlos Kuri",
      position: "Chief Legal Officer",
      department: "U.S. Soccer Federation",
    },
    {
      id: 14,
      name: "Jessica Mechtly",
      position: "Associate Director, Risk Management",
      department: "US Olympic and Paralympic Committee",
    },
    {
      id: 15,
      name: "John Petrone",
      position: "Senior Managing Director",
      department: "Petrone Risk",
    },
    {
      id: 16,
      name: "Sydney Posner",
      position: "Chief Executive Officer",
      department: "ClaimsXchange",
    },
    {
      id: 17,
      name: "Brian Rosenblatt",
      position: "General Counsel, SERMA",
      department: "Income Member, Downey & Lenkov LLC",
    },
    {
      id: 18,
      name: "Shalom Suniula",
      position: "Client Executive, Property & Casualty",
      department: "USI Insurance Services",
    },
    {
      id: 19,
      name: "Kori Theusch",
      position: "Creative Director, SERMA",
      department: "Chief Operating Officer, S1 Medical",
    },
    {
      id: 20,
      name: "Barrie Wexler ",
      position: "Executive Vice President - Risk Management ",
      department: "Paramount Global",
    },
  ];
  return (
    <Container>
      <div className="relative md:pt-[40px] pb-[14px] mb-14">
        <div className="w-full ">
          <div className="text-2xl lg:text-4xl font-bold lg:w-80 text-light-black px-2">
            Advisory Board
          </div>

          <div className="flex flex-col gap-6 mt-5 md:mt-10">
            <div className="flex flex-col md:flex-row bg-[#F0F0F0] p-4 bg-opacity-50 rounded-2xl">
              <div className="md:w-[320px]">
                <Image
                  src="/images/advisory-board/ceo.svg"
                  alt="Hackney Publications Logo"
                  className=" w-full"
                  width={0}
                  height={0}
                  sizes="100vw"
                  priority
                />
              </div>
              <div className="flex-1 md:ml-10">
                <div className="text-[16px] max-md:my-5  md:text-2xl text-secondary font-bold">
                  Rich Lenkov | Founder / CEO
                </div>
                <div className="text-[14px]  xl:text-lg text-black mt-4 leading-loose">
                  As a Capital Member of Downey & Lenkov LLC, Rich has been
                  representing professional sports organizations and multiple
                  entities in the entertainment industry for 25 years. Rich is
                  also the co-founder of Triopolis, a production company with
                  credits including ‘85: The Greatest Team in Football History
                  (starring Barack Obama, Bill Murray, Mike Ditka) and John
                  Wayne Gacy: Defending a Monster. Rich was also the lead
                  producer for the very successful Las Vegas production
                  Renegades, starring Jim McMahon, Terrell Owens and Jose
                  Canseco and is involved in other productions including Rock of
                  Ages and Elvis Presley’s Heartbreak Hotel In Concert.
                </div>
                <div className="mt-5 xl:mt-10 flex  md:w-[200px] md:py-3 py-2 md:px-6 transition duration-500 hover:bg-primary hover:text-white  font-normal  justify-center items-center gap-3 text-lg tracking-wider text-primary  border border-[#C8C8C8]  hover:border-none  rounded-full">
                  <Link href={"#"} className=" text-center ">
                    Contact Rich
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-7 mt-10">
          {advisory_board_members.map((member) => (
            <div key={member.id} className="w-full ">
              <Image
                src={`/images/advisory-board/advisory-board-${member.id}.svg`}
                alt="Hackney Publications Logo"
                className=" w-full"
                width={0}
                height={0}
                sizes="100vw"
                priority
              />

              <div className="xl:text-2xl text-lg text-secondary font-bold mt-4">
                {member.name}
              </div>
              <div className="xl:text-base flex text-[14px] items-center text-gray mt-2 ">
                {member.position}
              </div>
              <div className="w-full  items-center mt-2">
                <div className="flex lg:flex-row lg:justify-between  items-center  gap-4">
                  <div className="flex-1 lg:text-[14px] xl:text-[16px] text-light-black">
                    {member.department}
                  </div>
                  {/* <div className="flex  gap-3">
                  <Image src={LinkedInIcon} width={36} height={36} />
                  <Image src={ResumeIcon} width={36} height={36} />
                </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
export default AdvisoryBoard;
