import React, { useEffect, useState } from "react";
import { Icons } from "../Constant/AllData";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Banner() {
  const [sliderData, setSliderData] = useState([]);
  const getSliderData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/SliderData");
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
      <div className="w-[50%] py-6 m-auto grid grid-cols-1 lg:grid-cols-4">
        <div>
          <img src={Icons.icon1} alt="" className="m-auto w-28" />
          <p className="text-lg">
            <span className="font-bold">1 year </span>Warranty
          </p>
        </div>
        <div>
          <img src={Icons.icon2} alt="" className="m-auto w-28" />
          <p className="text-lg">
            <span className="font-bold">7-day </span>Replacement
          </p>
        </div>
        <div>
          <img src={Icons.icon3} alt="" className="m-auto w-28" />
          <p className="text-lg">
            <span className="font-bold">Free Express </span>Delivery
          </p>
        </div>
        <div>
          <img src={Icons.icon4} alt="" className="m-auto w-28" />
          <p className="text-lg">
            <span className="font-bold">GST </span>Billing
          </p>
        </div>
      </div>
      <div>
        <div className="w-[79%] flex justify-between gap-3 m-auto mt-4">
          {sliderData.map((ele, index) => (
            <div key={index}>
              <Link to={"/Collection"}>
                <video
                  className="rounded-2xl object-cover hover:cursor-pointer"
                  width="300"
                  onMouseEnter={(e) => e.target.play()}
                  onMouseLeave={(e) => e.target.pause()}
                  muted
                >
                  <source src={ele.videoLink} type="video/mp4" />
                </video>
              </Link>
              <h4 className="font-medium mt-1">{ele.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
