import React, { useEffect, useState } from "react";
import { Icons } from "../Constant/AllData";
import axios from "axios";
import { NavLink } from "react-router-dom";
import MonsoonFest from "./MonsoonFest";

export default function Banner() {
  const [sliderData, setSliderData] = useState([]);
  const getSliderData = async () => {
    try {
      const response = await axios.get("https://boat-website-json-server.onrender.com/SliderData");
      setSliderData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSliderData();
  }, []);
  return (
    <div>
      <div className="lg:w-[94rem] py-6 m-auto">
        <div className="w-[95%] lg:w-[60%] m-auto grid grid-cols-4">
          <div className="m-auto">
            <img src={Icons.icon1} alt="" className="lg:w-28 m-auto" />
            <p className="text-[12px] lg:text-lg">
              <span className="font-bold">1 year </span>Warranty
            </p>
          </div>
          <div className="m-auto">
            <img src={Icons.icon2} alt="" className="lg:w-28 m-auto" />
            <p className="text-[12px] lg:text-lg">
              <span className="font-bold">7-day </span>Replacement
            </p>
          </div>
          <div className="m-auto">
            <img src={Icons.icon3} alt="" className="lg:w-28 m-auto" />
            <p className="text-[12px] lg:text-lg">
              <span className="font-bold">Free Express </span>Delivery
            </p>
          </div>
          <div>
            <img src={Icons.icon4} alt="" className="lg:w-28 m-auto" />
            <p className="text-[12px] lg:text-lg">
              <span className="font-bold">GST </span>Billing
            </p>
          </div>
        </div>
      </div>
      <MonsoonFest />
      <div className="w-full lg:w-[94rem] mx-auto my-10 px-3 lg:px-0">
        <h1 className="text-start text-2xl font-medium mb-5 tracking-wide">
          Explore{" "}
          <span className="UnderLine relative font-extrabold">Bestsellers</span>
        </h1>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mt-4">
          {sliderData.map((ele, index) => (
            <div key={index}>
              <NavLink to={`/Collection/${ele.id}`}>
                <video
                  className="rounded-2xl object-cover w-full h-auto hover:cursor-pointer"
                  onMouseEnter={(e) => e.target.play()}
                  onMouseLeave={(e) => e.target.pause()}
                  muted
                >
                  <source src={ele.videoLink} type="video/mp4" />
                </video>
              </NavLink>
              <h4 className="font-medium mt-1 text-center">{ele.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}