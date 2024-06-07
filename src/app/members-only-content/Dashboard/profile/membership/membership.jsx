import React from "react";

const Membership = () => {
  return (
    <div className="px-7">
      <div>
        <h2 className="text-xl font-bold">Membership Details</h2>
      </div>
      <div className="mt-11 ">
        <div className="max-w-[313px] h-[202px] xs:h-[303px] border-[3px] border-[#C42C2D] rounded-[14px] p-8 flex flex-col justify-between ">
          <div className="">
            <div className="flex justify-between">
              <div>
                <h2 className="text-xl font-bold max-w-[186px]">
                  Student - $200.00 (USD)
                </h2>
              </div>
              <div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_592_2824)">
                    <path
                      d="M9.99805 0.00390625C4.48426 0.00390625 -0.00195312 4.49012 -0.00195312 10.0039C-0.00195312 15.5177 4.48426 20.0039 9.99805 20.0039C15.5118 20.0039 19.998 15.5177 19.998 10.0039C19.998 4.49012 15.5118 0.00390625 9.99805 0.00390625ZM15.587 7.37233L9.19604 13.7132C8.8201 14.0891 8.2186 14.1142 7.8176 13.7382L4.43414 10.6555C4.03313 10.2796 4.00807 9.65303 4.35895 9.25203C4.73489 8.85102 5.36146 8.82596 5.76246 9.2019L8.44416 11.658L14.1584 5.94376C14.5595 5.54275 15.186 5.54275 15.587 5.94376C15.988 6.34476 15.988 6.97132 15.587 7.37233Z"
                      fill="#C42C2D"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_592_2824">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div>
              <p className="text-base font-normal text-[#9B9A9A] mt-3">
                Subscription period: 1 year
              </p>
            </div>
          </div>
          <div className="flex justify-end">
            <p className="text-[#C42C2D] text-xl font-bold">Cancel</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
