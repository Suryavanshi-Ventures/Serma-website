"use client";
import React, { useState } from "react";
import Image from "next/image";
import Modal from "@/components/common-modal/modal";
import LoadingButton from "@/components/loadingButton/page";
import { useRouter } from "next/navigation";
const Membership = () => {
  const [email, setEmail] = useState("");
  const [forgetPassPop, setForgetPassPop] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [OpenOtpBox, setOpenOtpBox] = useState(false);
  const [setupPasswd, setSetupPasswd] = useState(false);
  const [isPassVisible, setisPassVisible] = useState(false);
  const [isPassVisible2, setisPassVisible2] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
const router = useRouter()
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setIsPasswordMatch(e.target.value === confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setIsPasswordMatch(e.target.value === password);
  };
  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };
  const handlePassVisible = () => {
    setisPassVisible(!isPassVisible);
  };
  const handlePassVisible2 = () => {
    setisPassVisible2(!isPassVisible2);
  };
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(email));
  };

  const handleGoToDashboard =()=>{
    router.push("/members-only-content/Dashboard/member-forum")
  }

  const handleResetPassword = () => {
    if (isEmailValid) {
      console.log("Email:", email);
      setOpenOtpBox(true);
    } else {
      console.error("Invalid email address");
    }
  };

  const handleOtpChange = (e, index) => {
    const { value } = e.target;
    if (/^[0-9]$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 3) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const isOtpComplete = otp.every((digit) => digit !== "");

  const handleOtpSubmit = () => {
    console.log("OTP Entered:", otp.join(""));
    // Handle OTP submission logic here
    setSetupPasswd(true);
  };

  const HandleForgetPass1 = () => {
    setForgetPassPop(true);
  };

  return (
    <div>
      <div className="xs:mx-5 lg:mx-10 2xl:mx-20">
        <div>
          <div className="h-[500px] xs:max-h-[350px] w-full xs:max-w-[1351px] relative">
            <Image
              src="/pages/members-only-content/member-only.png"
              unoptimized
              width={100}
              height={100}
              className="w-full h-full object-fill"
            />
            <div className="absolute top-0 flex justify-center pb-10 items-end xs:items-center w-full h-full">
              <h2 className="heading-2 font-bold text-white">
                Members Only Content
              </h2>
            </div>
          </div>
        </div>
        <div className="mt-[64px] mx-5">
          <div className="flex flex-col md:flex-row gap-9 items-start md:items-center">
            <div>
              <div>
                <h2 className="heading-2 font-bold">Welcome to SERMA!</h2>
              </div>
              <hr className="w-full my-8 border-[#9B9A9A66]" />
              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl font-bold">MEMBERS-ONLY CONTENT</h2>
                </div>
                <div>
                  <p className="text-gray text-xl font-normal">
                    Please take a moment to update your user profile so that you
                    can start interacting with other SERMA members.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-base">
                    Complete your member bio and upload your headshot
                  </p>
                </div>
              </div>
              <hr className="w-full mt-8 border-[#9B9A9A66]" />
            </div>
            <div className="flex justify-center w-full md:w-fit">
              <div className="h-[338px] xs:w-[344px] relative">
                <Image
                  src="/pages/members-only-content/member-only2.png"
                  unoptimized
                  width={100}
                  height={100}
                  className="w-full h-full object-fill"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[94px]">
          <div className="flex justify-center w-full">
            <div className="w-full sm:w-fit">
              <div className="">
                <h2 className="text-[30px] font-bold text-center">
                  Members-Only Sign In
                </h2>
              </div>
              <div className="mt-[57px] w-full px-5 md:px-0">
                <div className="flex sm:justify-center w-full h-fit sm:w-[620px] lg:w-[791px] md:h-[605px] z-50 bg-white rounded-[36px] shadow-xl shadow-[#00000014] drop-shadow-xl">
                  <div className="w-full px-4 md:px-[60px] py-[30px] md:py-16">
                    <div>
                      <div>
                        <h2 className="heading-2 font-normal text-black">
                          Sign in
                        </h2>
                      </div>
                      <hr className="w-full my-[30px]" />
                      <div className="space-y-4">
                        <div>
                          <h2 className="text-base">Enter Your Email</h2>
                        </div>
                        <div>
                          <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Email Address"
                            className="pl-4 sm:pl-[38px] py-3 sm:py-[20px] outline-none border border-[#B3B3B3] rounded-xl w-full"
                          />
                        </div>
                      </div>
                      <div className="space-y-4 mt-[14px]">
                        <div>
                          <h2>Enter Your Password</h2>
                        </div>
                        <div>
                          <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Password"
                            className="pl-4 sm:pl-[38px] py-3 sm:py-[20px] outline-none border border-[#B3B3B3] rounded-xl w-full"
                          />
                        </div>
                      </div>
                      <div className="flex justify-end  text-lg mt-[13px] text-[#C42C2D]">
                        <p
                          onClick={HandleForgetPass1}
                          className="cursor-pointer"
                        >
                          Forgot Password?
                        </p>
                      </div>
                      <div onClick={handleGoToDashboard} className="mt-[27px]">
                    
                        <LoadingButton
                disabledProp={() => {}}
                style="hover:bg-primary  transition-all  duration-200 text-black w-full text-sm xs:text-[22px] py-3 xs:py-[26px] rounded-lg text-white bg-[#C42C2D] "
                text="Sign In"
                spinnerWidth="23"
                spinnerHeight="23"
                loading={false}
              />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#03989E] flex justify-center items-center text-white h-[588px] -mt-20 -z-10">
        <div className="flex flex-col items-center text-center space-y-[50px]">
          <div>
            <h2 className="text-[30px] font-normal">
              Have additional questions? Email us below.
            </h2>
          </div>
          <div>
            <p className="text-[24px] font-bold max-w-[805px]">
              Please take a moment to update your user profile so that you can
              start interacting with other SERMA members.
            </p>
          </div>
          <div>
            <button className="flex gap-2.5 items-center px-7 py-3 border rounded-full">
              <p>Contact Team</p>
              <svg
                width="20"
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
            </button>
          </div>
        </div>
      </div>
      <Modal
        wantTocloseFromScreen={false}
        wantCrossButton={true}
        isOpen={forgetPassPop}
        onClose={() => setForgetPassPop(false)}
        className="custom-modal"
        width={"max-w-[500px]"}
      >
        <div>
          <h2 className="text-xl">Forgot Password?</h2>
          <div className="my-5">
            <hr className="text-[#B3B3B380]" />
          </div>
          <label>Email Address</label>
          <div>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter Your Email"
              className="border border-gray p-3 rounded-md my-5 w-full outline-primary"
            />
          </div>
          <span
            onClick={isEmailValid ? handleResetPassword : null}
            className="w-full flex justify-center"
          >
            <LoadingButton
              disabledProp={!isEmailValid}
              style={`hover:bg-primary my-5 transition-all font-[700] duration-200 text-black p-[9px] w-full rounded text-primary border border-primary hover:text-white ${
                !isEmailValid ? "cursor-not-allowed" : ""
              }`}
              text="Reset Password"
              spinnerWidth="23"
              spinnerHeight="23"
              loading={false}
            />
          </span>
        </div>
      </Modal>
      <Modal
        wantTocloseFromScreen={false}
        wantCrossButton={true}
        isOpen={OpenOtpBox}
        onClose={() => setOpenOtpBox(false)}
        className="custom-modal"
        width={"max-w-[500px]"}
      >
        <div>
          <h2 className="text-xl">Password Reset?</h2>
          <div className="my-5 text-sm text-gray">
            We Sent a code to Demo@gmail.com
          </div>
          <div className="my-5">
            <hr className="text-[#B3B3B380]" />
          </div>
          <div className="flex justify-center gap-5">
            {otp.map((_, index) => (
              <input
                key={index}
                id={`otp-input-${index}`}
                type="text"
                value={otp[index]}
                onChange={(e) => handleOtpChange(e, index)}
                maxLength="1"
                className="border border-gray   rounded-md my-5 w-[50px] py-3 text-center outline-primary"
              />
            ))}
          </div>
          <span
            onClick={isOtpComplete ? handleOtpSubmit : null}
            className="w-full flex justify-center"
          >
            <LoadingButton
              style={`hover:bg-primary my-5 transition-all font-[700] duration-200 text-black p-[9px] w-full rounded text-primary border border-primary hover:text-white ${
                !isOtpComplete ? "cursor-not-allowed" : ""
              }`}
              text="Reset Password"
              spinnerWidth="23"
              spinnerHeight="23"
              loading={false}
            />
          </span>
          <div className="flex justify-center items-center gap-2">
            <svg
              width="22"
              height="8"
              viewBox="0 0 22 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 3.5L21.5 3.5L21.5 4.5L21 4.5L21 3.5ZM0.646446 4.35356C0.451183 4.1583 0.451183 3.84171 0.646446 3.64645L3.82843 0.46447C4.02369 0.269207 4.34027 0.269207 4.53553 0.46447C4.73079 0.659732 4.73079 0.976314 4.53553 1.17158L1.70711 4L4.53553 6.82843C4.7308 7.02369 4.7308 7.34028 4.53553 7.53554C4.34027 7.7308 4.02369 7.7308 3.82843 7.53554L0.646446 4.35356ZM21 4.5L1 4.5L1 3.5L21 3.5L21 4.5Z"
                fill="#333333"
              />
            </svg>

            <div className="text-xs font-semibold">Back to log in</div>
          </div>
        </div>
      </Modal>
      <Modal
        wantTocloseFromScreen={false}
        wantCrossButton={true}
        isOpen={setupPasswd}
        onClose={() => setSetupPasswd(false)}
        className="custom-modal"
        width={"max-w-[500px]"}
      >
        <div>
          <h2 className="text-xl">Set new Password?</h2>
          <div className="my-5 text-xs text-gray">
            Must Be at least 8 Characters.
          </div>
          <div className="my-5">
            <hr className="text-[#B3B3B380]" />
          </div>
          <label>Password</label>
          <div className="my-3 relative">
            <input
              type={isPassVisible ? "text" : "password"}
              name="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter Password"
              className="border border-gray p-3 rounded-md w-full outline-primary"
            />
            <span
              onClick={handlePassVisible}
              className="absolute right-2 top-5 cursor-pointer"
            >
              <svg
                width="18"
                height="12"
                viewBox="0 0 24 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0.84668C7.41454 0.84668 3.25621 3.35543 0.187788 7.43029C-0.0625959 7.76414 -0.0625959 8.23054 0.187788 8.56438C3.25621 12.6442 7.41454 15.1529 12 15.1529C16.5855 15.1529 20.7438 12.6442 23.8122 8.56929C24.0626 8.23545 24.0626 7.76905 23.8122 7.4352C20.7438 3.35543 16.5855 0.84668 12 0.84668ZM12.3289 13.0369C9.28506 13.2284 6.7714 10.7196 6.96287 7.67086C7.11998 5.1572 9.15741 3.11977 11.6711 2.96267C14.7149 2.7712 17.2286 5.27994 17.0371 8.32873C16.8751 10.8375 14.8377 12.8749 12.3289 13.0369ZM12.1767 10.7098C10.537 10.8129 9.18196 9.46282 9.28997 7.82305C9.37343 6.46804 10.4732 5.37322 11.8282 5.28485C13.4679 5.18175 14.823 6.53186 14.7149 8.17163C14.6266 9.53155 13.5268 10.6264 12.1767 10.7098Z"
                  fill="#9B9A9A"
                />
              </svg>
            </span>
          </div>
          <label>Confirm Password</label>
          <div className="my-3 relative">
            <input
              type={isPassVisible2 ? "text" : "password"}
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              placeholder="Confirm Password"
              className="border border-gray p-3 rounded-md w-full outline-primary"
            />
            <span
              onClick={handlePassVisible2}
              className="absolute right-2 top-5 cursor-pointer"
            >
              <svg
                width="18"
                height="12"
                viewBox="0 0 24 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0.84668C7.41454 0.84668 3.25621 3.35543 0.187788 7.43029C-0.0625959 7.76414 -0.0625959 8.23054 0.187788 8.56438C3.25621 12.6442 7.41454 15.1529 12 15.1529C16.5855 15.1529 20.7438 12.6442 23.8122 8.56929C24.0626 8.23545 24.0626 7.76905 23.8122 7.4352C20.7438 3.35543 16.5855 0.84668 12 0.84668ZM12.3289 13.0369C9.28506 13.2284 6.7714 10.7196 6.96287 7.67086C7.11998 5.1572 9.15741 3.11977 11.6711 2.96267C14.7149 2.7712 17.2286 5.27994 17.0371 8.32873C16.8751 10.8375 14.8377 12.8749 12.3289 13.0369ZM12.1767 10.7098C10.537 10.8129 9.18196 9.46282 9.28997 7.82305C9.37343 6.46804 10.4732 5.37322 11.8282 5.28485C13.4679 5.18175 14.823 6.53186 14.7149 8.17163C14.6266 9.53155 13.5268 10.6264 12.1767 10.7098Z"
                  fill="#9B9A9A"
                />
              </svg>
            </span>
          </div>
          {!isPasswordMatch && (
            <div className="text-red-500 text-xs">Passwords do not match.</div>
          )}
          <span className="w-full flex justify-center">
            <LoadingButton
              disabledProp={!isEmailValid || !isPasswordMatch}
              style={`hover:bg-primary my-5 transition-all font-[700] duration-200 text-black p-[9px] w-full rounded text-primary border border-primary hover:text-white ${
                !isEmailValid || !isPasswordMatch ? "cursor-not-allowed" : ""
              }`}
              text="Reset Password"
              spinnerWidth="23"
              spinnerHeight="23"
              loading={false}
            />
          </span>
        </div>
      </Modal>
    </div>
  );
};

export default Membership;
