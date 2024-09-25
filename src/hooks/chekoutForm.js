"use client";
import { useEffect, useState } from "react";
import LoadingButton from "@/components/loadingButton/page";
import {
  useStripe,
  useElements,
  PaymentElement,
 
} from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";

const CheckoutForm = ({ data, returnUrl, loadingText = "Processing..." }) => {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const [isloading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    setIsLoading(true);
    setErrorMessage("");

    try {
      const result = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: returnUrl || window.location.href, // Fallback to current URL if none provided
        },
        redirect: "if_required",
      });

      if (result.error) {
        setErrorMessage(result.error.message);
      } else if (result.paymentIntent?.status === "succeeded") {
        localStorage.setItem(
          "Payment_Data",
          JSON.stringify(result)
        );
        const payment_success = result.paymentIntent.id;
        router.push(`/payment/${payment_success}`);
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

  return (
    <form onSubmit={handleSubmit}>
     
      <PaymentElement />
      {errorMessage && (
        <p className="error-message text-red-500">{errorMessage}</p>
      )}
      <span className="flex justify-center my-5">
        <LoadingButton
          disabledProp={!stripe || isloading}
          style="hover:bg-primary w-full transition-all font-bold duration-200 text-black py-2 xs:w-[132px] rounded-3xl text-primary border border-primary hover:text-white"
          text={isloading ? loadingText : "Pay Now"}
          spinnerWidth="23"
          spinnerHeight="23"
          loading={isloading}
        />
      </span>
    </form>
  );
};

export default CheckoutForm;
