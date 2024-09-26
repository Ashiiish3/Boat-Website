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
    <>
      <div>
        <div>
          <Swiper {...setting}>
            {ImageSlider.map((img, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="h-full w-full">
                    <picture>
                      <source media="(max-width:700px)" srcSet={img.image_res} />
                      <img src={img.image} alt="image" className="lg:h-[65vh] xl:h-[80vh] 2xl:h-[91vh] w-full object-cover"/>
                    </picture>
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
    </>
  );
}