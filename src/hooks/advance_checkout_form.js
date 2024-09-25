"use client";
import { useEffect, useState } from "react";
import LoadingButton from "@/components/loadingButton/page";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";
import CustomAlert from "@/components/alert/page";
import axios from "axios";

const AdvanceCheckoutForm = ({
  data,
  returnUrl,
  loadingText = "Processing...",
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [PaymentId, setPaymentId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({});
  const [eventsDetails, setEventsDetails] = useState({});
  const [alertDetails, setAlertDetails] = useState({
    isOpen: false,
    message: "",
    duration: 3000,
    position: "bottom",
    type: "success",
  });

  useEffect(() => {
    const form_data = localStorage.getItem("form_data_event_details");
    const event_details = localStorage.getItem("ticket_details");
    if (form_data) {
      setFormData(JSON.parse(form_data));
    }
    if (event_details) {
      setEventsDetails(JSON.parse(event_details));
    }
  }, []);
  console.log(formData);
  console.log(eventsDetails?.event_id);
  const handleCallEventRegisterApi = async (sucessPaymentId) => {
    const API_URL = `${
      process.env.NEXT_PUBLIC_APP_NEXTAUTH_URL
    }/event_registration/create/${eventsDetails && eventsDetails?.event_id}`;
    console.log(sucessPaymentId);
    if (sucessPaymentId) {
      const body = {
        first_name: formData.first_name,
        last_name: formData.last_name,
        organization: formData.organization,
        title: formData.title,
        email: formData.email,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        zip_code: formData.zip_code,
        business_phone: formData.business_phone,
        mobile_number: formData.mobile_number,
        registration_date: formData.registration_date,
        interested: formData.interested,
        payment_id: sucessPaymentId,
        event_slot_id: eventsDetails && eventsDetails?.event_slot,
        ticket_registration: formData.ticket_registration,
      };

      try {
        const response = await axios.post(API_URL, body, {});

        setAlertDetails({
          isOpen: true,
          message: response?.data?.message || "Event registered successfully",
          duration: 3000,
          position: "top",
          type: "success",
        });
        //need to delete local storage *****
      } catch (error) {
        console.log(error);
        setAlertDetails({
          isOpen: true,
          message: error?.response?.data?.message || "Failed to register event",
          duration: 3000,
          position: "top",
          type: "danger",
        });
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    setIsLoading(true);
    setErrorMessage("");

    try {
      const result = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: returnUrl || window.location.href,
        },
        redirect: "if_required",
      });

      if (result.error) {
        setErrorMessage(result.error.message);
      } else if (result.paymentIntent?.status === "succeeded") {
        setPaymentId(result.paymentIntent.id);
        localStorage.setItem(
          "advance_event_Payment_Data",
          JSON.stringify(result)
        );
        handleCallEventRegisterApi(result.paymentIntent.id);
      } else {
        console.log("Payment result:", result);
      }
    } catch (error) {
      console.error("Error during payment:", error);
      setErrorMessage("An error occurred during payment. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  console.log(PaymentId);
  return (
    <>
      {alertDetails.isOpen && (
        <CustomAlert
          message={alertDetails.message}
          duration={alertDetails.duration}
          onClose={() => setAlertDetails({ ...alertDetails, isOpen: false })}
          position={alertDetails.position}
          type={alertDetails.type}
        />
      )}
      <form onSubmit={handleSubmit}>
        <PaymentElement />
        {errorMessage && (
          <p className="error-message text-red-500">{errorMessage}</p>
        )}
        <span className="flex justify-center my-5">
          <LoadingButton
            disabledProp={!stripe || isLoading}
            style="hover:bg-primary w-full transition-all font-bold duration-200 text-black py-2 xs:w-[132px] rounded-3xl text-primary border border-primary hover:text-white"
            text={isLoading ? loadingText : "Pay Now"}
            spinnerWidth="23"
            spinnerHeight="23"
            loading={isLoading}
          />
        </span>
      </form>
    </>
  );
};

export default AdvanceCheckoutForm;
