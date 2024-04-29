import React from "react";
import Image from "next/image";
function Partners() {
  return (
    <div className="my-[100px] max-sm:px-3">
      <div className="flex justify-center items-center gap-20 sm:gap-28 md:gap-48">
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
          {" "}
          <Image
            src="/partners/partner-logo.svg"
            height={50}
            width={290}
            alt="image"
          />
        </div>
      </div>
    </div>
  );
}

export default Partners;
