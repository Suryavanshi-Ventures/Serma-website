"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import AxiosPost from "@/hooks/axiosPost";
import Image from "next/image";
import Container from "@/components/container/page";
import Skeleton from "@/components/skeleton/skeleton";
import LoadingButton from "@/components/loadingButton/page";
import CustomAlert from "@/components/alert/page";
import { useRouter } from "next/navigation";
import axios from "axios";

const PymentSucess = () => {
  const { payment_success: clientSecret } = useParams();
  const API_URL_POST = `${process.env.NEXT_PUBLIC_APP_NEXTAUTH_URL}/auth/register`;
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [paymentData, setPaymentData] = useState(null);
  const [planData, setPlanData] = useState(null);
  const [AlertDetails, setAlertDetails] = useState({
    isOpen: false,
    message: "",
    duration: 3000,
    position: "bottom",
    type: "success",
  });

  const hitRegisterApi = async () => {
    const BodyData = {
      first_name: userData?.firstName,
      last_name: userData?.lastName,
      email: userData?.email,
      // email: "hfasf123@gmail.com",
      organization: userData?.organization,
      title: userData?.title,
      address: userData?.address,
      city: userData?.city,
      state: userData?.state,
      zip_code: userData?.zipCode,
      business_phone: userData?.businessPhone,
      mobile_number: userData?.mobilePhone,
      registration_date: userData?.date,
      interested: userData?.volunteer,
      password: userData?.password,
      membership_plan_id: 3,
      payment_id: clientSecret,
      payment_status:
        paymentData?.paymentIntent?.status === "succeeded"
          ? "success"
          : paymentData?.paymentIntent?.status === "processing"
          ? "pending"
          : paymentData?.paymentIntent?.status === "requires_payment_method"
          ? "fail"
          : paymentData?.paymentIntent?.status === "requires_action"
          ? "pending"
          : paymentData?.paymentIntent?.status === "requires_confirmation"
          ? "pending"
          : paymentData?.paymentIntent?.status === "canceled"
          ? "fail"
          : paymentData?.paymentIntent?.status === "requires_capture"
          ? "pending"
          : "fail",
      time_zone: userData?.time_zone,
    };
    console.log(BodyData);
    try {
      const response = await axios.post(API_URL_POST, BodyData, {});
      console.log("API Response:", response.data);
      console.log(response.data.status);
      console.log(response.status);
      if (response.data.status === "success") {
        setAlertDetails({
          isOpen: true,
          message: "Plan Purchased Successfully",
          duration: 3000,
          position: "top",
          type: "success",
        });
      }
    } catch (error) {
      console.log(error?.response?.data?.message);
      setAlertDetails({
        isOpen: true,
        message: error?.response?.data?.message || "Failed to Purchase Plan",
        duration: 5000,
        position: "top",
        type: "danger",
      });
      console.error("Error making API call:", error);
    }
  };

  useEffect(() => {
    const storedData = {
      userData: JSON.parse(localStorage.getItem("Formdata")),
      paymentData: JSON.parse(localStorage.getItem("Payment_Data")),
      planData: JSON.parse(localStorage.getItem("selectedPlanData")),
    };
    setUserData(storedData.userData);
    setPaymentData(storedData.paymentData);
    setPlanData(storedData.planData);
  }, [clientSecret]);

  useEffect(() => {
    if (userData && paymentData && planData) {
      hitRegisterApi();
    }
  }, [userData, paymentData, planData]);

  const handleClick = () => {
    localStorage.removeItem("Formdata");
    localStorage.removeItem("Payment_Data");
    localStorage.removeItem("selectedPlanData");
    router.push("/members-only-content");
  };

  const paymentDetails = [
    { label: "Membership Plan", value: planData?.title },
    {
      label: "Payment Type",
      value: paymentData?.paymentIntent?.payment_method_types,
    },
    {
      label: "Amount Paid",
      value: `$${paymentData?.paymentIntent?.amount} (USD)`,
    },
    { label: "Name", value: `${userData?.firstName} ${userData?.lastName}` },
    { label: "Email", value: userData?.email },
  ];

  return (
    <Container>
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
      <div className="flex justify-center my-10 ">
        <div>
          <h1 className="text-center font-bold text-xl">Payment successful</h1>
          <div className="flex justify-center">
            <Image
              src="/payment-success/success.gif"
              alt="payment-success image"
              height={200}
              width={200}
            />
          </div>
          {paymentData && planData && userData ? (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-7 ">
                {paymentDetails.map((detail, index) => (
                  <React.Fragment key={index}>
                    <div className="font-bold">{detail.label}</div>
                    <div className="ml-10">{detail.value}</div>
                  </React.Fragment>
                ))}
              </div>
              <div>
                <span
                  onClick={handleClick}
                  className=" flex justify-center my-5 "
                >
                  <LoadingButton
                    disabledProp={false}
                    style="hover:bg-primary w-full transition-all font-bold duration-200 text-black py-2  rounded-3xl text-primary border border-primary hover:text-white"
                    text={"Let's Go For Sign in"}
                    spinnerWidth="23"
                    spinnerHeight="23"
                    loading={false}
                  />
                </span>
              </div>
            </div>
          ) : (
            <Skeleton
              item={3}
              style="h-[20px] w-full  rounded-3xl mb-5 grid grid-cols-2"
            />
          )}
        </div>
      </div>
    </Container>
  );
};

export default PymentSucess;
