import Image from "next/image";
const Footer = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-4 grid-rows-1 gap-x-0 gap-y-1 bg-[#F3F3F3]">
        <div className="border-r  border-[#33333359] p-5 flex justify-center">
          <div>
            <div className="flex justify-center">
              <Image src="/logo.svg" height={60} width={135} alt="logo" />
            </div>
            <div className="sm:my-[40px] xl:w-[300px] responsive-Text text-center">
              Sports and Entertainment Risk Management Alliance
            </div>
          </div>
        </div>
        <div className="border-r  border-[#33333359] p-5 text-center">
          <div className="font-[700] text-[20px]">Contact Us</div>

          <div className="sm:mt-[60px] ">
            <div className="my-3 underline responsive-Text">
              info@theserma.org
            </div>
            <div className="responsive-Text">+1 (123) 456 -7890</div>
          </div>
        </div>
        <div className="border-r  border-[#33333359] p-5 text-center  ">
          <div className="font-[700] text-[20px]">Links</div>
          <div className="sm:mt-[60px] responsive-Text">
            <div className="my-3 ">About</div>
            <div>Event</div>
            <div className="my-3">Membership</div>
            <div>The Sermapod</div>
            <div className="my-3">Membership Only Content</div>
          </div>
        </div>
        <div className="p-5">
          <div className="text-center font-[700] text-[20px]">
            Connect With Us
          </div>
          <div className="flex justify-center gap-3 sm:mt-[60px]">
            <div>
              <Image
                src="/footer/Linkedin.svg"
                height={43}
                width={43}
                alt="logo"
              />
            </div>
            <div>
              {" "}
              <Image
                src="/footer/Facebook.svg"
                height={43}
                width={43}
                alt="logo"
              />
            </div>
            <div>
              {" "}
              <Image
                src="/footer/Twitter.png"
                height={43}
                width={43}
                alt="logo"
              />
            </div>
            <div>
              {" "}
              <Image
                src="/footer/Insta.svg"
                height={43}
                width={43}
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
