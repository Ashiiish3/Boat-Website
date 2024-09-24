import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoStar } from "react-icons/io5";
import { NavLink, useParams } from "react-router-dom";
import {
  AddToCartContext,
  getDataContext,
} from "../ContextApi/AddToCartContext";
import EarbudsAnimation from "../Components/EarbudsAnimation";

export default function Description() {
  const { id } = useParams();
  const [descriptionData, setDescriptionData] = useState([]);
  const [index, setIndex] = useState(0);
  const [currentColor, setCurrentColor] = useState([]);
  const { postData } = useContext(AddToCartContext);
  let productsId = localStorage.getItem("collection");
  const { GetAddCartData } = useContext(getDataContext);
  const getData = async () => {
    try {
      const response = await axios.get(
        `https://boat-website-json-server.onrender.com/SliderData/${productsId}`
      );
      let filterData = response.data.products.find((ele) => ele.id === id);
      setDescriptionData(filterData);
      setCurrentColor(filterData.image_url[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const getIndex = (i) => {
    setIndex(i);
  };
  const HandleColorChange = (el) => {
    setCurrentColor(el);
  };
  return (
    <div>
      <div className="w-full max-w-[94rem] m-auto py-3 px-4 mb-16">
        <h6 className="flex items-center text-[11px] sm:text-xs text-gray-400">
          <NavLink to={"/"}>Home</NavLink> <IoIosArrowForward /> Description
        </h6>
        <div className="mt-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
            <div className="rounded-xl flex flex-col lg:flex-row gap-5">
              <div className="flex lg:flex-col gap-2">
                {currentColor.images &&
                  currentColor.images.map((el, ind) => (
                    <div
                      key={ind}
                      className="h-[60px] w-[60px] sm:h-[80px] sm:w-[80px] border-[1px] rounded-md p-[2px]"
                    >
                      <img
                        src={el}
                        alt=""
                        className="h-full w-full object-cover rounded-md cursor-pointer"
                        onMouseEnter={() => getIndex(ind)}
                      />
                    </div>
                  ))}
              </div>
              <img
                src={currentColor.images && currentColor.images[index]}
                alt=""
                className="m-auto rounded-xl w-full lg:w-[80%] h-[300px] sm:h-[450px] lg:h-[600px] object-cover border-[1px] bg-[#E1E1E1]"
              />
            </div>
            <div className="text-start">
              <p className="flex items-center gap-1">
                <span>
                  <IoStar className="text-yellow-500" />
                </span>
                <span className="text-[14px] sm:text-[15px]">
                  {descriptionData.rating}
                </span>
                <span className="text-[12px] sm:text-[14px] text-gray-400">
                  |
                </span>
                <span className="text-[14px] sm:text-[15px]">
                  {descriptionData.reviews} Reviews
                </span>
                <span>
                  <img
                    src={descriptionData.ratingIcon}
                    alt=""
                    className="h-[12px] sm:h-[15px] mt-1"
                  />
                </span>
              </p>
              <h3 className="text-sm sm:text-lg lg:text-3xl font-medium my-1 mt-2">
                {descriptionData.name}
              </h3>
              <h4>
                <span className="text-xl sm:text-2xl font-medium">
                  ₹{descriptionData.new_price}
                </span>{" "}
                <span className="text-md line-through text-gray-400 mx-1">
                  ₹{descriptionData.old_price}
                </span>{" "}
                <span className="text-green-500 font-medium text-md">
                  {descriptionData.discount}
                </span>
              </h4>
              <div className="mt-2">
                <h1 className="mb-2">
                  <span className="font-medium">Choose your colour :</span>
                  <span> {currentColor.colorName}</span>
                </h1>
                {descriptionData.image_url &&
                  descriptionData.image_url.map((el, index) => (
                    <button
                      key={index}
                      className="text-white h-[25px] w-[25px] sm:h-[30px] sm:w-[30px] rounded-full me-2 border-[1px] border-gray-400"
                      style={{ backgroundColor: el.color }}
                      onClick={() => HandleColorChange(el)}
                    ></button>
                  ))}
              </div>
              <div className="mt-5 w-full lg:max-w-[60%]">
                <h1 className="font-medium">
                  Active Offers
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center gap-3 sm:gap-5 mt-3">
                  <div className="border-[1px] rounded-xl border-green-700 bg-[#DFEFEA] p-3 relative mb-3 lg:mb-0">
                    <div className="pt-0 p-2 border-b-[1px] border-green-700 border-dotted">
                      <p className="text-[12px] sm:text-[14px] font-medium">
                        More than 2 items
                      </p>
                    </div>
                    <h5 className="font-bold text-[#2E4975] text-[10px] sm:text-[11px] mt-2">
                      Get 5% Off
                    </h5>
                    <h2 className="font-bold my-3 text-[14px] sm:text-[16px]">
                      ₹2184
                      <span className="text-gray-500 opacity-85">/item</span>
                    </h2>
                    <h2 className="offer-value bg-green-700 text-white rounded-lg text-[10px] sm:text-[11px] uppercase py-1 px-3 font-medium w-[85%] absolute">
                      Most Popular
                    </h2>
                  </div>
                  <div className="border-[1px] rounded-xl border-green-700 bg-[#DFEFEA] p-3 relative mb-3 lg:mb-0">
                    <div className="pt-0 p-2 border-b-[1px] border-green-700 border-dotted">
                      <p className="text-[12px] sm:text-[14px] font-medium">
                        More than 5 items
                      </p>
                    </div>
                    <h5 className="font-bold text-[#2E4975] text-[10px] sm:text-[11px] mt-2">
                      Get 7% Off
                    </h5>
                    <h2 className="font-bold my-3 text-[14px] sm:text-[16px]">
                      ₹2138
                      <span className="text-gray-500 opacity-85">/item</span>
                    </h2>
                    <h2 className="offer-value bg-black text-white rounded-lg text-[10px] sm:text-[11px] uppercase py-1 px-3 font-medium w-[85%] absolute">
                      Best Value
                    </h2>
                  </div>
                  <div className="border-[1px] rounded-xl border-green-700 bg-[#DFEFEA] p-3 relative mb-3 lg:mb-0">
                    <div className="pt-0 p-2 border-b-[1px] border-green-700 border-dotted">
                      <p className="text-[12px] sm:text-[14px] font-medium">
                        More than 4 items
                      </p>
                    </div>
                    <h5 className="font-bold text-[#2E4975] text-[10px] sm:text-[11px] mt-2">
                      Get 6% Off
                    </h5>
                    <h2 className="font-bold my-3 text-[14px] sm:text-[16px]">
                      ₹2520
                      <span className="text-gray-500 opacity-85">/item</span>
                    </h2>
                    <h2 className="offer-value bg-black text-white rounded-lg text-[10px] sm:text-[11px] uppercase py-1 px-3 font-medium w-[85%] absolute">
                      Best Value
                    </h2>
                  </div>
                </div>
                <button
                  onClick={() =>
                    postData(productsId, descriptionData.id, GetAddCartData)
                  }
                  className="bg-black text-white w-full sm:w-full py-2 mt-5 lg:mt-8 font-medium text-[14px] sm:text-[15px] rounded-xl"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EarbudsAnimation />
    </div>
  );
}