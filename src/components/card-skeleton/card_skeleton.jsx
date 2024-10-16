import React from "react";
import Skeleton from "../skeleton/skeleton";

function Card_skeleton({ width }) {
  return (
    <div>
       
      {/* <div className="grid xs:grid-cols-2  sm:grid-cols-3  lg:grid-cols-3 gap-11 col-span-7  items-center "> */}
      <div className={`flex flex- gap-5 w-[${width}px]  `}>
        {Array.from({ length: 4 }).map((data, index) => (
          <div
            key={index}
            className={`h-full  w-full   px-1  pb-3 shadow-lg rounded-lg`}
          >
            <Skeleton item={1} style="h-[150px] w-full rounded-lg mb-3" />
            <Skeleton item={4} style="h-[38px] w-full rounded-lg mb-3" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card_skeleton;
