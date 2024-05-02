"use client";
import React, { useState } from "react";

function Button({ content, px, py }) {
  const [handleVectorChange, setHandleVectorChange] = useState(false);
  return (
    <div>
      <div className="my-6 md:my-8 flex justify-center">
        <div
          onMouseEnter={() => setHandleVectorChange(true)}
          onMouseLeave={() => setHandleVectorChange(false)}
          className={`flex justify-center items-center gap-2 ${px} ${py} border border-gray hover:bg-primary hover:text-white cursor-pointer transition duration-300 text-primary  rounded-full `}
        >
          <span className=" "> {content}</span>{" "}
          <span>
            {handleVectorChange ? (
              <svg
                width="18"
                height="8"
                viewBox="0 0 20 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 3.5L0.5 3.5L0.5 4.5L1 4.5L1 3.5ZM19.3536 4.35356C19.5488 4.1583 19.5488 3.84171 19.3536 3.64645L16.1716 0.464469C15.9763 0.269207 15.6597 0.269207 15.4645 0.464469C15.2692 0.659731 15.2692 0.976314 15.4645 1.17158L18.2929 4L15.4645 6.82843C15.2692 7.02369 15.2692 7.34027 15.4645 7.53554C15.6597 7.7308 15.9763 7.7308 16.1716 7.53554L19.3536 4.35356ZM1 4.5L19 4.5L19 3.5L1 3.5L1 4.5Z"
                  fill="white"
                />
              </svg>
            ) : (
              <svg
                width="18"
                height="8"
                viewBox="0 0 20 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                //   class=""
              >
                <path
                  d="M1 3.5L0.5 3.5L0.5 4.5L1 4.5L1 3.5ZM19.3536 4.35356C19.5488 4.1583 19.5488 3.84171 19.3536 3.64645L16.1716 0.464469C15.9763 0.269207 15.6597 0.269207 15.4645 0.464469C15.2692 0.659731 15.2692 0.976314 15.4645 1.17158L18.2929 4L15.4645 6.82843C15.2692 7.02369 15.2692 7.34027 15.4645 7.53554C15.6597 7.7308 15.9763 7.7308 16.1716 7.53554L19.3536 4.35356ZM1 4.5L19 4.5L19 3.5L1 3.5L1 4.5Z"
                  fill="#C42C2D"
                />
              </svg>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Button;
