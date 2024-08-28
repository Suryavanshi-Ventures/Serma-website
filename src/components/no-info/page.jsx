import Image from "next/image";
import React from "react";

function NoInfoAvailable() {
  return (
    <div className="flex justify-center items-center my-10">
      <div className="text-center">
        <Image src="/no-info-avai.gif" alt="" height={300} width={300} />
        <div className="text-[25px] font-bold animate-fade-down">
          No Information Available
        </div>
      </div>
    </div>
  );
}

export default NoInfoAvailable;
