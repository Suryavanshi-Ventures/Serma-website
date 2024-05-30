import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

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
  { src: "/dashboard/logout.svg", label: "Logout", route: "/logout" }, // Adjust the logout route if necessary
];

function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < 768);
      const handleResize = () => setIsMobile(window.innerWidth < 768);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const handleNavigation = (route, index) => {
    router.push(route);
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <div className="hidden md:block space-y-6 h-auto">
        {sidebarItems.map((item, index) => (
          <div
            key={index}
            className={`flex px-[10px] py-[10px] items-center gap-5 cursor-pointer rounded-xl transition duration-200 
              ${
                pathname.includes(item.route)
                  ? "bg-[#F6E0E0CC] text-primary"
                  : ""
              } ${
              activeIndex === index
                ? "bg-[#F6E0E0CC] text-primary"
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
              />
            </div>
            <div className="text-[18px]">{item.label}</div>
          </div>
        ))}
      </div>

      <div className="md:hidden flex justify-around overflow-x-scroll md:overflow-y-scroll hideScrollbar">
        {sidebarItems.map((item, index) => (
          <div
            key={index}
            className={`flex px-[10px] py-[10px] items-center gap-4 cursor-pointer rounded-xl transition duration-200 
              hover:bg-[#F6E0E0CC] text-gray
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
