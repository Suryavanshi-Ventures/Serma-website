// components/RegistrationForm.js
"use client";
import Button from "@/components/button/page";
import LoadingButton from "@/components/loadingButton/page";
import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    organization: "",
    title: "",
    email: "test@gmail.com",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    businessPhone: "",
    mobilePhone: "",
    date: "",
    volunteer: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg">
        <h2 className="text-2xl font-bold text-[#333333] mb-6">
          Enter Registration Form
        </h2>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5 w-full space-y-4">
            <div className="mt-4">
              <label className="block font-bold text-[#333333]">
                First name*
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 block w-full border outline-primary border-[#D7D7D7] rounded-md p-2"
                placeholder="Enter Your First Name"
                required
              />
            </div>
            <div>
              <label className="block font-bold text-[#333333]">
                Last name*
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 block w-full border border-[#D7D7D7] outline-primary rounded-md p-2"
                placeholder="Enter Your Last Name"
                required
              />
            </div>
            <div className="">
              <label className="block font-bold text-[#333333]">
                Organization*
              </label>
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className="mt-1 block w-full border border-[#D7D7D7] outline-primary rounded-md p-2"
                placeholder="Enter Your Organization Name"
                required
              />
            </div>
            <div className="space">
              <label className="block font-bold text-[#333333]">Title*</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="mt-1 block w-full border border-[#D7D7D7] outline-primary rounded-md p-2"
                placeholder="Enter Your Title Name"
                required
              />
            </div>

            <div className="space">
              <label className="block font-bold text-[#333333]">Email*</label>
              <input
                type="email"
                name="email"
                disabled
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-[#D7D7D7] outline-primary rounded-md p-2"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div className="space">
              <label className="block font-bold text-[#333333]">Address*</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="mt-1 block w-full border border-[#D7D7D7] outline-primary rounded-md p-2"
                placeholder="Enter Your Address"
                required
              />
            </div>
            <div>
              <label className="block font-bold text-[#333333]">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="mt-1 block w-full border border-[#D7D7D7] outline-primary rounded-md p-2"
                placeholder="Enter Your City"
              />
            </div>
            <div>
              <label className="block font-bold text-[#333333]">State*</label>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="mt-1 block w-full border border-[#D7D7D7] outline-primary rounded-md p-2"
                required
              >
                <option value="">Select State</option>
                {/* Add options here */}
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                {/* Add other states as needed */}
              </select>
            </div>

            <div>
              <label className="block font-bold text-[#333333]">Zip Code</label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                className="mt-1 block w-full border border-[#D7D7D7] outline-primary rounded-md p-2"
                placeholder="Enter Your Zip Code"
              />
            </div>
            <div>
              <label className="block font-bold text-[#333333]">
                Business Phone*
              </label>
              <input
                type="tel"
                name="businessPhone"
                value={formData.businessPhone}
                onChange={handleChange}
                className="mt-1 block w-full border border-[#D7D7D7] outline-primary rounded-md p-2"
                placeholder="Enter Your Business Phone"
                required
              />
            </div>

            <div>
              <label className="block font-bold text-[#333333]">
                Mobile Phone
              </label>
              <input
                type="tel"
                name="mobilePhone"
                value={formData.mobilePhone}
                onChange={handleChange}
                className="mt-1 block w-full border border-[#D7D7D7] outline-primary rounded-md p-2"
                placeholder="Enter Your Mobile Phone"
              />
            </div>
            <div>
              <label className="block font-bold text-[#333333]">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="mt-1 block w-full border border-[#D7D7D7] outline-primary rounded-md p-2"
              />
            </div>
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
                content={"Next"}
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
