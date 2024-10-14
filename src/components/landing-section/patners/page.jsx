import React from "react";
import Image from "next/image";
function Partners() {
  return (
    <div className=" mt-[50px]  md:mt-[60px] xl:[100px] ">
      <div className="flex justify-around xl:justify-center items-center gap-20 sm:gap-28 md:gap-56">
        <div>
          <Image
            src="/partners/digistream.svg"
            height={72}
            width={216}
            alt="image"
          />
        </div>
        <div>
          {" "}
          <Image
            src="/partners/mayer.svg"
            height={28}
            width={150}
            alt="image"
          />
        </div>
      </div>
      <div className="flex justify-center my-5">
        <div>
          <div className="text-[#333333] font-semibold text-[16px] xl:text-[18px] text-center">
            SPONSORSHIP OPPORTUNITIES AVAILABLE!
          </div>
          <div className="text-center mt-5 max-md:text-[14px] font-semibold">
            <div>
              CONTACT <span className="text-primary">SERMA</span> AT
            </div>
            <div className="text-primary">INFO@THESERMA.ORG</div> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
