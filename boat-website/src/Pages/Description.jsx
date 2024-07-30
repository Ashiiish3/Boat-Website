import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoStar } from "react-icons/io5";
import { NavLink, useParams } from "react-router-dom";
import { AddToCartContext, getDataContext } from "../ContextApi/AddToCartContext";

export default function Description() {
  const { id } = useParams();
  const [descriptionData, setDescriptionData] = useState([]);
  let productsId = localStorage.getItem("collection");
  const {postData} = useContext(AddToCartContext)
  const {GetAddCartData} = useContext(getDataContext)
  const getData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/SliderData/${productsId}`
      );
      let filterData = response.data.products.filter((ele) => ele.id === id);
      setDescriptionData(filterData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="w-[94rem] m-auto py-3">
        <h6 className="flex items-center text-[11px] text-gray-400">
          <NavLink to={"/"}>Home</NavLink> <IoIosArrowForward /> Description{" "}
        </h6>
        <div className="mt-5">
          {descriptionData.map((ele, ind) => (
            <div key={ind} className="grid grid-cols-2 gap-10">
              <div className="border-[1px] p-4 rounded-xl">
                <img src={ele.image_url} alt="" className="m-auto rounded-xl w-[70%]" />
              </div>
              <div className="text-start">
                <p className="flex items-center gap-1">
                  <span>
                    <IoStar className="text-yellow-500" />
                  </span>
                  <span className="text-[15px]">{ele.rating}</span>
                  <span className="text-[14px] text-gray-400">|</span>
                  <span className="text-[15px]">{ele.reviews} Reviews</span>
                  <span>
                    <img src={ele.ratingIcon} alt="" className="h-[15px] mt-1" />
                  </span>
                </p>
                <h3 className="text-sm lg:text-3xl font-medium my-1 mt-2">
                  {ele.name}
                </h3>
                <h4>
                  <span className="lg:text-2xl font-medium">
                    ₹{ele.new_price}
                  </span>{" "}
                  <span className="lg:text-md line-through text-gray-400 mx-1">
                    ₹{ele.old_price}
                  </span>{" "}
                  <span className="text-green-500 font-medium lg:text-md">
                    {ele.discount}
                  </span>
                </h4>
                <button onClick={()=>postData(productsId, ele.id, GetAddCartData)} className="bg-black text-white w-52 py-2 mt-10 font-medium text-[15px] rounded-xl">
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}