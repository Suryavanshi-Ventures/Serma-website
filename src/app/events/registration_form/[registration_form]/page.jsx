// components/RegistrationForm.js
"use client";
import CustomAlert from "@/components/alert/page";
import Button from "@/components/button/page";
import { STATE } from "@/components/constants/constants";
import LoadingButton from "@/components/loadingButton/page";
import SearchDropdown from "@/components/SearchDropDown/searchDrop";
import axios from "axios";
import React, { useState } from "react";

const RegistrationForm = ({ params }) => {
  const eventId = params.registration_form;
  const API_URL = `${process.env.NEXT_PUBLIC_APP_NEXTAUTH_URL}/event_registration/create/${eventId}`;

  // Form state initialization
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    organization: "",
    title: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    businessPhone: "",
    mobilePhone: "",
    date: "",
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

  // Reusable function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form validation logic
  const validate = () => {
    const newErrors = {};
    const requiredFields = [
      "firstName",
      "lastName",
      "organization",
      "title",
      "email",
      "address",
      "state",
      "city",
      "zipCode",
      "businessPhone",
      "mobilePhone",
    ];

    // Check for empty required fields
    requiredFields.forEach((field) => {
      if (!formData[field]) newErrors[field] = `${field} is required`;
    });

    // Email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    // Business phone validation (exactly 10 digits)
    if (formData.businessPhone && !/^\d{10}$/.test(formData.businessPhone)) {
      newErrors.businessPhone = "Business phone must be exactly 10 digits";
    }

    // Mobile phone validation (exactly 10 digits)
    if (formData.mobilePhone && !/^\d{10}$/.test(formData.mobilePhone)) {
      newErrors.mobilePhone = "Mobile phone must be 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form submission handler
  const handleSubmit = async () => {
    if (!validate()) {
      console.log("Form data is invalid. Fix errors.");
      return;
    }

    const body = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      organization: formData.organization,
      title: formData.title,
      email: formData.email,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      zip_code: formData.zipCode,
      business_phone: formData.businessPhone,
      mobile_number: formData.mobilePhone,
      registration_date: formData.date,
      interested: formData.volunteer === "yes",
    };

    try {
      const response = await axios.post(API_URL, body, {
        // headers: {
        //   Authorization: `Bearer ${token}`, // Assuming token is available
        //   "Content-Type": "application/json",
        // },
      });

      setAlertDetails({
        isOpen: true,
        message: response?.data?.message || "Event registered successfully",
        duration: 3000,
        position: "top",
        type: "success",
      });
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
  };

  // Reusable function to render input fields
  const renderInputField = (
    label,
    name,
    type ,
    placeholder = "",
    required = false
  ) => (
    <div>
      <label className="block font-bold text-[#333333] mb-2">
        {console.log(name,"name")}
        {label}
        {required && "*"}
      </label>
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        className={`mt-1 block w-full border  border-[#D7D7D7] outline-primary rounded-md p-2  ${type === "number" ? "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" : ""}  `}
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
              "firstName",
              "text",
              "Enter Your First Name",
              true
            )}
            {renderInputField(
              "Last name",
              "lastName",
              "text",
              "Enter Your Last Name",
              true
            )}
            {renderInputField(
              "Organization",
              "organization",
              "text",
              "Enter Your Organization Name",
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
              "zipCode",
              "number",
              "Enter Your Zip Code",
              true
            )}
            {renderInputField(
              "Business Phone",
              "businessPhone",
              "number",
              "Enter Your Business Phone",
              true
            )}
            {renderInputField(
              "Mobile Phone",
              "mobilePhone",
              "number",
              "Enter Your Mobile Phone"
            )}
            {renderInputField("Date", "date", "date", "")}
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
    </>
  );
};

export default RegistrationForm;
