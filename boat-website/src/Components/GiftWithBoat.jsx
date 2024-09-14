import React from "react";
import WhiteEarAnimation from "./WhiteEarAnimation";
import GiftImage1 from "../Assets/Images/Gift-1.jpg";
import GiftImage2 from "../Assets/Images/Gift-2.jpg";
import GiftImage3 from "../Assets/Images/Gift-3.jpg";

export default function GiftWithBoat() {
  return (
    <div>
      <WhiteEarAnimation />
      <div className="flex justify-center flex-wrap">
        <img
          src={GiftImage1}
          alt=""
          className="w-full sm:w-[45%] md:w-[40%] pe-2"
        />
        <img
          src={GiftImage2}
          alt=""
          className="w-full sm:w-[45%] md:w-[40%] ps-2"
        />
      </div>
      <img src={GiftImage3} alt="" className="w-full mt-4" />
    </div>
  );
}