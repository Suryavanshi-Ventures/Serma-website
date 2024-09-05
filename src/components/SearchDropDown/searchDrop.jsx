import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";

const SearchDropdown = ({
  disable,
  optionList,
  initial_value,
  title,
  OnSelectOptionProp,
  dropDownWidth,
  placeholderProp,
}) => {
  const [dropdown, setDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const dropdownRef = useRef(null);

  const handleSelection = (item) => {
    setSelectedItem(item);
    OnSelectOptionProp(item);
    setDropdown(false);
    setSearchTerm(item);
  };

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdown(false);
    }
  };

  const handleRemoveSelection = () => {
    if (!disable) {
      setSelectedItem("");
      OnSelectOptionProp(""); // You may want to update the parent state with an empty value
      setSearchTerm("");
    }
  };

  useEffect(() => {
    initial_value && handleSelection(initial_value);
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [initial_value]);

  // useEffect(() => {
  //   if (initial_value) {
  //     setSearchTerm(initial_value);
  //   }
  //   document.addEventListener("click", handleOutsideClick);

  //   return () => {
  //     document.removeEventListener("click", handleOutsideClick);
  //   };
  // }, []);

  return (
    <div>
      <div className={`space-y-2 lg:w-[${dropDownWidth}px]`}>
        <div>
          <h1 className="font-medium">{title}</h1>
        </div>
        <div className="relative" ref={dropdownRef}>
          <div
            onClick={() => {
              // Check if the dropdown is not disabled
              if (!disable) {
                // Toggle the dropdown state
                setDropdown(!dropdown);
              }
            }}
            className="flex items-center border border-[#CECECE] rounded-lg gap-3  "
          >
            <input
              placeholder={placeholderProp}
              readOnly={!disable ? false : true}
              type="text"
              // value={initial_value ? initial_value:  searchTerm }
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`outline-none py-3   focus:border-primary px-5 rounded-lg  w-full ${
                disable && "bg-gray-50"
              }`}
            />

            {selectedItem && (
              <div className="flex items-center float-right">
                <svg
                  onClick={handleRemoveSelection}
                  className={`ml-[-50px] mt-[-2px] text-red-500 hover:text-red-700 cursor-pointer`}
                  width="17"
                  height="17"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_3074_555)">
                    <path
                      d="M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433286 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0ZM13.9225 12.7442L12.7442 13.9225L10 11.1783L7.25584 13.9225L6.0775 12.7442L8.82167 10L6.0775 7.25583L7.25584 6.0775L10 8.82167L12.7442 6.0775L13.9225 7.25583L11.1783 10L13.9225 12.7442Z"
                      fill="#cecece"
                      className="hover:fill-[#828282] transition-all duration-[0.3s]"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3074_555">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            )}
            <div className="absolute right-4">
              <svg
                onClick={() => {
                  if (!disable) {
                    setDropdown(!dropdown);
                  }
                }}
                className={` transition-transform top-3.5 xl:top-5 ${
                  !disable && "cursor-pointer"
                } right-3 d ${dropdown ? "transform rotate-180" : ""}`}
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.9997 5.17238L11.9495 0.222656L13.3637 1.63687L6.9997 8.00088L0.635742 1.63687L2.04996 0.222656L6.9997 5.17238Z"
                  fill={`${disable ? "#d2d0d0" : "#C42C2D"} `}
                />
              </svg>
            </div>
          </div>
          <div
            className={`absolute z-10 top-11 left-0 drop-shadow-md  bg-white w-full  h-fit shadow-lg ${
              dropdown ? "visible" : "hidden"
            }`}
          >
            <div className="space-y-4 p-3 h-fit max-h-[200px] overflow-auto">
              {optionList
                .filter((school) =>
                  school.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((item, index) => (
                  <p
                    className="cursor-pointer text-sm hover:bg-primary hover:text-white p-2 rounded-md"
                    key={index}
                    onClick={() => handleSelection(item)}
                  >
                    {item}
                  </p>
                ))}
              {optionList.length === 0 && (
                <p className="text-gray-500">No options available</p>
              )}
              {optionList.length > 0 &&
                searchTerm.length > 0 && // New condition
                optionList.filter((school) =>
                  school.toLowerCase().includes(searchTerm.toLowerCase())
                ).length === 0 && (
                  <p
                    className="text-gray-500 cursor-pointer hover:text-primaryHover "
                    onClick={() => handleSelection(searchTerm)}
                  >
                    {" "}
                    {searchTerm}{" "}
                    <span className="text-primary text-lg  font-bold">+</span>
                  </p>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchDropdown;
