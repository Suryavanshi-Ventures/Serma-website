"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import CustomAlert from "@/components/alert/page";
import useAxiosFetch from "@/hooks/axiosFetch";

const ContactDetails = () => {
  const { data: session } = useSession();
  const token = session?.user?.userToken;
  const [edit, setEdit] = useState(false);
  const [AlertDetails, setAlertDetails] = useState({
    isOpen: false,
    message: "",
    duration: 3000,
    position: "bottom",
    type: "success",
  });
  const router = useRouter();
  const Api_URL = `${process.env.NEXT_PUBLIC_APP_NEXTAUTH_URL}/auth/update/profile`;
  const Api_URL_GET_PROFILE = `${process.env.NEXT_PUBLIC_APP_NEXTAUTH_URL}/auth/me`;

  const { data: ProfileData, loading: isLoading } = useAxiosFetch(
    Api_URL_GET_PROFILE,
    { headers: { Authorization: `Bearer ${token}` } },
    token
  );

  const [details, setDetails] = useState({
    first_name: "",
    last_name: "",
    memberShipLevel: "",
    organization: "",
    title: "",
    email: "",
    state: "",
    city: "",
    zipcode: "",
    mobile: "",
    bio: "N/A",
  });

  useEffect(() => {
    if (ProfileData?.result?.data) {
      setDetails({
        first_name: ProfileData?.result?.data.first_name,
        last_name: ProfileData?.result?.data.last_name,
        memberShipLevel: ProfileData?.result?.data.membership_level,
        organization: ProfileData?.result?.data.organization,
        title: ProfileData?.result?.data.title,
        email: ProfileData?.result?.data.email,
        state: ProfileData?.result?.data.state,
        city: ProfileData?.result?.data.city,
        zipcode: ProfileData?.result?.data.zip_code,
        mobile: ProfileData?.result?.data.mobile_number,
        bio: "N/A",
      });
    }
  }, [ProfileData]);

  console.log(details);
  const handleChangePassword = () => {
    router.push(`/members-only-content/Dashboard/profile/${1}`);
  };

  const body = {
    first_name: details.first_name,

    last_name: details.last_name,
    email: details.email,
    organization: details.organization,
    title: details.title,
    address: details.city + " " + details.state + " " + details.zipcode,
    city: details.city,
    state: details.state,
    zip_code: details.zipcode,
    business_phone: String(details.mobile),
    mobile_number: String(details.mobile),
  };
  const handleSubmit = async () => {
    try {
      const response = await axios.post(Api_URL, body, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.status === 200) {
        setAlertDetails({
          isOpen: true,
          message: response.data.message || "user update successfully",
          duration: 3000,
          position: "top",
          type: "success",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    setDetails({
      ...details,
      [name]: value,
    });
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
      <div className="mx-5 text-[#333333]">
        <div className="flex  items-start relative">
          <div className="mx-auto">
            <div className="w-[140px] h-[140px]  ">
              <Image
                unoptimized
                src="/dashboard/profile/profile-img.png"
                width={100}
                height={100}
                className="w-full h-full object-fill"
              />
            </div>
          </div>
          <div className="flex items-center gap-10 absolute right-4 top-2 cursor-pointer ">
            <div onClick={handleChangePassword} className="hidden xl:flex">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1748_26927)">
                  <path
                    d="M3.94405 18.2631C3.85038 18.1004 3.63838 18.0462 3.47568 18.1398L2.61784 18.6378V17.6468C2.61784 17.4595 2.465 17.3066 2.27766 17.3066C2.09031 17.3066 1.93748 17.4595 1.93748 17.6468V18.6378L1.07963 18.1398C0.916933 18.0462 0.704937 18.1004 0.611264 18.2631C0.517591 18.4258 0.571822 18.6378 0.734517 18.7315L1.59729 19.2343L0.734517 19.7372C0.571822 19.8309 0.517591 20.0429 0.611264 20.2056C0.704937 20.3683 0.916933 20.4225 1.07963 20.3288L1.93748 19.8309V20.8218C1.93748 21.0092 2.09031 21.162 2.27766 21.162C2.465 21.162 2.61784 21.0092 2.61784 20.8218V19.8309L3.47568 20.3288C3.63838 20.4225 3.85038 20.3683 3.94405 20.2056C4.03772 20.0429 3.98349 19.8309 3.8208 19.7372L2.95802 19.2343L3.8208 18.7315C3.98349 18.6329 4.04265 18.4258 3.94405 18.2631Z"
                    fill="#C42C2D"
                  />
                  <path
                    d="M7.09466 20.1997C7.18833 20.3624 7.40033 20.4166 7.56303 20.323L8.42087 19.825V20.816C8.42087 21.0033 8.57371 21.1562 8.76105 21.1562C8.9484 21.1562 9.10124 21.0033 9.10124 20.816V19.825L9.95908 20.323C10.1218 20.4166 10.3338 20.3624 10.4274 20.1997C10.5211 20.037 10.4669 19.825 10.3042 19.7313L9.44142 19.2285L10.3042 18.7256C10.4669 18.6319 10.5211 18.4199 10.4274 18.2572C10.3338 18.0945 10.1218 18.0403 9.95908 18.134L9.10124 18.6319V17.641C9.10124 17.4536 8.9484 17.3008 8.76105 17.3008C8.57371 17.3008 8.42087 17.4536 8.42087 17.641V18.6319L7.56303 18.1389C7.40033 18.0452 7.18833 18.0995 7.09466 18.2622C7.00099 18.4249 7.05522 18.6369 7.21792 18.7305L8.08069 19.2334L7.21792 19.7313C7.05522 19.825 7.00099 20.037 7.09466 20.1997Z"
                    fill="#C42C2D"
                  />
                  <path
                    d="M6.4834 22.7828V23.3843C6.4834 23.5272 6.60172 23.6456 6.7447 23.6456H10.7825C10.9255 23.6456 11.0438 23.5272 11.0438 23.3843V22.7828C11.0438 22.6398 10.9255 22.5215 10.7825 22.5215H6.7447C6.59679 22.5215 6.4834 22.6398 6.4834 22.7828Z"
                    fill="#C42C2D"
                  />
                  <path
                    d="M16.3233 5.9715H16.2937V4.63049C16.2937 2.29853 14.3857 0.316606 12.0587 0.356048C9.79577 0.395489 7.96175 2.24923 7.96175 4.52203V4.65021C7.96175 4.84249 8.11951 5.00025 8.31179 5.00025H9.43093C9.62321 5.00025 9.78097 4.84249 9.78097 4.65021V4.61077C9.78097 3.35851 10.7226 2.25909 11.9749 2.18021C13.3356 2.09639 14.4696 3.1761 14.4696 4.5171V5.96657H11.0184V5.9715H7.82863C7.23701 5.99122 6.75879 6.46944 6.75879 7.06599V13.1301C6.75879 13.7365 7.2518 14.2295 7.85821 14.2295H16.3184C16.9248 14.2295 17.4178 13.7365 17.4178 13.1301V7.07092C17.4227 6.46451 16.9297 5.9715 16.3233 5.9715ZM12.744 10.3741C12.6602 10.4333 12.6355 10.4974 12.6355 10.596C12.6405 11.0397 12.6405 11.4834 12.6355 11.9321C12.6454 12.1194 12.5517 12.2969 12.3841 12.3807C11.9946 12.5779 11.6051 12.3018 11.6051 11.9321C11.6051 11.9321 11.6051 11.9321 11.6051 11.9271C11.6051 11.4834 11.6051 11.0348 11.6051 10.5911C11.6051 10.5023 11.5854 10.4382 11.5065 10.3791C11.1023 10.0832 10.9691 9.57544 11.1713 9.1268C11.3685 8.69294 11.8467 8.43657 12.2954 8.53025C12.7982 8.62885 13.1483 9.03805 13.1532 9.536C13.168 9.88604 13.025 10.172 12.744 10.3741Z"
                    fill="#C42C2D"
                  />
                  <path
                    d="M12.9609 22.7828V23.3843C12.9609 23.5272 13.0793 23.6456 13.2222 23.6456H17.26C17.403 23.6456 17.5213 23.5272 17.5213 23.3843V22.7828C17.5213 22.6398 17.403 22.5215 17.26 22.5215H13.2222C13.0793 22.5215 12.9609 22.6398 12.9609 22.7828Z"
                    fill="#C42C2D"
                  />
                  <path
                    d="M13.5732 20.1997C13.6669 20.3624 13.8788 20.4166 14.0415 20.323L14.8994 19.825V20.816C14.8994 21.0033 15.0522 21.1562 15.2396 21.1562C15.4269 21.1562 15.5798 21.0033 15.5798 20.816V19.825L16.4376 20.323C16.6003 20.4166 16.8123 20.3624 16.906 20.1997C16.9996 20.037 16.9454 19.825 16.7827 19.7313L15.9199 19.2285L16.7827 18.7256C16.9454 18.6319 16.9996 18.4199 16.906 18.2572C16.8123 18.0945 16.6003 18.0403 16.4376 18.134L15.5798 18.6319V17.641C15.5798 17.4536 15.4269 17.3008 15.2396 17.3008C15.0522 17.3008 14.8994 17.4536 14.8994 17.641V18.6319L14.0415 18.134C13.8788 18.0403 13.6669 18.0945 13.5732 18.2572C13.4795 18.4199 13.5337 18.6319 13.6964 18.7256L14.5592 19.2285L13.6964 19.7313C13.5337 19.825 13.4795 20.037 13.5732 20.1997Z"
                    fill="#C42C2D"
                  />
                  <path
                    d="M23.7386 22.5215H19.7008C19.5578 22.5215 19.4395 22.6398 19.4395 22.7828V23.3843C19.4395 23.5272 19.5578 23.6456 19.7008 23.6456H23.7386C23.8815 23.6456 23.9998 23.5272 23.9998 23.3843V22.7828C23.9998 22.6398 23.8815 22.5215 23.7386 22.5215Z"
                    fill="#C42C2D"
                  />
                  <path
                    d="M0.261298 23.6456H4.2991C4.44207 23.6456 4.56039 23.5272 4.56039 23.3843V22.7828C4.56039 22.6398 4.44207 22.5215 4.2991 22.5215H0.261298C0.118324 22.5215 0 22.6398 0 22.7828V23.3843C0 23.5272 0.118324 23.6456 0.261298 23.6456Z"
                    fill="#C42C2D"
                  />
                  <path
                    d="M20.0558 20.1997C20.1495 20.3624 20.3615 20.4166 20.5242 20.323L21.3821 19.825V20.816C21.3821 21.0033 21.5349 21.1562 21.7222 21.1562C21.9096 21.1562 22.0624 21.0033 22.0624 20.816V19.825L22.9203 20.323C23.083 20.4166 23.295 20.3624 23.3886 20.1997C23.4823 20.037 23.4281 19.825 23.2654 19.7313L22.4026 19.2285L23.2654 18.7256C23.4281 18.6319 23.4823 18.4199 23.3886 18.2572C23.295 18.0945 23.083 18.0403 22.9203 18.134L22.0624 18.6319V17.641C22.0624 17.4536 21.9096 17.3008 21.7222 17.3008C21.5349 17.3008 21.3821 17.4536 21.3821 17.641V18.6319L20.5242 18.134C20.3615 18.0403 20.1495 18.0945 20.0558 18.2572C19.9622 18.4199 20.0164 18.6319 20.1791 18.7256L21.0419 19.2285L20.1791 19.7313C20.0164 19.825 19.9572 20.037 20.0558 20.1997Z"
                    fill="#C42C2D"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1748_26927">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="hidden xl:flex">
              <p
                onClick={() => handleChangePassword(1)}
                className="text-[16px] underline text-[#C42C2D] font-bold"
              >
                Change Password
              </p>
            </div>

            <div
              onClick={() => setEdit(!edit)}
              className=" text-primary transition
           duration-300 hover:text-[#C42C2D] font-semibold "
            >
              {edit ? (
                <div onClick={handleSubmit} className="text-[16px]">
                  Save
                </div>
              ) : (
                <div className="mr-2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 25 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.95 23.5125C5.95 23.5125 6.05 23.5125 6.0875 23.5125L9.75 23.175C10.2625 23.125 10.7375 22.9 11.1 22.5375L24.925 8.7125C25.575 8.0625 25.9375 7.2 25.9375 6.2875C25.9375 5.375 25.575 4.5125 24.925 3.8625L24.0375 2.975C22.7375 1.675 20.475 1.675 19.175 2.975L17.4125 4.7375L5.3625 16.7875C5 17.15 4.775 17.625 4.7375 18.1375L4.4 21.8C4.3625 22.2625 4.525 22.7125 4.85 23.05C5.15 23.35 5.5375 23.5125 5.95 23.5125ZM21.6125 3.8375C22.0125 3.8375 22.4125 3.9875 22.7125 4.3L23.6 5.1875C23.9 5.4875 24.0625 5.875 24.0625 6.2875C24.0625 6.7 23.9 7.1 23.6 7.3875L22.5 8.4875L19.4125 5.4L20.5125 4.3C20.8125 4 21.2125 3.8375 21.6125 3.8375ZM6.6 18.3125C6.6 18.2375 6.6375 18.175 6.6875 18.125L18.075 6.725L21.1625 9.8125L9.775 21.2C9.775 21.2 9.65 21.2875 9.5875 21.2875L6.3 21.5875L6.6 18.3V18.3125ZM28.4375 27.5C28.4375 28.0125 28.0125 28.4375 27.5 28.4375H2.5C1.9875 28.4375 1.5625 28.0125 1.5625 27.5C1.5625 26.9875 1.9875 26.5625 2.5 26.5625H27.5C28.0125 26.5625 28.4375 26.9875 28.4375 27.5Z"
                      fill="#C42C2D"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[566px] lg:max-w-[691px] mx-auto gap-x-20 gap-y-10 mt-16">
          <div>
            <div>
              <h2 className="text-lg font-bold">First Name</h2>
            </div>
            <div>
              <input
                type="text"
                name="first_name"
                id=""
                disabled={!edit}
                onChange={handleChange}
                value={details?.first_name}
                className={`border border-[#9B9A9A4D]  outline-primary text-lg font-normal ${
                  edit ? "bg-[#ded6d61b]" : "bg-[#ada8a81b]"
                } rounded-xl mt-5 w-full px-3 py-3`}
              />
            </div>
          </div>
          <div>
            <div>
              <h2 className="text-lg font-bold">Last Name</h2>
            </div>
            <div>
              <input
                type="text"
                name="last_name"
                disabled={!edit}
                onChange={handleChange}
                id=""
                value={details?.last_name}
                className={`border border-[#9B9A9A4D] outline-primary text-lg font-normal ${
                  edit ? "bg-[#ded6d61b]" : "bg-[#ada8a81b]"
                } rounded-xl w-full mt-5  px-3 py-3`}
              />
            </div>
          </div>
          <div>
            <div>
              <h2 className="text-lg font-bold">Membership Level</h2>
            </div>
            <div>
              <input
                type="text"
                name="memberShipLevel"
                disabled={!edit}
                onChange={handleChange}
                id=""
                value={details?.memberShipLevel}
                className={`border border-[#9B9A9A4D] outline-primary text-lg font-normal ${
                  edit ? "bg-[#ded6d61b]" : "bg-[#ada8a81b]"
                } rounded-xl w-full mt-5  px-3 py-3`}
              />
            </div>
          </div>
          <div>
            <div>
              <h2 className="text-lg font-bold">Organization</h2>
            </div>
            <div>
              <input
                type="text"
                name="organization"
                disabled={!edit}
                onChange={handleChange}
                id=""
                value={details?.organization}
                className={`border border-[#9B9A9A4D] outline-primary text-lg font-normal ${
                  edit ? "bg-[#ded6d61b]" : "bg-[#ada8a81b]"
                } rounded-xl w-full mt-5  px-3 py-3`}
              />
            </div>
          </div>
          <div>
            <div>
              <h2 className="text-lg font-bold">Title</h2>
            </div>
            <div>
              <input
                type="text"
                name="title"
                disabled={!edit}
                onChange={handleChange}
                id=""
                value={details?.title}
                className={`border border-[#9B9A9A4D] outline-primary text-lg font-normal ${
                  edit ? "bg-[#ded6d61b]" : "bg-[#ada8a81b]"
                } rounded-xl w-full mt-5  px-3 py-3`}
              />
            </div>
          </div>
          <div>
            <div>
              <h2 className="text-lg font-bold">email</h2>
            </div>
            <div>
              <input
                type="text"
                name="email"
                disabled={!edit}
                onChange={handleChange}
                id=""
                value={details?.email}
                className={`border border-[#9B9A9A4D] outline-primary text-lg font-normal ${
                  edit ? "bg-[#ded6d61b]" : "bg-[#ada8a81b]"
                } rounded-xl w-full mt-5  px-3 py-3`}
              />
            </div>
          </div>
          <div>
            <div>
              <h2 className="text-lg font-bold">State</h2>
            </div>
            <div>
              <input
                type="text"
                name="state"
                disabled={!edit}
                onChange={handleChange}
                id=""
                value={details?.state}
                className={`border border-[#9B9A9A4D] outline-primary text-lg font-normal ${
                  edit ? "bg-[#ded6d61b]" : "bg-[#ada8a81b]"
                } rounded-xl w-full mt-5  px-3 py-3`}
              />
            </div>
          </div>
          <div>
            <div>
              <h2 className="text-lg font-bold">City</h2>
            </div>
            <div>
              <input
                type="text"
                name="city"
                disabled={!edit}
                onChange={handleChange}
                id=""
                value={details?.city}
                className={`border border-[#9B9A9A4D] outline-primary text-lg font-normal ${
                  edit ? "bg-[#ded6d61b]" : "bg-[#ada8a81b]"
                }  bg-opacity-50 rounded-xl w-full mt-5  px-3 py-3`}
              />
            </div>
          </div>
          <div>
            <div>
              <h2 className="text-lg font-bold">Zipcode</h2>
            </div>
            <div>
              <input
                type="text"
                name="zipcode"
                disabled={!edit}
                onChange={handleChange}
                id=""
                value={details?.zipcode}
                className={`border border-[#9B9A9A4D] outline-primary text-lg font-normal ${
                  edit ? "bg-[#ded6d61b]" : "bg-[#ada8a81b]"
                } rounded-xl w-full mt-5  px-3 py-3`}
              />
            </div>
          </div>
          <div>
            <div>
              <h2 className="text-lg font-bold">Mobile Phone</h2>
            </div>
            <div>
              <input
                type="number"
                name="mobile"
                disabled={!edit}
                onChange={handleChange}
                id=""
                value={details?.mobile}
                className={`border border-[#9B9A9A4D] outline-primary text-lg font-normal ${
                  edit ? "bg-[#ded6d61b]" : "bg-[#ada8a81b]"
                } rounded-xl w-full mt-5  px-3 py-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
              />
            </div>
          </div>
          <div className="col-span-1 lg:col-span-2">
            <div>
              <h2 className="text-lg font-bold">Professional Bio</h2>
            </div>
            <div>
              <textarea
                rows={5}
                name="bio"
                disabled={!edit}
                onChange={handleChange}
                value={details?.bio}
                className={`w-full  border border-[#9B9A9A4D] outline-primary text-lg font-normal ${
                  edit ? "bg-[#ded6d61b]" : "bg-[#ada8a81b]"
                } rounded-xl mt-5  px-3 py-3`}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactDetails;
