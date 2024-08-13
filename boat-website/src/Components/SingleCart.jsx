import React, { useContext, useState } from "react";
import { IoStar } from "react-icons/io5";
import { getDataContext } from "../ContextApi/AddToCartContext";
import axios from "axios";
import { TiMinus } from "react-icons/ti";
import { FiPlus } from "react-icons/fi";

export default function SingleCart({ ele }) {
  const [count, setCount] = useState(1);
  const { GetAddCartData } = useContext(getDataContext);
  const DeleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/Add-to-cart/${id}`);
      alert("Product has been deleted.");
      GetAddCartData();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex rounded-lg border-[1px] p-1 bg-gray-50">
        <div className="w-[300px] lg:w-[190px] lg:h-[190px]">
          <img
            src={ele.image ?? ele.image_url[0].images[0]}
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="pt-2 ms-2 me-1 lg:mx-4 text-start w-96 lg:w-64 flex flex-col justify-between">
          <div className="border-b-[1px] pb-2">
            <p className="flex items-center gap-1">
              <span>
                <IoStar className="text-yellow-500" />
              </span>
              <span className="text-[12px]">{ele.rating}</span>
              <span className="text-[11px] text-gray-400">|</span>
              <span className="text-[12px]">{ele.reviews}</span>
              <span>
                <img src={ele.ratingIcon} alt="" className="h-[13px]" />
              </span>
            </p>
            <h3 className="text-sm lg:text-lg font-medium my-1">{ele.name}</h3>
            <h4>
              <span className="lg:text-lg font-medium">₹{ele.new_price.replace(/,/g, '')*count}</span>{" "}
              <span className="lg:text-sm line-through text-gray-400">
                ₹{ele.old_price}
              </span>{" "}
              <span className="text-green-500 font-medium lg:text-sm">
                {ele.discount}
              </span>
            </h4>
          </div>
          <div className="my-2 flex justify-between items-center w-full m-auto">
            <button
              className="bg-black text-white py-2 w-12 lg:w-14 text-[20px] rounded-xl text-center"
              disabled={count == 1}
              onClick={() => setCount(count - 1)}
            >
              <TiMinus className="m-auto" />
            </button>
            <button className="bg-black text-white py-2 w-12 lg:w-14 text-[13px] rounded-xl">
              {count}
            </button>
            <button
              className="bg-black text-white py-2 w-12 lg:w-14 text-[20px] rounded-xl"
              onClick={() => setCount(count + 1)}
            >
              <FiPlus className="m-auto" />
            </button>
          </div>
          <div className="w-full">
            <button
              onClick={() => DeleteProduct(ele.id)}
              className="bg-black text-white w-full rounded-xl py-2 mb-2 font-medium"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}