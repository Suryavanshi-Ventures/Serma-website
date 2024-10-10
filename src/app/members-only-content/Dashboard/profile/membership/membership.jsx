import useAxiosFetch from "@/hooks/axiosFetch";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import Modal from "@/components/common-modal/modal";
import LoadingButton from "@/components/loadingButton/page";
import Image from "next/image";
import axios from "axios";
import CustomAlert from "@/components/alert/page";
const Membership = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const { data: session, status, update } = useSession();
  const token = session?.user?.userToken;
  const [AlertDetails, setAlertDetails] = useState({
    isOpen: false,
    message: "",
    duration: 3000,
    position: "bottom",
    type: "success",
  });
  const Api_URL_GET_Subscription = `${process.env.NEXT_PUBLIC_APP_NEXTAUTH_URL}/user/membership/current-membership`;
  const Api_URL_GET_Cancle_Subscription = `${process.env.NEXT_PUBLIC_APP_NEXTAUTH_URL}/user/membership/cancel-membership`;
  const { data: GetSubscriptionPlan, loading: isLoading } = useAxiosFetch(
    Api_URL_GET_Subscription,
    { headers: { Authorization: `Bearer ${token}` } },
    token
  );

  const handleCanclePlan = () => {
    setOpenPopup(true);
  };
  const handleCancleFinal = async () => {
    try {
      const response = await axios.put(
        Api_URL_GET_Cancle_Subscription,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        setAlertDetails({
          isOpen: true,
          message: response.data.message || "Membership cancelled successfully",
          duration: 3000,
          position: "top",
          type: "success",
        });

        update({
          userAccessLevel: 2,
        });

        setOpenPopup(false);
      } else {
        console.error("Error cancelling membership:", response.data);
      }
    } catch (error) {
      if (error.response) {
        console.log(error?.response?.data?.message);
        setAlertDetails({
          isOpen: true,
          message:
            error?.response?.data?.message || "Error cancelling membership",
          duration: 3000,
          position: "top",
          type: "danger",
        });
        console.error("Error cancelling membership:", error.response.data);
      } else {
        console.error("Error cancelling membership:", error.message);
      }
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
      <div className="px-7 text-[#333333] ">
        <div>
          <h2 className="text-xl font-bold">Membership Details</h2>
        </div>
        <div className="mt-11 ">
          <div className="max-w-[313px] h-[202px] xs:h-[303px] border-[3px] border-[#C42C2D] rounded-[14px] p-8 flex flex-col justify-between ">
            <div className="">
              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-bold max-w-[186px]">
                    Membership Status
                  </h2>
                  <div className="py-4">
                    <span
                      className={` ${
                        GetSubscriptionPlan?.result?.data?.membership_status ==
                        "ACTIVE"
                          ? "bg-green-400 p-2"
                          : "bg-red-400 "
                      }  rounded-full  text-white`}
                    >
                      {GetSubscriptionPlan?.result?.data?.membership_status}
                    </span>
                  </div>
                </div>
                <div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_592_2824)">
                      <path
                        d="M9.99805 0.00390625C4.48426 0.00390625 -0.00195312 4.49012 -0.00195312 10.0039C-0.00195312 15.5177 4.48426 20.0039 9.99805 20.0039C15.5118 20.0039 19.998 15.5177 19.998 10.0039C19.998 4.49012 15.5118 0.00390625 9.99805 0.00390625ZM15.587 7.37233L9.19604 13.7132C8.8201 14.0891 8.2186 14.1142 7.8176 13.7382L4.43414 10.6555C4.03313 10.2796 4.00807 9.65303 4.35895 9.25203C4.73489 8.85102 5.36146 8.82596 5.76246 9.2019L8.44416 11.658L14.1584 5.94376C14.5595 5.54275 15.186 5.54275 15.587 5.94376C15.988 6.34476 15.988 6.97132 15.587 7.37233Z"
                        fill="#C42C2D"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_592_2824">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-base font-normal text-[#9B9A9A] mt-3">
                  Subscription period: 1 year
                </p>
              </div>
              <div>
                
                <p className="text-base font-normal text-[#9B9A9A] mt-3">
                  Payment Status:{" "}
                  {GetSubscriptionPlan?.result?.data?.payment_status || "N/A"}
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-semibold text-base  text-primary">
                Plan Id :{" "}
                <span className="">
                  {" "}
                  { GetSubscriptionPlan?.result?.data?.id || "N/A"}{" "}
                </span>
              </p>

              {GetSubscriptionPlan?.result?.data?.membership_status ==
              "ACTIVE" ? (
                <p
                  onClick={handleCanclePlan}
                  className="text-[#C42C2D] text-xl font-bold cursor-pointer hover:text-[21px] duration-300"
                >
                  Cancel
                </p>
              ) : (
                <p className="text-[#C42C2D] text-xl font-bold cursor-pointer hover:text-[21px] duration-300">
                  Cancelled
                </p>
              )}
            </div>
          </div>
        </div>
        <Modal
          wantTocloseFromScreen={false}
          wantCrossButton={false}
          width="max-w-[600px]"
          isOpen={openPopup}
          onClose={() => setOpenPopup(false)}
          className="custom-modal"
        >
          <div className="flex justify-center">
            <Image
              src="/images/cancel-sub.svg"
              height={80}
              width={80}
              alt="images"
            />
          </div>
          <div className="text-center my-10 text-lg font-semibold">
            Are you sure you want to cancel your subscription?
          </div>
          <div className="flex justify-center gap-5">
            <span onClick={() => setOpenPopup(false)}>
              <LoadingButton
                disabledProp={() => {}}
                style="hover:bg-primary  transition-all font-[700] duration-200 text-black p-[7px]  w-full xs:w-[132px]  rounded-xl text-primary border border-primary hover:text-white "
                text="No"
                spinnerWidth="23"
                spinnerHeight="23"
                loading={false}
              />
            </span>
            <span onClick={handleCancleFinal}>
              <LoadingButton
                disabledProp={() => {}}
                style="hover:bg-primary  transition-all font-[700] duration-200 text-black p-[7px]  w-full xs:w-[132px]  rounded-xl text-primary border border-primary hover:text-white "
                text="Yes"
                spinnerWidth="23"
                spinnerHeight="23"
                loading={isLoading}
              />
            </span>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Membership;
