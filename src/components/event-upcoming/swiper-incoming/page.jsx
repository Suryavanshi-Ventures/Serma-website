"use client";

import Image from "next/image";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import NoInfoAvailable from "@/components/no-info/page";
import Skeleton from "@/components/skeleton/skeleton";
import { FormatDateOnly } from "@/components/date-format/date-only/pae";
import { FormatTimeOnly } from "@/components/date-format/time-only/page";
import ReadMoreLessWithout_html from "@/components/read_more_without_dang_html/page";

function SwiperSlideIncoming({ data, error, loading }) {
  const router = useRouter();
  const swiperRef = useRef(null); // Reference to Swiper instance

  const handleClick = (id) => {
    router.push(`/events/${id}`);
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div>
      <Swiper
        ref={swiperRef} // Attach the swiperRef to Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
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
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 2.4,
            spaceBetween: 0,
          },
        }}
      >
        <div className="swiper-button-prev">
          {error ? (
            <NoInfoAvailable />
          ) : loading ? (
            <div className=" flex gap-5">
              <Skeleton
                item={3}
                style="h-[400px] w-[400px] flex flex-row rounded-lg mb-3"
              />
            </div>
          ) : data?.length === 0 ? (
            <div className="flex justify-center items-center">
              <Image
                src="/no-events-ava.png"
                height={200}
                width={300}
                alt="image"
                unoptimized
                className="rounded-2xl object-fill w-1/2 h-1/2"
              />
            </div>
          ) : (
            data?.map((event, index) => (
              <SwiperSlide key={index}>
                <div className="rounded-2xl    flex max-md:justify-center max-md:items-center max-md:p-2 md:p-3">
                  <div className="lg:p-5  p-3  min-h-[450px] lg:min-h-[500px] rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-full">
                    <div className="h-[225px]">
                      <Image
                        src={event.image_url}
                        width={396}
                        height={225}
                        alt="image"
                        unoptimized
                        className="rounded-2xl h-full object-fill  "
                      />
                    </div>
                    <div className="md:mt-5 mt-3">
                      <div className="flex lg:gap-4 gap-2 my-3">
                        <svg
                          width="17"
                          height="17"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_867_9341)">
                            <path
                              d="M13.5634 11.7659L10.7748 9.67449V5.41426C10.7748 4.9859 10.4286 4.63965 10.0002 4.63965C9.57184 4.63965 9.22559 4.9859 9.22559 5.41426V10.0618C9.22559 10.3058 9.34023 10.5359 9.53543 10.6815L12.6338 13.0053C12.7732 13.1099 12.9359 13.1602 13.0978 13.1602C13.334 13.1602 13.5664 13.0541 13.7182 12.8496C13.9755 12.508 13.9057 12.0223 13.5634 11.7659Z"
                              fill="#9B9A9A"
                            />
                            <path
                              d="M10 0C4.48566 0 0 4.48566 0 10C0 15.5143 4.48566 20 10 20C15.5143 20 20 15.5143 20 10C20 4.48566 15.5143 0 10 0ZM10 18.4508C5.34082 18.4508 1.54918 14.6592 1.54918 10C1.54918 5.34082 5.34082 1.54918 10 1.54918C14.66 1.54918 18.4508 5.34082 18.4508 10C18.4508 14.6592 14.6592 18.4508 10 18.4508Z"
                              fill="#9B9A9A"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_867_9341">
                              <rect width="20" height="20" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <div className="text-gray text-sm">
                          {FormatDateOnly(event.start_date_time)},{" "}
                          {FormatTimeOnly(event.start_date_time)}
                        </div>
                      </div>
                      <div className="text-lg md:my-4 my-2">
                        {event.event_type}
                      </div>
                      <div className="text-lg font-semibold text-[#525971]">
                        <ReadMoreLessWithout_html
                          text={event.title}
                          maxLength={25}
                          event_Id={event.id}
                        />
                      </div>
                      <div className="flex items-center justify-between md:mt-16 mt-3">
                        <div
                          onClick={() => handleClick(event.id)}
                          className="underline text-[#474747] cursor-pointer"
                        >
                          Show Detail
                        </div>
                        <div className="flex cursor-pointer items-center gap-3">
                          <span
                            onClick={() => handleClick(event.id)}
                            className="text-primary xl:text-lg text-base"
                          >
                            Register
                          </span>
                          <span>
                            <svg
                              width="18"
                              height="8"
                              viewBox="0 0 20 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 3.5L0.5 3.5L0.5 4.5L1 4.5L1 3.5ZM19.3536 4.35356C19.5488 4.1583 19.5488 3.84171 19.3536 3.64645L16.1716 0.464469C15.9763 0.269207 15.6597 0.269207 15.4645 0.464469C15.2692 0.659731 15.2692 0.976314 15.4645 1.17158L18.2929 4L15.4645 6.82843C15.2692 7.02369 15.2692 7.34027 15.4645 7.53554C15.6597 7.7308 15.9763 7.7308 16.1716 7.53554L19.3536 4.35356ZM1 4.5L19 4.5L19 3.5L1 3.5L1 4.5Z"
                                fill="#FF3B3F"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          )}
        </div>

        {data && data?.length > 2 && (
          <div className="flex justify-center md:justify-end  mx-6 gap-6 max-md:mt-6">
            <div
              className="swiper-button-prev cursor-pointer"
              onClick={handlePrev}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 24C18.617 24 24 18.617 24 12C24 5.38298 18.617 0 12 0C5.38298 0 0 5.38298 0 12C0 18.617 5.38298 24 12 24ZM8.29298 11.293L13.293 6.29302C13.488 6.09802 13.744 6 14 6C14.256 6 14.512 6.09802 14.707 6.29302C15.098 6.684 15.098 7.31602 14.707 7.707L10.414 12L14.707 16.293C15.098 16.684 15.098 17.316 14.707 17.707C14.316 18.098 13.684 18.098 13.293 17.707L8.29298 12.707C7.902 12.316 7.902 11.684 8.29298 11.293Z"
                  fill="#1DB2B9"
                />
              </svg>
            </div>
            <div
              className="swiper-button-next cursor-pointer"
              onClick={handleNext}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0C5.38298 0 0 5.38298 0 12C0 18.617 5.38298 24 12 24C18.617 24 24 18.617 24 12C24 5.38298 18.617 0 12 0ZM15.707 12.707L10.707 17.707C10.512 17.902 10.256 18 9.99998 18C9.744 18 9.48797 17.902 9.29297 17.707C8.90198 17.316 8.90198 16.684 9.29297 16.293L13.586 12L9.29302 7.707C8.90203 7.31602 8.90203 6.684 9.29302 6.29302C9.684 5.90203 10.316 5.90203 10.707 6.29302L15.707 11.293C16.098 11.684 16.098 12.316 15.707 12.707Z"
                  fill="#1DB2B9"
                />
              </svg>
            </div>
          </div>
        )}

        {/* Next and Prev buttons */}
      </Swiper>
    </div>
  );
}

export default SwiperSlideIncoming;
