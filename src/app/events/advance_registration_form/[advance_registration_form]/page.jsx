// components/AdvanceRegistrationForm.js
"use client";
import CustomAlert from "@/components/alert/page";
import Button from "@/components/button/page";
import Modal from "@/components/common-modal/modal";
import { STATE } from "@/components/constants/constants";
import LoadingButton from "@/components/loadingButton/page";
import SearchDropdown from "@/components/SearchDropDown/searchDrop";
import CheckoutForm from "@/hooks/chekoutForm";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState } from "react";
import AdvanceCheckoutForm from "@/hooks/advance_checkout_form";

const AdvanceRegistrationForm = ({ params }) => {
  const [details, setDetails] = useState({});
  const [paymentIntent, setPaymentIntent] = useState({});
  const [stripe, setStripe] = useState(null);
  const [popUpForPayment, setPopUpForPayment] = useState(false);

  useState(() => {
    const storedDetails = localStorage.getItem("ticket_details");
    if (storedDetails) {
      setDetails(JSON.parse(storedDetails));
    }
  }, []);

  const eventId = params.advance_registration_form;

  const API_URL_PAYMENT_INTENT = `${process.env.NEXT_PUBLIC_APP_NEXTAUTH_URL}/event_registration/pre-check/${eventId}`;
  const API_URL = `${process.env.NEXT_PUBLIC_APP_NEXTAUTH_URL}/event_registration/create/${eventId}`;

  // Form state initialization
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    organization: "",
    title: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip_code: "",
    business_phone: "",
    mobile_number: "",
    registration_date: "",
    volunteer: "",
  });
  const [errors, setErrors] = useState({});
  const [alertDetails, setAlertDetails] = useState({
    isOpen: false,
    message: "",
    duration: 3000,
    position: "bottom",
    type: "success",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const required_fields =
    details.require_field &&
    details.require_field?.filter((data) =>
      data.required === true ? data.name : null
    );
  // const required_fields_names = required_fields && required_fields.map((data) => data.name);
  const required_fields_names =
    required_fields &&
    required_fields
      .map((data) => data.name)
      .filter((field) => Object.keys(formData).includes(field));

  const validate = () => {
    const newErrors = {};
    const requiredFields = required_fields_names || [
      "first_name",
      "last_name",
      "organization",
      "title",
      "email",
      "address",
      "state",
      "city",
      "zip_code",
      "business_phone",
      "mobile_number",
      "registration_date",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field]) newErrors[field] = `${field} is required`;
    });

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (formData.business_phone && !/^\d{10}$/.test(formData.business_phone)) {
      newErrors.business_phone = "Business phone must be exactly 10 digits";
    }

    if (formData.mobile_number && !/^\d{10}$/.test(formData.mobile_number)) {
      newErrors.mobile_number = "Mobile phone must be 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) {
      return;
    }

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
      interested: formData.volunteer === "yes",
      //   event_slot_id: details && details.event_slot,
      ticket_registration: [
        {
          ticket_id: details && details.ticket_id,
          quantity: details && details.quantity,
        },
      ],
    };

    try {
      const response = await axios.post(API_URL_PAYMENT_INTENT, body, {});
      if (response.status === 200) {
        localStorage.setItem("form_data_event_details", JSON.stringify(body));
        setPaymentIntent(response.data.data);
        const stripe = await loadStripe(
          `${process.env.NEXT_PUBLIC_STRIPE_PK_KEY}`
        );
        setStripe(stripe);
        setPopUpForPayment(true);
      }
    } catch (error) {
      setAlertDetails({
        isOpen: true,
        message: error.response?.data?.message || "failed to register",
        duration: 3000,
        position: "top",
        type: "danger",
      });
      localStorage.removeItem("form_data_event_details");
      console.log(error, "Payment intent error");
    }
  };
 
  
  // Reusable function to render input fields
  const renderInputField = (
    label,
    name,
    type = "text",
    placeholder = "",
    required = false
  ) => (
    <div>
      <label className="block font-bold text-[#333333] mb-2">
        {label}
        {required && "*"}
      </label>
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        className="mt-1 block w-full border border-[#D7D7D7] outline-primary rounded-md p-2"
        placeholder={placeholder}
        required={required}
      />
      {errors[name] && <p className="text-red-500">{errors[name]}</p>}
    </div>
  );

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

      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg">
        <h2 className="text-2xl font-bold text-[#333333] mb-16">
          Enter Registration Form
        </h2>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-5 w-full">
            {renderInputField(
              "First name",
              "first_name",
              "text",
              "Enter Your First Name",
              true
            )}
            {renderInputField(
              "Last name",
              "last_name",
              "text",
              "Enter Your Last Name",
              true
            )}
            {renderInputField(
              "Organization",
              "organization",
              "text",
              "Enter Your organization Name",
              true
            )}
            {renderInputField(
              "Title",
              "title",
              "text",
              "Enter Your Title",
              true
            )}
            {renderInputField(
              "Email",
              "email",
              "email",
              "Enter Your Email",
              true
            )}
            {renderInputField(
              "Address",
              "address",
              "text",
              "Enter Your Address",
              true
            )}
            {renderInputField("City", "city", "text", "Enter Your City", true)}
            <div>
              <label className="block font-bold text-[#333333] mb-2">
                State*
              </label>
              <SearchDropdown
                disable={false}
                dropDownWidth={"full"}
                optionList={STATE}
                initial_value={""}
                placeholderProp={"Search State"}
                OnSelectOptionProp={(value) =>
                  setFormData({ ...formData, state: value })
                }
              />
              {errors.state && <p className="text-red-500">{errors.state}</p>}
            </div>
            {renderInputField(
              "Zip Code",
              "zip_code",
              "text",
              "Enter Your Zip Code",
              true
            )}
            {renderInputField(
              "Business Phone",
              "business_phone",
              "tel",
              "Enter Your Business Phone",
              true
            )}
            {renderInputField(
              "Mobile Phone",
              "mobile_number",
              "tel",
              "Enter Your Mobile Phone"
            )}
            {renderInputField("Date", "registration_date", "date", "")}
          </div>

          <div className="mb-5">
            <label className="block text-gray-700">
              Are you interested in volunteering on a SERMA committee?
            </label>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio accent-primary"
                  name="volunteer"
                  value="yes"
                  onChange={handleChange}
                  checked={formData.volunteer === "yes"}
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  className="form-radio accent-primary"
                  name="volunteer"
                  value="no"
                  onChange={handleChange}
                  checked={formData.volunteer === "no"}
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span>
              <LoadingButton
                disabledProp={() => {}}
                style="hover:bg-primary transition-all font-[700] duration-200 text-black px-[20px] py-[8px] w-full xs:w-[132px] rounded-3xl text-primary border border-gray hover:text-white"
                text="Cancel"
                spinnerWidth="23"
                spinnerHeight="23"
                loading={false}
              />
            </span>
            <span onClick={handleSubmit}>
              <Button
                type="submit"
                content={"Register"}
                px={"px-6"}
                py={"py-2"}
                width={"full"}
              />
            </span>
          </div>
        </form>
      </div>
     
      <Modal
        wantTocloseFromScreen={false}
        wantCrossButton={true}
        width="max-w-[600px]"
        isOpen={popUpForPayment}
        onClose={() => setPopUpForPayment(false)}
        className="custom-modal"
      >
        <div className="flex justify-center my-5 text-xl font-semibold text-[#333333] gap-4">
          <div className=" ">{details?.event_name} </div>

          <div> -</div>
          {/* <div> ${StripeData?.price} (USD)</div> */}
          <div> ${details?.total_price} (USD)</div>
        </div>
        {stripe &&
          paymentIntent &&
          paymentIntent.paymentIntent &&
          paymentIntent.paymentIntent.client_secret && (
            <div className="space-y-7">
              <Elements
                stripe={stripe}
                options={{
                  clientSecret: paymentIntent.paymentIntent.client_secret,
                }}
              >
                <AdvanceCheckoutForm data={details} />
              </Elements>
            </div>
          )}
      </Modal>
    </>
  );
};

export default AdvanceRegistrationForm;
