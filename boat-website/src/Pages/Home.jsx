import React from "react";
import { ImageSlider } from "../Constant/AllData";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  A11y,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import Banner from "../Components/Banner";
import Lifestyles from "../Components/Lifestyles";
import BoatNavTabs from "../Components/BoatNavTabs";

export default function Home() {
  const setting = {
    spaceBetween: 30,
    slidesPerView: 1,
    modules: [Navigation, Pagination, Scrollbar, Autoplay, A11y],
    pagination: { clickable: true },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  };
  return (
    <div>
      <div>
        <Swiper {...setting}>
          {ImageSlider.map((img, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="h-full w-full">
                  <img
                    src={img.image}
                    alt="image"
                    className="h-[91vh] w-full object-cover"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <Banner />
      <Lifestyles />
      <BoatNavTabs />
    </div>
  );
}