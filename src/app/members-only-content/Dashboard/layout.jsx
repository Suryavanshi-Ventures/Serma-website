"use client";
import Sidebar from "@/components/sidebar/page";
import LoadingButton from "@/components/loadingButton/page";
import DashboardEvents from "@/components/dashboard-events/page";
import { useRouter, usePathname } from "next/navigation";
import ProtectRoute from "@/app/utils/protected_Routes/protectedRoutes";

export default function Layout({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  const handlePushToCreateTopic = () => {
    router.push("/members-only-content/Dashboard/member-forum/create-topic");
  };
  return (
    <ProtectRoute>
      <div
        className={`bg-white 3xl:mx-auto max-w-screen-2xl px-3 sm:px-5 lg:px-[50px] xl:px-[85px] mt-5 md:mt-10 relative`}
      >
        <div className="flex justify-between items-center ">
          {pathname.includes("/member-forum") ? (
            <div className="  w-full ">
              <div className="">
                <div className=" xs:text-[20px] w-full  text-[#333333] md:text-2xl font-semibold flex    justify-between items-center">
                  Member Chat Forum
                  <div onClick={handlePushToCreateTopic} className=" ">
                    <div
                      onClick={handlePushToCreateTopic}
                      className="border cursor-pointer text-[14px] hover:bg-primary transition duration-200 hover:text-white text-[#9b9a9a]  border-[#9b9a9a] w-[150px] py-[10px] rounded-full  flex justify-center items-center "
                    >
                      + Create Topic
                    </div>
                  </div>
                </div>
                <p className="text-gray sm:my-5 my-3 text-[14px] md:text-[16px]">
                  Got a question, want to start a discussion? Create and post
                  for other community members to view and comment 
                </p>
              </div>
            </div>
          ) : pathname.includes("/private-member") ? (
            <div className="sm:flex justify-between w-full">
              <h2 className="text-[#333333]  xs:text-[20px] md:text-2xl font-semibold sm:mb-0 mb-3">
                Members-only Directory
              </h2>
              <div className="flex gap-8 items-center sm:w-auto  w-full">
                <div className="relative w-full">
                  <input
                    type="text"
                    className="pl-10 pr-4 py-2 sm:w-64 w-full rounded-full border border-gray shadow-sm focus:outline-primary   "
                    placeholder="Search"
                  />
                  <svg
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.9 14.32a8 8 0 111.42-1.42l4.32 4.33a1 1 0 01-1.42 1.42l-4.32-4.33zM8 14a6 6 0 100-12 6 6 0 000 12z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                {/* ---------------------filter svg------------------------- */}
                <div className="bg-[#F5F6F8] p-2 rounded-md">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_575_8826)">
                      <path
                        d="M0.9375 5.28752H15.2112C15.6414 7.24566 17.3901 8.71572 19.4756 8.71572C21.561 8.71572 23.3097 7.24572 23.7399 5.28752H29.0625C29.5802 5.28752 30 4.86775 30 4.35002C30 3.83229 29.5802 3.41252 29.0625 3.41252H23.7394C23.3084 1.45537 21.5573 -0.015625 19.4756 -0.015625C17.3927 -0.015625 15.6424 1.45514 15.2116 3.41252H0.9375C0.419766 3.41252 0 3.83229 0 4.35002C0 4.86775 0.419766 5.28752 0.9375 5.28752ZM16.985 4.35248C16.985 4.34914 16.985 4.34574 16.985 4.3424C16.9891 2.97324 18.1063 1.85943 19.4756 1.85943C20.8429 1.85943 21.9601 2.97172 21.966 4.34023L21.9662 4.354C21.964 5.72551 20.8476 6.84078 19.4756 6.84078C18.1041 6.84078 16.988 5.72662 16.9849 4.35594L16.985 4.35248ZM29.0625 24.7102H23.7394C23.3084 22.7531 21.5573 21.2821 19.4756 21.2821C17.3927 21.2821 15.6424 22.7529 15.2116 24.7102H0.9375C0.419766 24.7102 0 25.1299 0 25.6477C0 26.1655 0.419766 26.5852 0.9375 26.5852H15.2112C15.6414 28.5434 17.3901 30.0134 19.4756 30.0134C21.561 30.0134 23.3097 28.5434 23.7399 26.5852H29.0625C29.5802 26.5852 30 26.1655 30 25.6477C30 25.1299 29.5802 24.7102 29.0625 24.7102ZM19.4756 28.1384C18.1041 28.1384 16.988 27.0243 16.9849 25.6536L16.985 25.6502C16.985 25.6468 16.985 25.6435 16.985 25.6401C16.9891 24.271 18.1063 23.1571 19.4756 23.1571C20.8429 23.1571 21.9601 24.2694 21.966 25.6378L21.9662 25.6516C21.9642 27.0233 20.8477 28.1384 19.4756 28.1384ZM29.0625 14.0614H14.7888C14.3586 12.1033 12.6099 10.6333 10.5244 10.6333C8.43896 10.6333 6.69029 12.1033 6.2601 14.0614H0.9375C0.419766 14.0614 0 14.4812 0 14.9989C0 15.5167 0.419766 15.9364 0.9375 15.9364H6.26057C6.69164 17.8935 8.44266 19.3645 10.5244 19.3645C12.6073 19.3645 14.3576 17.8937 14.7884 15.9364H29.0625C29.5802 15.9364 30 15.5167 30 14.9989C30 14.4812 29.5802 14.0614 29.0625 14.0614ZM13.015 14.9964C13.015 14.9998 13.015 15.0032 13.015 15.0065C13.0109 16.3757 11.8937 17.4895 10.5244 17.4895C9.15715 17.4895 8.03988 16.3772 8.03397 15.0087L8.03379 14.995C8.03584 13.6234 9.15234 12.5083 10.5244 12.5083C11.8959 12.5083 13.012 13.6224 13.0151 14.9931L13.015 14.9964Z"
                        fill="#C42C2D"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_575_8826">
                        <rect width="30" height="30" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          ) : pathname.includes("/profile") ? (
            <div className="xs:text-[20px]  text-[#333333]    md:text-2xl font-semibold">
              {/* <h2 className="max-md:flex md:hidden">Profile</h2> */}
              <h2 className="">Profile</h2>
            </div>
          ) : pathname.includes("/webinar") ? (
            <div className="xs:text-[20px]  text-[#333333] md:text-2xl font-semibold">
              <h2>Webinars</h2>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-5 my-7 ">
          <div>
            <Sidebar />
            <hr className="hidden lg:block text-[#9B9A9A33] my-10" />
            <span className=" hidden lg:block">
              {pathname.includes("/webinar") ||
              pathname.includes("/profile") ? (
                <div className="lg:w-[300px]"></div>
              ) : (
                <DashboardEvents />
              )}
            </span>
          </div>
          {children}
          {/* </div> */}
          <span className=" block lg:hidden">
            {pathname.includes("/webinar") || pathname.includes("/profile") ? (
              <div className="lg:w-[300px]"></div>
            ) : (
              <DashboardEvents />
            )}
          </span>
        </div>
      </div>
    </ProtectRoute>
  );
}
