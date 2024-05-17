import Image from "next/image";
const Footer = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-4 grid-rows-1 gap-x-0 gap-y-1 bg-[#F3F3F3]">
        <div className="border-r  border-[#3333331c] p-5 flex justify-center">
          <div>
            <div className="flex justify-center">
              <Image src="/logo.svg" height={60} width={135} alt="logo" />
            </div>
            <div className="my-[20px] sm:my-[40px] xl:w-[300px] responsive-Text-footer text-[#333333] text-center">
              Sports and Entertainment Risk Management Alliance
            </div>
          </div>
        </div>
        <div className="border-r  border-[#3333331c] p-5 text-center">
          <div className="font-[700] text-[20px] text-[#333333]">Contact Us</div>

          <div className="sm:mt-[60px] xs:space-y-8 ">
            <div className="my-3 underline responsive-Text-footer text-[#333333]">
              info@theserma.org
            </div>
            <div className="responsive-Text-footer">+1 (123) 456 -7890</div>
          </div>
        </div>
        <div className="border-r  border-[#3333331c] p-5   max-md:text-center ">
          <div className=" flex justify-center">
            <div>
              <div className="font-[700] text-[20px] text-[#333333] ">Links</div>
              <div className="sm:mt-[60px]  responsive-Text-footer text-[#333333]">
                <div className="my-3 ">About</div>
                <div>Event</div>
                <div className="my-3">Membership</div>
                <div>The Sermapod</div>
                <div className="my-3">Membership Only Content</div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-5">
          <div className="text-center font-[700] text-[20px] text-[#333333]">
            Connect With Us
          </div>
          <div className="flex justify-center gap-3 mt-[20px] sm:mt-[60px]">
            <div>
              <Image
                src="/footer/Linkedin.svg"
                height={43}
                width={43}
                alt="logo"
              />
              <Image
                src="/footer/Linkedin.svg"
                height={43}
                width={43}
                alt="logo"
              />
              <Image
                src="/footer/Linkedin.svg"
                height={43}
                width={43}
                alt="logo"
              />
              {/* <svg
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill=""
                xmlns="http://www.w3.org/2000/svg"
                className="hover:bg-red-400"
               
              >
                <path
                  opacity="0.1"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22.6732 44.3479C34.643 44.3479 44.3464 34.6445 44.3464 22.6747C44.3464 10.7049 34.643 1.00146 22.6732 1.00146C10.7034 1.00146 1 10.7049 1 22.6747C1 34.6445 10.7034 44.3479 22.6732 44.3479Z"
                  stroke="#282828"
                  stroke-width="1.8577"
                 
                />
                <path
                  d="M17.6987 18.2992C18.7134 18.2992 19.536 17.4766 19.536 16.4618C19.536 15.4471 18.7134 14.6245 17.6987 14.6245C16.6839 14.6245 15.8613 15.4471 15.8613 16.4618C15.8613 17.4766 16.6839 18.2992 17.6987 18.2992Z"
                  fill="#333333"
                />
                <path
                  d="M19.2298 19.5266H16.1675C15.9985 19.5266 15.8613 19.6638 15.8613 19.8328V29.0195C15.8613 29.1885 15.9985 29.3257 16.1675 29.3257H19.2298C19.3988 29.3257 19.536 29.1885 19.536 29.0195V19.8328C19.536 19.6638 19.3988 19.5266 19.2298 19.5266Z"
                  fill="#333333"
                />
                <path
                  d="M28.3552 19.0177C27.0464 18.5693 25.4093 18.9631 24.4276 19.6693C24.3939 19.5376 24.2738 19.4396 24.1311 19.4396H21.0689C20.8999 19.4396 20.7627 19.5768 20.7627 19.7458V28.9325C20.7627 29.1015 20.8999 29.2387 21.0689 29.2387H24.1311C24.3002 29.2387 24.4374 29.1015 24.4374 28.9325V22.3304C24.9322 21.9041 25.5698 21.7681 26.0916 21.9898C26.5974 22.2036 26.8871 22.7254 26.8871 23.4205V28.9325C26.8871 29.1015 27.0243 29.2387 27.1934 29.2387H30.2556C30.4246 29.2387 30.5618 29.1015 30.5618 28.9325V22.8038C30.5269 20.2872 29.343 19.3557 28.3552 19.0177Z"
                  fill="#333333"
                />
              </svg> */}
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
