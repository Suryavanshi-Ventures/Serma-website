"use client";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import CustomAlert from "@/components/alert/page";
import { useRouter } from "next/navigation";
import LoadingButton from "@/components/loadingButton/page";
const Page = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading,setIsLoading] =useState(false)
  const [showHidePass, setShowHidePass] = useState(false);
  const [showCurrentPass, setShowCurrentPass] = useState(false);
  const [showHidePass2, setShowHidePass2] = useState(false);
  const [AlertDetails, setAlertDetails] = useState({
    isOpen: false,
    message: "",
    duration: 3000,
    position: "bottom",
    type: "success",
  });
  const { data: session } = useSession();
  const router = useRouter();
  const handleSetPass = async (
    currentPassword,
    newPassword,
    confirmNewPassword
  ) => {
    setIsLoading(true)
    const API_URL = `${process.env.NEXT_PUBLIC_APP_NEXTAUTH_URL}/auth/change/password`;
    const token = session?.user?.userToken;

    if (!token) {
      console.error("No token found in session");
      setIsLoading(false)
      return;
    }

    try {
      const response = await axios.post(
        API_URL,
        {
          current_password: currentPassword,
          new_password: newPassword,
          confirm_password: confirmNewPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setAlertDetails({
        isOpen: true,
        message: response?.data?.message || "Password Change Successfully",
        duration: 3000,
        position: "top",
        type: "success",
      });

      setCurrentPassword("");
      setNewPassword("");
      setConfirmNewPassword("");
      setIsLoading(false)
      // router.push("/members-only-content/Dashboard/profile");

      // return response.data; // If you need to return response data
    } catch (error) {
      setAlertDetails({
        isOpen: true,
        message: error?.response?.data?.message || "Failed to change Password",
        duration: 3000,
        position: "top",
        type: "danger",
      });
      console.error("Error changing password:", error?.response?.data?.message);
      setIsLoading(false)
    }
  };

  const handleSave = async () => {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[#?!@$%^&*-])[A-Za-z\d#?!@$%^&*-]{8,}$/;

    if (!passwordRegex.test(newPassword)) {
      setError(
        "Password must be at least 8 characters long and include at least one alphabet and special character #?!@$%^&*-."
      );
      return;
    }

    if (newPassword !== confirmNewPassword) {
      setError("New Password and Confirm New Password do not match.");
      return;
    }

    setError("");
    await handleSetPass(currentPassword, newPassword, confirmNewPassword);
  };

  const showCurrentPassword = () => {
    setShowCurrentPass(!showCurrentPass);
  };
  const showNewPass = () => {
    setShowHidePass(!showHidePass);
  };
  const showConfirmPass = () => {
    setShowHidePass2(!showHidePass2);
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
      <div className="w-full">
        <div className="text-gray text-base font-bold flex items-center gap-3">
          <div>
            <Link href="/members-only-content/Dashboard/profile">
              <p className="hover:text-primary transition duration-300">
                Profile
              </p>
            </Link>
          </div>
          <div>
            <svg
              width="9"
              height="16"
              viewBox="0 0 9 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.63388 7.11612C9.12204 7.60427 9.12204 8.39573 8.63388 8.88388L2.38388 15.1339C1.89573 15.622 1.10427 15.622 0.616117 15.1339C0.127961 14.6457 0.127961 13.8543 0.616117 13.3661L5.98223 8L0.616117 2.63388C0.127961 2.14573 0.127961 1.35427 0.616117 0.866117C1.10427 0.377961 1.89573 0.377961 2.38388 0.866117L8.63388 7.11612Z"
                fill="#C42C2D"
              />
            </svg>
          </div>
          <div>
            <p className="text-[#C42C2D]">Change Password</p>
          </div>
        </div>
        <div className="mt-10 text-[#333333] border border-[#D9D9D980] w-full p-[30px] rounded-2xl">
          <div>
            <h2 className="text-xl font-bold">Change Password</h2>
          </div>
          <div className="max-w-[700px] mt-[30px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-28 gap-y-7">
              <div>
                <div>
                  <h2 className="text-lg font-bold">Current Password*</h2>
                </div>
                <div className="relative">
                  <input
                    type={showCurrentPass ? "text" : "password"}
                    placeholder="Enter Current Password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="border border-[#9B9A9A4D] outline-primary text-lg font-normal rounded-xl w-full mt-5 px-3 py-3"
                  />
                  <div
                    onClick={showCurrentPassword}
                    className="absolute right-3 top-[55%] cursor-pointer "
                  >
                    {showCurrentPass ? (
                      <svg
                        width="20"
                        height="15"
                        viewBox="0 0 20 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_3191_33694)">
                          <path
                            d="M10 1.03906C6.17879 1.03906 2.71351 3.12968 0.15649 6.52541C-0.0521632 6.80361 -0.0521632 7.19228 0.15649 7.47048C2.71351 10.8703 6.17879 12.9609 10 12.9609C13.8212 12.9609 17.2865 10.8703 19.8435 7.47457C20.0522 7.19637 20.0522 6.8077 19.8435 6.5295C17.2865 3.12968 13.8212 1.03906 10 1.03906ZM10.2741 11.1976C7.73755 11.3572 5.64284 9.26653 5.80239 6.72588C5.93331 4.63117 7.63118 2.9333 9.72589 2.80238C12.2625 2.64283 14.3572 4.73345 14.1976 7.2741C14.0626 9.36472 12.3647 11.0626 10.2741 11.1976ZM10.1473 9.25835C8.78081 9.34427 7.65163 8.21918 7.74164 6.85271C7.81119 5.72353 8.72763 4.81118 9.85681 4.73754C11.2233 4.65162 12.3525 5.77671 12.2625 7.14318C12.1888 8.27646 11.2724 9.1888 10.1473 9.25835Z"
                            fill="#828282"
                          />
                        </g>
                        <line
                          y1="-0.5"
                          x2="19.799"
                          y2="-0.5"
                          transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 3 14)"
                          stroke="#828282"
                        />
                        <defs>
                          <clipPath id="clip0_3191_33694">
                            <rect
                              width="20"
                              height="12"
                              fill="white"
                              transform="translate(0 1)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    ) : (
                      <svg
                        width="20"
                        height="17"
                        viewBox="0 0 20 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 0.0390625C6.17879 0.0390625 2.71351 2.12968 0.15649 5.52541C-0.0521632 5.80361 -0.0521632 6.19228 0.15649 6.47048C2.71351 9.8703 6.17879 11.9609 10 11.9609C13.8212 11.9609 17.2865 9.8703 19.8435 6.47457C20.0522 6.19637 20.0522 5.8077 19.8435 5.5295C17.2865 2.12968 13.8212 0.0390625 10 0.0390625ZM10.2741 10.1976C7.73755 10.3572 5.64284 8.26653 5.80239 5.72588C5.93331 3.63117 7.63118 1.9333 9.72589 1.80238C12.2625 1.64283 14.3572 3.73345 14.1976 6.2741C14.0626 8.36472 12.3647 10.0626 10.2741 10.1976ZM10.1473 8.25835C8.78081 8.34427 7.65163 7.21918 7.74164 5.85271C7.81119 4.72353 8.72763 3.81118 9.85681 3.73754C11.2233 3.65162 12.3525 4.77671 12.2625 6.14318C12.1888 7.27646 11.2724 8.1888 10.1473 8.25835Z"
                          fill="#828282"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <h2 className="text-lg font-bold">New Password*</h2>
                </div>
                <div className="relative">
                  <input
                    type={showHidePass ? "text" : "password"}
                    placeholder="Enter New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="border border-[#9B9A9A4D] outline-primary text-lg font-normal rounded-xl w-full mt-5 px-3 py-3"
                  />
                  <div
                    onClick={showNewPass}
                    className="absolute right-3 top-[55%] cursor-pointer"
                  >
                    {showHidePass ? (
                      <svg
                        width="20"
                        height="15"
                        viewBox="0 0 20 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_3191_33694)">
                          <path
                            d="M10 1.03906C6.17879 1.03906 2.71351 3.12968 0.15649 6.52541C-0.0521632 6.80361 -0.0521632 7.19228 0.15649 7.47048C2.71351 10.8703 6.17879 12.9609 10 12.9609C13.8212 12.9609 17.2865 10.8703 19.8435 7.47457C20.0522 7.19637 20.0522 6.8077 19.8435 6.5295C17.2865 3.12968 13.8212 1.03906 10 1.03906ZM10.2741 11.1976C7.73755 11.3572 5.64284 9.26653 5.80239 6.72588C5.93331 4.63117 7.63118 2.9333 9.72589 2.80238C12.2625 2.64283 14.3572 4.73345 14.1976 7.2741C14.0626 9.36472 12.3647 11.0626 10.2741 11.1976ZM10.1473 9.25835C8.78081 9.34427 7.65163 8.21918 7.74164 6.85271C7.81119 5.72353 8.72763 4.81118 9.85681 4.73754C11.2233 4.65162 12.3525 5.77671 12.2625 7.14318C12.1888 8.27646 11.2724 9.1888 10.1473 9.25835Z"
                            fill="#828282"
                          />
                        </g>
                        <line
                          y1="-0.5"
                          x2="19.799"
                          y2="-0.5"
                          transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 3 14)"
                          stroke="#828282"
                        />
                        <defs>
                          <clipPath id="clip0_3191_33694">
                            <rect
                              width="20"
                              height="12"
                              fill="white"
                              transform="translate(0 1)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    ) : (
                      <svg
                        width="20"
                        height="17"
                        viewBox="0 0 20 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 0.0390625C6.17879 0.0390625 2.71351 2.12968 0.15649 5.52541C-0.0521632 5.80361 -0.0521632 6.19228 0.15649 6.47048C2.71351 9.8703 6.17879 11.9609 10 11.9609C13.8212 11.9609 17.2865 9.8703 19.8435 6.47457C20.0522 6.19637 20.0522 5.8077 19.8435 5.5295C17.2865 2.12968 13.8212 0.0390625 10 0.0390625ZM10.2741 10.1976C7.73755 10.3572 5.64284 8.26653 5.80239 5.72588C5.93331 3.63117 7.63118 1.9333 9.72589 1.80238C12.2625 1.64283 14.3572 3.73345 14.1976 6.2741C14.0626 8.36472 12.3647 10.0626 10.2741 10.1976ZM10.1473 8.25835C8.78081 8.34427 7.65163 7.21918 7.74164 5.85271C7.81119 4.72353 8.72763 3.81118 9.85681 3.73754C11.2233 3.65162 12.3525 4.77671 12.2625 6.14318C12.1888 7.27646 11.2724 8.1888 10.1473 8.25835Z"
                          fill="#828282"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <h2 className="text-lg font-bold">Confirm Password*</h2>
                </div>
                <div className="relative">
                  <input
                    type={showHidePass2 ? "text" : "password"}
                    placeholder="Enter Confirm Password"
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                    className="border border-[#9B9A9A4D] outline-primary text-lg font-normal rounded-xl w-full mt-5 px-3 py-3"
                  />
                  <div
                    onClick={showConfirmPass}
                    className="absolute right-3 top-[55%] cursor-pointer"
                  >
                    {showHidePass2 ? (
                      <svg
                        width="20"
                        height="15"
                        viewBox="0 0 20 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_3191_33694)">
                          <path
                            d="M10 1.03906C6.17879 1.03906 2.71351 3.12968 0.15649 6.52541C-0.0521632 6.80361 -0.0521632 7.19228 0.15649 7.47048C2.71351 10.8703 6.17879 12.9609 10 12.9609C13.8212 12.9609 17.2865 10.8703 19.8435 7.47457C20.0522 7.19637 20.0522 6.8077 19.8435 6.5295C17.2865 3.12968 13.8212 1.03906 10 1.03906ZM10.2741 11.1976C7.73755 11.3572 5.64284 9.26653 5.80239 6.72588C5.93331 4.63117 7.63118 2.9333 9.72589 2.80238C12.2625 2.64283 14.3572 4.73345 14.1976 7.2741C14.0626 9.36472 12.3647 11.0626 10.2741 11.1976ZM10.1473 9.25835C8.78081 9.34427 7.65163 8.21918 7.74164 6.85271C7.81119 5.72353 8.72763 4.81118 9.85681 4.73754C11.2233 4.65162 12.3525 5.77671 12.2625 7.14318C12.1888 8.27646 11.2724 9.1888 10.1473 9.25835Z"
                            fill="#828282"
                          />
                        </g>
                        <line
                          y1="-0.5"
                          x2="19.799"
                          y2="-0.5"
                          transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 3 14)"
                          stroke="#828282"
                        />
                        <defs>
                          <clipPath id="clip0_3191_33694">
                            <rect
                              width="20"
                              height="12"
                              fill="white"
                              transform="translate(0 1)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    ) : (
                      <svg
                        width="20"
                        height="17"
                        viewBox="0 0 20 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 0.0390625C6.17879 0.0390625 2.71351 2.12968 0.15649 5.52541C-0.0521632 5.80361 -0.0521632 6.19228 0.15649 6.47048C2.71351 9.8703 6.17879 11.9609 10 11.9609C13.8212 11.9609 17.2865 9.8703 19.8435 6.47457C20.0522 6.19637 20.0522 5.8077 19.8435 5.5295C17.2865 2.12968 13.8212 0.0390625 10 0.0390625ZM10.2741 10.1976C7.73755 10.3572 5.64284 8.26653 5.80239 5.72588C5.93331 3.63117 7.63118 1.9333 9.72589 1.80238C12.2625 1.64283 14.3572 3.73345 14.1976 6.2741C14.0626 8.36472 12.3647 10.0626 10.2741 10.1976ZM10.1473 8.25835C8.78081 8.34427 7.65163 7.21918 7.74164 5.85271C7.81119 4.72353 8.72763 3.81118 9.85681 3.73754C11.2233 3.65162 12.3525 4.77671 12.2625 6.14318C12.1888 7.27646 11.2724 8.1888 10.1473 8.25835Z"
                          fill="#828282"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {error && <p className="text-red-500 mt-4">{error}</p>}
            <div className="mt-[30px] flex justify-end gap-3">
              <Link href="/members-only-content/Dashboard/profile">
                <button className="px-[30px] py-[9px] transition-all font-[700] duration-200  p-[9px]  w-full xs:w-[132px]  rounded-lg  border text-primary hover:bg-primary border-primary hover:text-white">
                  Cancel
                </button>
              </Link>

             <span onClick={handleSave}>
             <LoadingButton
                disabledProp={() => {}}
                style="hover:bg-primary  transition-all font-[700] duration-200 text-black p-[9px]  w-full xs:w-[132px]  rounded-lg text-primary border border-primary hover:text-white "
                text="Save Changes"
                spinnerWidth="23"
                spinnerHeight="23"
                loading={isLoading}
              />
             </span>

              {/* <button
                className="py-[10px] px-6 rounded-lg bg-primary text-white"
                onClick={handleSave}
              >
                Save Changes
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
