"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import CustomAlert from "../alert/page";

const sidebarItems = [
  {
    src: "/dashboard/member-normal.svg",
    srcOnHover: "/dashboard/members.svg",
    label: "Members Forum",
    route: "/members-only-content/Dashboard/member-forum",
  },
  {
    src: "/dashboard/private.svg",
    srcOnHover: "/dashboard/private-red.svg",
    label: "Private Member Directory",
    route: "/members-only-content/Dashboard/private-member",
  },
  {
    src: "/dashboard/webinar.svg",
    srcOnHover: "/dashboard/webinar-red.svg",
    label: "Webinars",
    route: "/members-only-content/Dashboard/webinar",
  },
  {
    src: "/dashboard/user.svg",
    srcOnHover: "/dashboard/user-red.svg",
    label: "Profile",
    route: "/members-only-content/Dashboard/profile",
  },
  {
    src: "/dashboard/logout.svg",
    srcOnHover: "/dashboard/logout-red2.svg",
    label: "Logout",
    // route: "/",
  }, // Adjust the logout route if necessary
];

function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const { data: session } = useSession();
  const [logoutTriggered, setLogoutTriggered] = useState(false);
  const [AlertDetails, setAlertDetails] = useState({
    isOpen: false,
    message: "",
    duration: 3000,
    position: "bottom",
    type: "success",
  });

  const token = session?.user?.userToken;
  const [previousToken, setPreviousToken] = useState(token);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);
      const handleResize = () => setIsMobile(window.innerWidth < 768);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    if (token && token !== previousToken && !logoutTriggered) {
      // do nothing
      console.log("prtint")
    } else if (logoutTriggered) {
      // reset the logoutTriggered flag
      setLogoutTriggered(false);
    }
    setPreviousToken(token);
  }, [token]);

  const onclickLogout = () => {
    setLogoutTriggered(true);
    signOut({ redirect: false });
    setAlertDetails({
      isOpen: true,
      message: "Logout Successfully! ",
      duration: 3000,
      position: "top",
      type: "success",
    });
  };

  const handleNavigation = (route, index) => {
    if (index === 4) {
      onclickLogout();
    } else {
      router.push(route);
      setActiveIndex(index === activeIndex ? null : index);
    }
  };

  return (
    <>
      {AlertDetails.isOpen && (
        <CustomAlert
          message={AlertDetails.message}
          duration={AlertDetails.duration}
          onClose={() =>
            setAlertDetails({
              ...AlertDetails,
              isOpen: false,
            })
          }
          position={AlertDetails.position}
          type={AlertDetails.type}
        />
      )}
      <div className="hidden lg:block space-y-6 h-auto">
        {sidebarItems.map((item, index) => (
          <div
            key={index}
            className={`flex px-[10px] py-[8px] font-bold items-center gap-5 cursor-pointer rounded-xl transition duration-200 
              ${
                pathname.includes(item.route)
                  ? "bg-[#F6E0E0CC] text-primary font-bold"
                  : ""
              } ${
              activeIndex === index
                ? "bg-[#F6E0E0CC] text-primary font-bold"
                : "text-gray"
            }`}
            onClick={() => handleNavigation(item.route, index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div>
              <Image
                src={
                  hoveredIndex === index ||
                  activeIndex === index ||
                  pathname.includes(item.route)
                    ? item.srcOnHover
                    : item.src
                }
                height={30}
                width={30}
                alt="logo"
                className="h-8"
              />
            </div>
            <div className="lg:text-[18px] text-base px-0 hover:text-primary">
              {item.label}
            </div>
          </div>
        ))}
      </div>

      <div className="lg:hidden flex justify-around overflow-x-scroll lg:overflow-y-scroll hideScrollbar">
        {sidebarItems.map((item, index) => (
          <div
            key={index}
            className={`flex px-[10px] py-[10px] me-3 items-center gap-4 cursor-pointer rounded-xl transition duration-200 hover:bg-[#F6E0E0CC] text-gray
              ${isMobile ? "flex-shrink-0" : ""} 
              ${
                pathname.includes(item.route) || activeIndex === index
                  ? "bg-[#F6E0E0CC] text-primary"
                  : "text-gray"
              }
            `}
            onClick={() => handleNavigation(item.route, index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div>
              <Image
                src={
                  hoveredIndex === index || activeIndex === index
                    ? item.srcOnHover
                    : item.src
                }
                height={30}
                width={30}
                alt="logo"
                className="w-[30px] h-[30px]"
              />
            </div>
            <div className="text-[14px]">{item.label}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Sidebar;
