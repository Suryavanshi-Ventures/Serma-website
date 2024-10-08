"use client";

import Button from "@/components/button/page";
import Modal from "@/components/common-modal/modal";
import Image from "next/image";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import useAxiosFetch from "@/hooks/axiosFetch";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import Skeleton from "@/components/skeleton/skeleton";
import AxiosPost from "@/hooks/axiosPost";
import axios from "axios";
import CustomAlert from "@/components/alert/page";
import ReadMoreLessWithout_html from "@/components/read_more_without_dang_html/page";

const MemberShip = () => {
  const [popUp, setPopUp] = useState(false);

  const [isSelectedCard, setIsSelectedCard] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const router = useRouter();
  const { data: session } = useSession();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const token = session?.user?.userToken;
  const [fullName, setFullName] = useState("");
  const [clientSecret, setClientSecret] = useState(null);
  const [AlertDetails, setAlertDetails] = useState({
    isOpen: false,
    message: "",
    duration: 3000,
    position: "bottom",
    type: "success",
  });
  const API_URL = `${process.env.NEXT_PUBLIC_APP_NEXTAUTH_URL}/membership/plan/find?limit=50`;
  const API_URL_POST = `${process.env.NEXT_PUBLIC_APP_NEXTAUTH_URL}/payment/payment-intent`;
  const Validation_Api = `${process.env.NEXT_PUBLIC_APP_NEXTAUTH_URL}/auth/pre_register`;
  const {
    data: apiData,
    loading: isLoading,
    error: apiError,
  } = useAxiosFetch(
    API_URL,
    { headers: { Authorization: `Bearer ${token}` } },
    token
  );
  const { data, loading, error, postData } = AxiosPost(API_URL_POST, token);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateFullName = (name) => name.trim().length > 0;
  const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);
  console.log(apiError);
  console.log(apiData);
  const handleInputChange = (setter, validator, field) => (e) => {
    const { value } = e.target;
    setter(value);
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [field]: !validator(value),
    }));
  };

  const BodyData = {
    planId: isSelectedCard && isSelectedCard?.id,
    name: fullName,
    email: email,
    mobile: phone,
  };

  const StripeData = {
    price: isSelectedCard && isSelectedCard?.price,
    title: isSelectedCard && isSelectedCard?.title,
    description: isSelectedCard && isSelectedCard?.description,
    planId: isSelectedCard && isSelectedCard?.id,
    name: fullName,
    email: email,
    mobile: phone,
  };

  const handleContinueClick = async () => {
    const isValid =
      validateEmail(email) &&
      validateFullName(fullName) &&
      validatePhone(phone);

    if (isValid) {
      const validation_data = {
        email: email,
        mobile_number: phone,
        membership_plan_id: isSelectedCard && String(isSelectedCard?.id),
      };

      try {
        const result_validation = await axios.post(
          Validation_Api,
          validation_data
        );

        if (result_validation.data.status === "success") {
          const result = await postData(BodyData);
          if (result && result?.paymentIntent?.client_secret) {
            const membership_form = result?.paymentIntent?.client_secret;
            localStorage.setItem(
              "selectedPlanData",
              JSON.stringify(StripeData)
            );
            router.push(
              `/membership/membership-application/${membership_form}`
            );
            setClientSecret(result.paymentIntent.client_secret);
            // setPopUpForPayment(true);
          }
        }
      } catch (error) {
        setAlertDetails({
          isOpen: true,
          message: error?.response?.data?.message || "failed to select plan",
          duration: 3000,
          position: "top",
          type: "danger",
        });
      }
    } else {
      setFormErrors({
        email: !validateEmail(email),
        fullName: !validateFullName(fullName),
        phone: !validatePhone(phone),
      });
    }
  };

  const handleOpenPopForEmail = () => {
    if (isSelectedCard?.id) {
      setPopUp(true);
    } else {
      alert("Please select a membership plan");
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
      <div>
        <div className="lg:mx-10 2xl:mx-20 mb-10">
          <div className="h-[400px] sm:max-h-[350px] max-w-[1351px] relative">
            <Image
              src="/pages/members-only-content/member-only.png"
              unoptimized
              width={100}
              height={100}
              className="w-full h-full object-cover sm:object-fill"
            />
            <div className="absolute top-0 flex flex-col justify-center items-center w-full h-full">
              <h2 className="heading-2 text-white">Membership Application</h2>
              <h2 className="text-sm sm:text-lg font-normal text-white">
                Select membership level
              </h2>
            </div>
          </div>

          <div className="mt-[50px] flex lg:flex-row flex-col items-center gap-10 lg:gap-[105px] lg:justify-between">
            {isLoading ? (
              <Skeleton item={3} style="h-[330px] w-[375px] rounded-3xl mb-3" />
            ) : apiData?.result.length === 0 ? (
              <div className="flex justify-center  w-full">
                <Image
                  src="/no-membership-found.png"
                  height={500}
                  width={550}
                  alt="no-membership-plan-image"
                />
              </div>
            ) : (
              <Swiper
                slidesPerView={3}
                spaceBetween={10}
                freeMode={true}
                pagination={{ clickable: true }}
                modules={[FreeMode]}
                className="mySwiper w-full "
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  280: {
                    slidesPerView: 1,
                  },
                  390: {
                    slidesPerView: 1,
                    spaceBetween: 5,
                  },
                  500: {
                    slidesPerView: 1.5,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                }}
              >
                {apiData?.result.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="p-3">
                      <div
                        onClick={() => setIsSelectedCard(item)}
                        className={`lg:p-5 w-[300px] relative bg-white sm:w-[375px] overflow-auto min-h-[400px] sm:h-[354px]  shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-[24px] pt-[24px] rounded-[20px] cursor-pointer ${
                          item.id === isSelectedCard?.id
                            ? "border-[#C42C2D] border-2"
                            : ""
                        }`}
                      >
                        <div className="flex justify-between">
                          <h2 className="max-w-[200px] sm:max-w-[300px] text-lg md:text-[24px] font-bold text-[#333333] leading-9">
                            {item.title} - ${item.price} (USD)
                          </h2>
                          {isSelectedCard?.id === item.id && (
                            <svg
                              className="mt-2"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M12 0C5.38346 0 0 5.38346 0 12C0 18.6165 5.38346 24 12 24C18.6165 24 24 18.6165 24 12C24 5.38346 18.6165 0 12 0ZM18.7068 8.84211L11.0376 16.4511C10.5865 16.9023 9.86466 16.9323 9.38346 16.4812L5.32331 12.782C4.84211 12.3308 4.81203 11.5789 5.23308 11.0977C5.68421 10.6165 6.43609 10.5865 6.91729 11.0376L10.1353 13.985L16.9925 7.12782C17.4737 6.64662 18.2256 6.64662 18.7068 7.12782C19.188 7.60902 19.188 8.3609 18.7068 8.84211Z"
                                fill="#C42C2D"
                              />
                            </svg>
                          )}
                        </div>

                        <div className=" flex items-center mt-4 ">
                          <span className="text-primary">
                            {" "}
                            Membership Registration: {"  "}{" "}
                            {console.log(item.active)}
                          </span>{" "}
                          <span
                            className={` p-1  px-2 rounded-full ml-2 font-semibold ${
                              item.active && item.active == true
                                ? "bg-green-100   text-green-700"
                                : "text-red-800 bg-red-100 "
                            }`}
                          >
                            {" "}
                            {item.active && item.active
                              ? "   Open"
                              : "   Close"}
                          </span>
                        </div>

                        <div className="max-w-[240px] mt-[24px]">
                          <p className="text-lg ">
                            <span className=""> Description :</span>{" "}
                            <span className="text-[#9B9A9A]">
                            <ReadMoreLessWithout_html
                          text={item.description}
                          maxLength={40}
                        />
                              {/* {item.description} */}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
          {formErrors.plan && (
            <p className="text-red-500 mt-2">{formErrors.plan}</p>
          )}
          {apiData?.result.length > 0 && (
            <div className="mt-[30px] flex justify-center">
              <span onClick={handleOpenPopForEmail} className="cursor-pointer">
                <Button content="Next" px="px-6" py="py-2" />
              </span>
            </div>
          )}
        </div>
        <Modal
          wantTocloseFromScreen={false}
          wantCrossButton={true}
          width="max-w-[600px]"
          isOpen={popUp}
          onClose={() => setPopUp(false)}
          className="custom-modal"
        >
          <div className="w-full px-5 md:px-16 text-center">
            <h2 className="text-2xl font-bold">Membership Application</h2>
            <div className="mt-[40px] grid grid-cols-1 gap-4">
              <input
                placeholder="Enter Your Full Name"
                className="pl-[30px] py-3 md:py-4 w-full outline-primary border border-[#D7D7D7] rounded-xl"
                value={fullName}
                onChange={handleInputChange(
                  setFullName,
                  validateFullName,
                  "fullName"
                )}
              />
              {formErrors.fullName && (
                <p className="text-red-500 text-start">
                  Please enter a valid name.
                </p>
              )}
              <input
                placeholder="Enter Your Email"
                className="pl-[30px] py-3 md:py-4 w-full outline-primary border border-[#D7D7D7] rounded-xl"
                value={email}
                onChange={handleInputChange(setEmail, validateEmail, "email")}
              />
              {formErrors.email && (
                <p className="text-red-500 text-start">
                  Please enter a valid email.
                </p>
              )}
              <input
                placeholder="Enter Your Phone Number"
                className="pl-[30px] py-3 md:py-4 w-full outline-primary border border-[#D7D7D7] rounded-xl [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                value={phone}
                type="number"
                onChange={handleInputChange(setPhone, validatePhone, "phone")}
              />
              {formErrors.phone && (
                <p className="text-red-500 text-start">
                  Please enter a valid 10-digit phone number.
                </p>
              )}
            </div>
            <div className="mt-8 flex justify-center ">
              <span onClick={handleContinueClick} className="cursor-pointer ">
                <Button content="Continue" px="px-8" py="py-3" />
              </span>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default MemberShip;
