import React from "react";
import { LifestyleImages } from "../Constant/AllData";
import { NavLink } from "react-router-dom";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

export default function Lifestyles() {
  return (
    <div className="w-[100%] lg:w-[94rem] m-auto my-10 px-3 lg:p-0">
      <h1 className="text-start text-2xl font-medium mb-5 tracking-wide">
        Shop of{" "}
        <span className="UnderLine relative font-extrabold">LifeStyle</span>
      </h1>
      <div className="lg:w-[94rem] flex justify-between gap-5 overflow-auto">
        {LifestyleImages.map((ele, ind) => (
          <div key={ind} className="rounded-bl-xl rounded-br-xl">
            <NavLink to={`/Collection/${ele.id}`}>
              <div className="w-[200px] lg:w-[360px]">
                <img src={ele.image} alt="" className="w-full object-contain" />
              </div>
              <div className="py-4 rounded-bl-xl rounded-br-xl bg-[#D0D9DE] bg-opacity-50">
                <h1 className="text-2xl font-medium">
                  {ele.title}
                </h1>
                <p className="mt-2 font-medium text-[#2F5B96] flex justify-center items-center">View all <IoArrowForwardCircleOutline className="ms-1" /></p>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}