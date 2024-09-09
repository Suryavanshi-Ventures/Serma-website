import React from "react";

function Container({ children }) {
  return (
    <div className="sm:px-[25px] lg:px-[30px]  xl:px-[85px] ">{children}</div>
  );
}

export default Container;
