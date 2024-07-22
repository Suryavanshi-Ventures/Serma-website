"use client";
import BlueLine from "@/components/blue-line/page";
import Button from "@/components/button/page";
import Modal from "@/components/common-modal/modal";
import LoadingButton from "@/components/loadingButton/page";
import OtherEvent from "@/components/other-events/page";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { fetchData } from "@/utils/api";
function page({ params }) {
  const router = useRouter();

  console.log(typeof params.id, "parmapas");
  const [handleVectorChange, setHandleVectorChange] = useState(false);
  const [register, setRegister] = useState(false);
  const [handleOpenanotherPopUp, setHandleOpenanotherPopUp] = useState(false);
  const handleOpenForm = () => {
    router.push("/events/dynamicRout/registration-form");
  };

  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  console.log(upcomingEvents, "regist upcoming");
  console.log(pastEvents, "regist past");

  useEffect(() => {
    const fetchEvents = async () => {
      const upcoming_events = await fetchData(
        "http://34.235.48.203/api/v1/event/upcoming_events"
      );
      const past_events = await fetchData(
        "http://34.235.48.203/api/v1/event/past_events"
      );
      setUpcomingEvents(upcoming_events.result);
      setPastEvents(past_events);
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    if (upcomingEvents) {
      const eventCheck = upcomingEvents.find(
        (item) => String(item.id) === params.id
      );
      console.log(eventCheck, "check for event");
    }
  }, [upcomingEvents, params.id]);

  return (
    <div className="px-[25px] md:px-[85px] text-[#333333]">
      <div className=" md:my-10 flex  justify-start">
        <div>
          <h2 className="text-[#333333] text-xl  sm:text-2xl lg:text-3xl font-bold">
            SERMASips Happy Hour
          </h2>
          <div className="my-3">
            <BlueLine width={"150px"} />
          </div>
        </div>
      </div>
      <div className="md:hidden text-[14px] mb-5">
        View our Recent events and register for the Event
      </div>
      <div className="flex   flex-col-reverse items-center   lg:flex-row  gap-20">
        <div className=" md:w-[600px]">
          <div className="heading-3">
            SERMA® is back with SERMASips, happy hours across the country!
          </div>
          <div className="my-4 md:my-8 text-[18px] font-semibold">
            Happy Hour Locations:
          </div>
          <div className="underline lg:pr-24">
            Tampa - M. Bird - 1910 North Ola Ave Philadelphia - The Assembly
            Rooftop - 1840 Benjamin Franklin Pkwy New York - BAR 54 - 135 W 45th
            St Denver - Postino 9CO
          </div>
        </div>
        <div className="max-md:w-full">
          <div className="p-4 md:p-10  bg-white  md:w-[400px] text-[20px] shadow-[-5px_6px_40px_0px_#00000024]  rounded-lg ">
            <div className="flex my-3 gap-12 justify-start text-gray font-medium">
              <div>Date :</div>
              <div>March 19,2024</div>
            </div>
            <hr className="text-gray" />
            <div className="flex my-3 gap-12 justify-start text-gray font-medium">
              <div>Time :</div>
              <div>4:00 PM (MDT)</div>
            </div>
            <hr className="text-gray" />
            <div className="flex mt-3 mb-6 gap-5 justify-start text-gray font-medium">
              <div>Location :</div>
              <div>Dallas ,Texas</div>
            </div>
            <div
              onClick={() => setRegister(!register)}
              onMouseEnter={() => setHandleVectorChange(true)}
              onMouseLeave={() => setHandleVectorChange(false)}
              className="flex  cursor-pointer transition duration-300 justify-center items-center gap-[10px] border border-primary hover:bg-primary   p-[7px] rounded-xl w-[150px]"
            >
              <div
                className={`  ${
                  handleVectorChange ? "text-white " : "text-primary"
                }`}
              >
                Register
              </div>

              {handleVectorChange ? (
                <svg
                  width="18"
                  height="8"
                  viewBox="0 0 20 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 3.5L0.5 3.5L0.5 4.5L1 4.5L1 3.5ZM19.3536 4.35356C19.5488 4.1583 19.5488 3.84171 19.3536 3.64645L16.1716 0.464469C15.9763 0.269207 15.6597 0.269207 15.4645 0.464469C15.2692 0.659731 15.2692 0.976314 15.4645 1.17158L18.2929 4L15.4645 6.82843C15.2692 7.02369 15.2692 7.34027 15.4645 7.53554C15.6597 7.7308 15.9763 7.7308 16.1716 7.53554L19.3536 4.35356ZM1 4.5L19 4.5L19 3.5L1 3.5L1 4.5Z"
                    fill="white"
                  />
                </svg>
              ) : (
                <svg
                  width="18"
                  height="8"
                  viewBox="0 0 20 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  //   class=""
                >
                  <path
                    d="M1 3.5L0.5 3.5L0.5 4.5L1 4.5L1 3.5ZM19.3536 4.35356C19.5488 4.1583 19.5488 3.84171 19.3536 3.64645L16.1716 0.464469C15.9763 0.269207 15.6597 0.269207 15.4645 0.464469C15.2692 0.659731 15.2692 0.976314 15.4645 1.17158L18.2929 4L15.4645 6.82843C15.2692 7.02369 15.2692 7.34027 15.4645 7.53554C15.6597 7.7308 15.9763 7.7308 16.1716 7.53554L19.3536 4.35356ZM1 4.5L19 4.5L19 3.5L1 3.5L1 4.5Z"
                    fill="#C42C2D"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="my-4 md:my-8 ">
        <Image
          src="/events/bg-image.png"
          height={800}
          width={1350}
          alt="image"
          className="rounded-xl"
        />
      </div>
      <div className="">
        <OtherEvent />
      </div>
      <Modal
        wantTocloseFromScreen={true}
        wantCrossButton={true}
        isOpen={register}
        // isOpen={true}
        onClose={() => setRegister(false)}
        className="custom-modal"
        width={"max-w-[500px]"}
      >
        <div className="px-[10px]">
          <div className="text-xl text-center font-semibold">
            SERMASips Happy Hour
          </div>
          <div className="text-[14px] md:text-sm text-gray my-4 px-3">
            SERMASips Happy Hour April 10, 2024 4:00 PM - 6:00 PM
          </div>
          <div className="flex gap-5 text-gray px-3">
            <div className="flex items-center gap-4">
              <div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.0067 15.8571C18.5606 11.8496 18.2395 12.3496 18.3131 12.2451C19.2429 10.9336 19.7344 9.39009 19.7344 7.78125C19.7344 3.51469 16.2721 0 12 0C7.74178 0 4.26562 3.50775 4.26562 7.78125C4.26562 9.38906 4.76737 10.973 5.72766 12.3022L7.99322 15.8572C5.57095 16.2294 1.45312 17.3387 1.45312 19.7812C1.45312 20.6716 2.03428 21.9405 4.80291 22.9293C6.73612 23.6197 9.29208 24 12 24C17.0637 24 22.5469 22.5716 22.5469 19.7812C22.5469 17.3383 18.4339 16.2301 16.0067 15.8571ZM6.9023 11.5287C6.89456 11.5166 6.8865 11.5048 6.87806 11.4931C6.07898 10.3938 5.67188 9.09098 5.67188 7.78125C5.67188 4.26478 8.50341 1.40625 12 1.40625C15.4893 1.40625 18.3281 4.26605 18.3281 7.78125C18.3281 9.09309 17.9287 10.3517 17.1728 11.4221C17.1051 11.5114 17.4585 10.9624 12 19.5276L6.9023 11.5287ZM12 22.5938C6.46903 22.5938 2.85938 20.968 2.85938 19.7812C2.85938 18.9836 4.71413 17.6721 8.82413 17.1609L11.407 21.2138C11.5361 21.4164 11.7597 21.5391 12 21.5391C12.2402 21.5391 12.4638 21.4164 12.5929 21.2138L15.1757 17.1609C19.2858 17.6721 21.1406 18.9836 21.1406 19.7812C21.1406 20.9579 17.5635 22.5938 12 22.5938Z"
                    fill="#9B9A9A"
                  />
                  <path
                    d="M12 4.26562C10.0615 4.26562 8.48438 5.84273 8.48438 7.78125C8.48438 9.71977 10.0615 11.2969 12 11.2969C13.9385 11.2969 15.5156 9.71977 15.5156 7.78125C15.5156 5.84273 13.9385 4.26562 12 4.26562ZM12 9.89062C10.8369 9.89062 9.89062 8.94436 9.89062 7.78125C9.89062 6.61814 10.8369 5.67188 12 5.67188C13.1631 5.67188 14.1094 6.61814 14.1094 7.78125C14.1094 8.94436 13.1631 9.89062 12 9.89062Z"
                    fill="#9B9A9A"
                  />
                </svg>
              </div>
              <div>Location :</div>
            </div>
            <div>Virtual</div>
          </div>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="border border-gray outline-none mt-4 rounded-lg p-2 w-full"
          />
          <span
            onClick={() => setHandleOpenanotherPopUp(!handleOpenanotherPopUp)}
          >
            <Button
              content={"Continue"}
              px={"px-5"}
              py={"py-2"}
              width={"full"}
            />
          </span>
        </div>
      </Modal>

      <Modal
        wantTocloseFromScreen={true}
        wantCrossButton={true}
        isOpen={handleOpenanotherPopUp}
        // isOpen={true}
        onClose={() => setHandleOpenanotherPopUp(false)}
        className="custom-modal"
        width={"max-w-[500px]"}
      >
        <div className="px-[10px]">
          <div className="text-xl text-center font-semibold">
            SERMASips Happy Hour
          </div>
          <div className="text-sm text-gray my-4 px-3">
            SERMASips Happy Hour April 10, 2024 4:00 PM - 6:00 PM
          </div>
          <div className="flex gap-5 text-gray px-3">
            <div className="flex items-center gap-4">
              <div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.0067 15.8571C18.5606 11.8496 18.2395 12.3496 18.3131 12.2451C19.2429 10.9336 19.7344 9.39009 19.7344 7.78125C19.7344 3.51469 16.2721 0 12 0C7.74178 0 4.26562 3.50775 4.26562 7.78125C4.26562 9.38906 4.76737 10.973 5.72766 12.3022L7.99322 15.8572C5.57095 16.2294 1.45312 17.3387 1.45312 19.7812C1.45312 20.6716 2.03428 21.9405 4.80291 22.9293C6.73612 23.6197 9.29208 24 12 24C17.0637 24 22.5469 22.5716 22.5469 19.7812C22.5469 17.3383 18.4339 16.2301 16.0067 15.8571ZM6.9023 11.5287C6.89456 11.5166 6.8865 11.5048 6.87806 11.4931C6.07898 10.3938 5.67188 9.09098 5.67188 7.78125C5.67188 4.26478 8.50341 1.40625 12 1.40625C15.4893 1.40625 18.3281 4.26605 18.3281 7.78125C18.3281 9.09309 17.9287 10.3517 17.1728 11.4221C17.1051 11.5114 17.4585 10.9624 12 19.5276L6.9023 11.5287ZM12 22.5938C6.46903 22.5938 2.85938 20.968 2.85938 19.7812C2.85938 18.9836 4.71413 17.6721 8.82413 17.1609L11.407 21.2138C11.5361 21.4164 11.7597 21.5391 12 21.5391C12.2402 21.5391 12.4638 21.4164 12.5929 21.2138L15.1757 17.1609C19.2858 17.6721 21.1406 18.9836 21.1406 19.7812C21.1406 20.9579 17.5635 22.5938 12 22.5938Z"
                    fill="#9B9A9A"
                  />
                  <path
                    d="M12 4.26562C10.0615 4.26562 8.48438 5.84273 8.48438 7.78125C8.48438 9.71977 10.0615 11.2969 12 11.2969C13.9385 11.2969 15.5156 9.71977 15.5156 7.78125C15.5156 5.84273 13.9385 4.26562 12 4.26562ZM12 9.89062C10.8369 9.89062 9.89062 8.94436 9.89062 7.78125C9.89062 6.61814 10.8369 5.67188 12 5.67188C13.1631 5.67188 14.1094 6.61814 14.1094 7.78125C14.1094 8.94436 13.1631 9.89062 12 9.89062Z"
                    fill="#9B9A9A"
                  />
                </svg>
              </div>
              <div>Location :</div>
            </div>
            <div>Virtual</div>
          </div>
          <div className=" flex gap-5 px-3 my-5">
            <div className="text-xl font-semibold">Registration</div>
            <div>
              <div className="flex gap-3">
                <input type="radio" name="" className="accent-primary" />
                <label>Non-Member – $15.00</label>
              </div>
              <div className="flex gap-3 my-3 ">
                <input type="radio" name="" className="accent-primary" />
                <label>Webinar: Ski Area Risk Management</label>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span>
              <LoadingButton
                disabledProp={() => {}}
                style="hover:bg-primary  transition-all font-[700] duration-200 text-black p-[7px]  w-full xs:w-[132px]  rounded-3xl text-primary border border-primary hover:text-white "
                text="Cancel"
                spinnerWidth="23"
                spinnerHeight="23"
                loading={false}
              />
            </span>
            <span onClick={handleOpenForm}>
              <Button content={"Next"} px={"px-6"} py={"py-2"} width={"full"} />
            </span>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default page;
