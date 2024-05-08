import Image from "next/image";
import React from "react";

function BlueLine({width,height}) {
  return (
    <div>
      <Image src="blue-line.svg" height={80} width={110} alt="Blue line"/>
      {/* <svg
        width="800"
        height="5"
        viewBox="0 0 117 5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="117" height="5" rx="2.5" fill="#13A6AC" />
      </svg> */}
    </div>
  );
}

export default BlueLine;
