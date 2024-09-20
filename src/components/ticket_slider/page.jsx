"use client";

import Image from "next/image";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import NoInfoAvailable from "@/components/no-info/page";
import Skeleton from "@/components/skeleton/skeleton";
import { FormatDateOnly } from "@/components/date-format/date-only/pae";
import { FormatTimeOnly } from "@/components/date-format/time-only/page";
import LoadingButton from "../loadingButton/page";
import Button from "../button/page";
import Modal from "../common-modal/modal";
import { formatDate } from "../date-format/page";

function TicketSlider({ data, error, loading }) {
  const router = useRouter();
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [OpenSlotPopUp, setOpenSlotPopUp] = useState(false);
  const [OpenCalculatePopUp, setOpenCalculatePopUp] = useState(false);
  const [count, setCount] = useState(1);
  const ticket_price =
    data?.ticket_types &&
    data?.ticket_types
      .filter((data) => data.id === selectedTicket?.id)
      .map((data) => data.base_price);
  const total_price = ticket_price * count;

  console.log(ticket_price);
  const handleSelectTicket = (event) => {
    console.log(event);
    setSelectedTicket(event);
  };
  console.log(data);
  const handleOpenSlotPopUp = () => {
    if (selectedTicket && data.ticket_slots.length > 0) {
      setOpenSlotPopUp(true);
    } else {
      console.log("slot ni hai bhai");
    }
  };
  const handleSelectSlot = (id) => {
    setOpenCalculatePopUp(true);
    console.log(id);
  };
  const AddCount = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  console.log(selectedTicket, "selectedTicket");

  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          280: {
            slidesPerView: 1,
          },
          390: {
            slidesPerView: 1,
          },
          500: {
            slidesPerView: 1.5,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
        }}
      >
        <div className="">
          {error ? (
            <div>
              {" "}
              <NoInfoAvailable />{" "}
            </div>
          ) : loading ? (
            <div className=" flex gap-5">
              <Skeleton
                item={3}
                style="h-[400px] w-[400px] flex flex-row rounded-lg mb-3"
              />
            </div>
          ) : (
            // : data?.ticket_types?.length === 0 ? (
            //   <div className="">
            //     <Image
            //       src="/event-empty.png"
            //       height={225}
            //       width={396}
            //       alt="image"
            //       unoptimized
            //       className="rounded-2xl object-fill w-full h-full"
            //     />
            //   </div>
            // )
            data?.ticket_types?.map((event, index) => (
              <SwiperSlide key={index}>
                <div className="rounded-2xl mt-5  p-4 min-h-[350px] h-auto flex max-md:justify-center max-md:items-center max-md:p-2  ">
                  <div
                    onClick={() => handleSelectTicket(event)}
                    className={`lg:p-3 w-[300px] ${
                      selectedTicket?.id === event?.id
                        ? "border border-primary"
                        : "bg-white"
                    } cursor-pointer p-3 space-y-4  rounded-2xl  shadow-[0_3px_10px_rgb(0,0,0,0.2)] `}
                  >
                    <div className=" mt-2 text-lg font-semibold text-[#333333] flex justify-between">
                      <div>{event?.name}</div>
                      <div>
                        {selectedTicket?.id === event?.id ? (
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 0C5.38346 0 0 5.38346 0 12C0 18.6165 5.38346 24 12 24C18.6165 24 24 18.6165 24 12C24 5.38346 18.6165 0 12 0ZM18.7068 8.84211L11.0376 16.4511C10.5865 16.9023 9.86466 16.9323 9.38346 16.4812L5.32331 12.782C4.84211 12.3308 4.81203 11.5789 5.23308 11.0977C5.68421 10.6165 6.43609 10.5865 6.91729 11.0376L10.1353 13.985L16.9925 7.12782C17.4737 6.64662 18.2256 6.64662 18.7068 7.12782C19.188 7.60902 19.188 8.3609 18.7068 8.84211Z"
                              fill="#C42C2D"
                            />
                          </svg>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div className="overflow-y-auto hideScrollbar">
                      {event?.description}
                    </div>
                    <div
                      className=" font-semibold text-lg text-primary
                      "
                    >
                      Price : {event?.base_price} {event?.currency_type}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          )}
        </div>
      </Swiper>
      <div className="flex justify-center my-5">
        {selectedTicket && (
          <span onClick={handleOpenSlotPopUp}>
            <Button
              content={"Continue"}
              px={"px-5"}
              py={"py-2"}
              width={"full"}
              // disabled={!emailValid} // Disable button if email is not valid
            />
          </span>
        )}
      </div>
      <Modal
        wantTocloseFromScreen={false}
        wantCrossButton={true}
        isOpen={OpenSlotPopUp}
        // isOpen={true}
        onClose={() => setOpenSlotPopUp(false)}
        className="custom-modal"
        width={"max-w-[500px]"}
      >
        <div>
          <div className="font-semibold text-lg text-center ">
            Please Select Slot
          </div>

          {data.ticket_slots &&
            data.ticket_slots.map((data, i) => {
              return (
                <div className="my-5">
                  <button
                    onClick={() => handleSelectSlot(data?.id)}
                    className="border font-semibold border-primary rounded-lg p-2 hover:bg-primary duration-300 hover:text-white "
                  >
                    {formatDate(data?.start_date_time)}
                  </button>
                </div>
              );
            })}
        </div>
      </Modal>
      <Modal
        wantTocloseFromScreen={false}
        wantCrossButton={true}
        isOpen={OpenCalculatePopUp}
        // isOpen={true}
        onClose={() => setOpenCalculatePopUp(false)}
        className="custom-modal"
        width={"max-w-[600px]"}
      >
        <div className="px-10">
          <div className="font-semibold text-lg text-center ">
            {data?.title}
          </div>
          <div className="text-center my-5 text-[#9B9A9A]">
            <span>
              SERMASips Happy Hour :{" "}
              <span>
                {FormatDateOnly(data?.start_date_time)} {"     "}{" "}
                {FormatTimeOnly(data?.start_date_time)} -{" "}
                {FormatTimeOnly(data?.end_date_time)}{" "}
              </span>
            </span>
          </div>
          <div className="flex justify-center items-center text-lg text-[#9B9A9A] gap-6">
            <div>
              <svg
                width="24"
                height="24"
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
            <div>{data?.location}</div>
          </div>
          <div className="flex justify-around my-5 items-center">
            <div className="text-lg">How Many Ticket ?</div>
            <div className="flex items-center gap-4">
              <div className="cursor-pointer">
                <svg
                  onClick={handleDecrement}
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="29"
                    height="29"
                    rx="14.5"
                    stroke="black"
                    stroke-opacity="0.3"
                  />
                  <g clip-path="url(#clip0_5691_9712)">
                    <path
                      d="M19.211 14.207H10.791C10.3542 14.207 10 14.5612 10 14.998V15.0039C10 15.4408 10.3542 15.7949 10.791 15.7949H19.211C19.6478 15.7949 20.002 15.4408 20.002 15.0039V14.998C20.002 14.5612 19.6478 14.207 19.211 14.207Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_5691_9712">
                      <rect
                        width="10"
                        height="10"
                        fill="white"
                        transform="translate(10 10)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div>{count}</div>
              <div className="cursor-pointer">
                <svg
                  onClick={AddCount}
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="30" height="30" rx="15" fill="#C42C2D" />
                  <g clip-path="url(#clip0_5691_9714)">
                    <path
                      d="M19.1211 14.1211H15.8789V10.8789C15.8789 10.3935 15.4854 10 15 10C14.5146 10 14.1211 10.3935 14.1211 10.8789V14.1211H10.8789C10.3935 14.1211 10 14.5146 10 15C10 15.4854 10.3935 15.8789 10.8789 15.8789H14.1211V19.1211C14.1211 19.6065 14.5146 20 15 20C15.4854 20 15.8789 19.6065 15.8789 19.1211V15.8789H19.1211C19.6065 15.8789 20 15.4854 20 15C20 14.5146 19.6065 14.1211 19.1211 14.1211Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_5691_9714">
                      <rect
                        width="10"
                        height="10"
                        fill="white"
                        transform="translate(10 10)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div className="border border-[#9B9A9A] text-primary font-semibold p-2 rounded-full text-center text-lg">
            Pay $ {total_price && total_price}
          </div>
          <span>
            <Button
              content={"Continue"}
              px={"px-3"}
              py={"py-3"}
              width={"full"}
              // disabled={!emailValid}
            />
          </span>
        </div>
      </Modal>
    </div>
  );
}

export default TicketSlider;
