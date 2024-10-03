"use client";
import { STATE, TIME_ZONE } from "@/components/constants/constants";
import Container from "@/components/container/page";
import SearchDropdown from "@/components/SearchDropDown/searchDrop";
import { useParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import Modal from "@/components/common-modal/modal";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "@/hooks/chekoutForm";
import Image from "next/image";

const Page = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { membership_form: CLIENT_SECRET } = useParams();
  const [profileImage, setProfileImage] = useState("");
  const [PopUpForPayment, setPopUpForPayment] = useState(false);
  const [errors, setErrors] = useState({});
  const [StripeData, setStripeData] = useState();
  console.log(StripeData);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    organization: "",
    title: "",
    email: (StripeData && StripeData.email) || "",
    address: "",
    password: "",
    confirm_password: "",
    state: "",
    city: "",
    zipCode: "",
    businessPhone: "",
    mobilePhone: (StripeData && StripeData.mobile) || "",
    date: "",
    volunteer: "",
    time_zone: "",
  });
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
    {
      label: "Password*",
      name: "password",
      type: isVisible ? "text" : "password",
      placeholder: "Enter Password",
    },
    {
      label: "Confirm Password*",
      name: "confirm_password",
      type: isVisible ? "text" : "password",
      placeholder: "Enter Confirm Password",
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

    { label: "Date", name: "date", type: "date", placeholder: "Select Date" },
  ];

  const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PK_KEY}`);
  const options = {
    // passing the client secret obtained from the server
    clientSecret: CLIENT_SECRET,
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("selectedPlanData"));
    setStripeData(storedData);

    if (storedData) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        email: storedData.email || "",
        mobilePhone: storedData.mobile || "",
      }));
    }
  }, [CLIENT_SECRET]);

  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/; // Changed to 10 digits

    if (!formData.firstName.trim()) errors.firstName = "First Name is required";
    if (!formData.lastName.trim()) errors.lastName = "Last Name is required";
    if (!formData.organization.trim())
      errors.organization = "Organization is required";
    if (!formData.title.trim()) errors.title = "Title is required";
    if (!formData.time_zone.trim()) errors.time_zone = "Time zone is required";
    if (!formData.state.trim()) errors.state = "State is required";
    if (!formData.city.trim()) errors.city = "City is required";
    if (!formData.volunteer.trim()) errors.volunteer = "are you interested?";
    if (!formData.date.trim()) errors.date = "Select current date";
    if (!formData.email.trim() || !emailRegex.test(formData.email))
      errors.email = "A valid Email is required";
    if (!formData.address.trim()) errors.address = "Address is required";
    if (!formData.mobilePhone.trim() || !phoneRegex.test(formData.mobilePhone))
      errors.mobilePhone = "A valid Phone number is required";
    if (
      formData.zipCode &&
      (formData.zipCode.length < 5 || formData.zipCode.length > 10)
    )
      errors.zipCode = "Enter Valid zip code";

    if (!formData.password.trim() || formData.password.length < 6)
      errors.password = "Password must be at least 6 characters";
    if (
      !formData.confirm_password.trim() ||
      formData.confirm_password.length < 6
    )
      errors.confirm_password =
        "Confirm Password must be at least 6 characters";
    if (formData.password !== formData.confirm_password)
      errors.confirm_password = "Passwords do not match";
    return errors;
  };
  console.log(StripeData, "StripeData");
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
      localStorage.removeItem("Formdata");
      console.log(formData);
      localStorage.setItem("Formdata", JSON.stringify(formData));
      setPopUpForPayment(true);
      // proceed with form submission or other actions
    }
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };
  console.log(profileImage);
  return (
    <Container>
      <div className="mt-8 text-[#333333]">
        <div className="mb-7">
          <h2 className="heading-2 font-bold">Membership Application</h2>
          <div className="flex justify-center  my-5">
            {/* <label className="relative  block">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="absolute opacity-0"
              />
              <div className="border group cursor-pointer  p-2 border-dashed border-[#D7D7D7] rounded-full w-[150px] h-[150px]">
                <Image
                  src={profileImage || "/oops.png"}
                  height={150}
                  width={150}
                  style={{ objectFit: "cover" }}
                  className="rounded-full "
                  alt="Profile"
                />
                <div className="  absolute top-[40%] right-12  p-2  ">
                  <div className="hidden group-hover:block transition duration-300">
                    <svg
                      width="28"
                      height="27"
                      viewBox="0 0 28 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.95 21.5125C4.95 21.5125 5.05 21.5125 5.0875 21.5125L8.75 21.175C9.2625 21.125 9.7375 20.9 10.1 20.5375L23.925 6.7125C24.575 6.0625 24.9375 5.2 24.9375 4.2875C24.9375 3.375 24.575 2.5125 23.925 1.8625L23.0375 0.975C21.7375 -0.325 19.475 -0.325 18.175 0.975L16.4125 2.7375L4.3625 14.7875C4 15.15 3.775 15.625 3.7375 16.1375L3.4 19.8C3.3625 20.2625 3.525 20.7125 3.85 21.05C4.15 21.35 4.5375 21.5125 4.95 21.5125ZM20.6125 1.8375C21.0125 1.8375 21.4125 1.9875 21.7125 2.3L22.6 3.1875C22.9 3.4875 23.0625 3.875 23.0625 4.2875C23.0625 4.7 22.9 5.1 22.6 5.3875L21.5 6.4875L18.4125 3.4L19.5125 2.3C19.8125 2 20.2125 1.8375 20.6125 1.8375ZM5.6 16.3125C5.6 16.2375 5.6375 16.175 5.6875 16.125L17.075 4.725L20.1625 7.8125L8.775 19.2C8.775 19.2 8.65 19.2875 8.5875 19.2875L5.3 19.5875L5.6 16.3V16.3125ZM27.4375 25.5C27.4375 26.0125 27.0125 26.4375 26.5 26.4375H1.5C0.9875 26.4375 0.5625 26.0125 0.5625 25.5C0.5625 24.9875 0.9875 24.5625 1.5 24.5625H26.5C27.0125 24.5625 27.4375 24.9875 27.4375 25.5Z"
                        fill="#C42C2D"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </label> */}
          </div>
          <div className="mt-10 flex justify-center">
            <form>
              {console.log(StripeData)}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-6 gap-5">
                {Fields.map((field) => (
                  <div className="w-full lg:w-[436px]" key={field.name}>
                    <h2 className="font-bold text-lg">{field.label}</h2>
                    <div className="mt-4">
                      <input
                        disabled={
                          field.name === "email" || field.name === "mobilePhone"
                            ? true
                            : false
                        }
                        type={field.type}
                        name={field.name}
                        value={
                          StripeData &&
                          (field.name === "email"
                            ? StripeData.email
                            : field.name === "mobilePhone"
                            ? StripeData.mobile
                            : formData[field.name])
                        }
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
                    {errors.state && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.state}
                      </p>
                    )}
                  </div>
                </div>
                <div className="w-full lg:w-[436px]">
                  <h2 className="font-bold text-lg">Time Zone*</h2>
                  <div className="mt-4 ">
                    <SearchDropdown
                      disable={false}
                      dropDownWidth={"full"}
                      optionList={TIME_ZONE}
                      initial_value={formData.time_zone}
                      placeholderProp={"Select Time Zone"}
                      OnSelectOptionProp={(value) => {
                        setFormData({ ...formData, time_zone: value });
                      }}
                    />
                    {errors.time_zone && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.time_zone}
                      </p>
                    )}
                  </div>
                </div>
                <div className="w-full lg:w-[436px]">
                  <h2 className="font-bold text-lg">Volunteer</h2>
                  <div className="mt-4 flex gap-4">
                    <div className="flex gap-2 items-center">
                      <input
                        type="radio"
                        name="volunteer"
                        value="true"
                        checked={formData.volunteer === "true"}
                        onChange={handleChange}
                        className="w-4 h-4 flex items-center accent-primary"
                      />
                      <p className="text-[18px] font-normal">Yes</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <input
                        type="radio"
                        name="volunteer"
                        value="false"
                        checked={formData.volunteer === "false"}
                        onChange={handleChange}
                        className="w-4 h-4 flex items-center accent-primary"
                      />
                      <p className="text-[18px] font-normal">No</p>
                    </div>
                  </div>
                  {errors.volunteer && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.volunteer}
                    </p>
                  )}
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
                  onClick={handleSubmit}
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

      <Modal
        wantTocloseFromScreen={false}
        wantCrossButton={true}
        width="max-w-[600px]"
        isOpen={PopUpForPayment}
        onClose={() => setPopUpForPayment(false)}
        className="custom-modal"
      >
        <div className="flex justify-center my-5 text-xl font-semibold text-[#333333] gap-4">
          <div className=" ">{StripeData?.title} </div>
          <div> -</div>
          <div> ${StripeData?.price} (USD)</div>
        </div>
        <div className="space-y-7">
          <Elements stripe={stripePromise} options={options}>
            <CheckoutForm data={StripeData} />
          </Elements>
        </div>
      </Modal>
    </Container>
  );
};

export default Page;
