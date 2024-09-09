"use client";

import { STATE } from "@/components/constants/constants";
import Container from "@/components/container/page";
import SearchDropdown from "@/components/SearchDropDown/searchDrop";
import { loadStripe } from "@stripe/stripe-js";
import { useSession } from "next-auth/react";
import React, { useEffect, useRef, useState } from "react";

let stripePromise = null;

const getStripe = () => {
  console.log(process.env.NEXT_PUBLIC_API_KEY);
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_API_KEY);
  }
  return stripePromise;
};

export async function CheckIn({ lineItems }) {
  console.log(lineItems);
  const stripe = await getStripe();
  if (!stripe) {
    console.error("Stripe has not been loaded.");
    return;
  }

  await stripe.redirectToCheckout({
    mode: "payment",
    lineItems,
    successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
    cancelUrl: window.location.origin,
  });
}

// ----------------------------------------------------------------------

const Page = () => {
  const { data: session, status } = useSession();
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    organization: "",
    title: "",
    email: "",
    address: "",
    state: "",
    city: "",
    zipCode: "",
    businessPhone: "",
    mobilePhone: "",
    date: "",
    volunteer: "",
  });

  const [errors, setErrors] = useState({});
  const Fields = [
    {
      label: "First Name*",
      name: "firstName",
      type: "text",
      placeholder: "Enter Your First Name",
    },
    {
      label: "Last Name*",
      name: "lastName",
      type: "text",
      placeholder: "Enter Your Last Name",
    },
    {
      label: "Organization*",
      name: "organization",
      type: "text",
      placeholder: "Enter Your Organization Name",
    },
    {
      label: "Title*",
      name: "title",
      type: "text",
      placeholder: "Enter Your Title Name",
    },
    {
      label: "Email*",
      name: "email",
      type: "email",
      placeholder: "info@theserma.org",
    },
    {
      label: "Address*",
      name: "address",
      type: "text",
      placeholder: "Enter Your Address",
    },
    {
      label: "City",
      name: "city",
      type: "text",
      placeholder: "Enter Your City",
    },
    {
      label: "Zip Code",
      name: "zipCode",
      type: "number",
      placeholder: "Enter Your Zip Code",
    },
    {
      label: "Mobile Phone*",
      name: "mobilePhone",
      type: "number",
      placeholder: "Enter Your Mobile Phone",
    },
    {
      label: "Business Phone",
      name: "businessPhone",
      type: "number",
      placeholder: "Enter Business Phone",
    },
    { label: "Date", name: "date", type: "date", placeholder: "Select Date" },
    {
      label: "Password*",
      name: "Password",
      type: isVisible ? "text" : "password",
      placeholder: "Enter Password",
    },
    {
      label: "Confirm Password*",
      name: "ConfirmPassword",
      type: isVisible ? "text" : "password",
      placeholder: "Enter Confirm Password",
    },
  ];

  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!formData.firstName.trim()) errors.firstName = "First Name is required";
    if (!formData.lastName.trim()) errors.lastName = "Last Name is required";
    if (!formData.organization.trim())
      errors.organization = "Organization is required";
    if (!formData.title.trim()) errors.title = "Title is required";
    if (!formData.email.trim() || !emailRegex.test(formData.email))
      errors.email = "A valid Email is required";
    if (!formData.address.trim()) errors.address = "Address is required";
    if (!formData.mobilePhone.trim() || !phoneRegex.test(formData.mobilePhone))
      errors.mobilePhone = "A valid Phone number is required";
    if (
      formData.zipCode &&
      (formData.zipCode.length < 5 || formData.zipCode.length > 10)
    )
      errors.zipCode = "Zip Code must be between 5 and 10 digits";

    return errors;
  };

  const handleCheckout = async () => {
    try {
      await CheckIn({ lineItems: [{ price: "132", quantity: 1 }] });
    } catch (error) {
      console.error("Failed to redirect to checkout:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log(formData);
      // proceed with form submission or other actions
    }
  };

  return (
    <Container>
      <div className="mt-8 text-[#333333]">
        <div className="mb-7">
          <h2 className="heading-2 font-bold">Membership Application</h2>
          <div className="mt-10 flex justify-center">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-6 gap-5">
                {Fields.map((field) => (
                  <div className="w-full lg:w-[436px]" key={field.name}>
                    <h2 className="font-bold text-lg">{field.label}</h2>
                    <div className="mt-4">
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        className="outline-primary w-full border placeholder:text-[#939393] placeholder:text-base text-lg pl-5 py-[10px] rounded-[10px] border-[#D7D7D7] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      />
                      {errors[field.name] && (
                        <p className="text-red-500 text-sm mt-2">
                          {errors[field.name]}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
                <div className="w-full lg:w-[436px]">
                  <h2 className="font-bold text-lg">State*</h2>
                  <div className="mt-4">
                    <SearchDropdown
                      disable={false}
                      dropDownWidth={"full"}
                      optionList={STATE}
                      initial_value={formData.state}
                      placeholderProp={"Search State"}
                      OnSelectOptionProp={(value) => {
                        setFormData({ ...formData, state: value });
                      }}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-[436px]">
                  <h2 className="font-bold text-lg">Volunteer</h2>
                  <div className="mt-4 flex gap-4">
                    <div className="flex gap-2 items-center">
                      <input
                        type="radio"
                        name="volunteer"
                        value="yes"
                        checked={formData.volunteer === "yes"}
                        onChange={handleChange}
                        className="w-4 h-4 flex items-center accent-primary"
                      />
                      <p className="text-[18px] font-normal">Yes</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <input
                        type="radio"
                        name="volunteer"
                        value="no"
                        checked={formData.volunteer === "no"}
                        onChange={handleChange}
                        className="w-4 h-4 flex items-center accent-primary"
                      />
                      <p className="text-[18px] font-normal">No</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[60px] flex justify-between">
                <button
                  type="button"
                  className="border text-lg font-medium text-[#C42C2D] border-[#C8C8C8] rounded-full px-8 py-3"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCheckout}
                  type="submit"
                  className="border flex items-center gap-2 text-lg font-medium bg-[#C42C2D] text-white rounded-full px-8 py-3"
                >
                  Next
                  <svg
                    width="20"
                    height="9"
                    viewBox="0 0 20 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 4L0.5 4L0.5 5L1 5L1 4ZM19.3536 4.85356C19.5488 4.6583 19.5488 4.34171 19.3536 4.14645L16.1716 0.964469C15.9763 0.769207 15.6597 0.769207 15.4645 0.964469C15.2692 1.15973 15.2692 1.47631 15.4645 1.67157L18.2929 4.5L15.4645 7.32843C15.2692 7.52369 15.2692 7.84027 15.4645 8.03553C15.6597 8.2308 15.9763 8.2308 16.1716 8.03553L19.3536 4.85356ZM1 5L19 5L19 4L1 4L1 5Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Page;
