import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { IoStar } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { AddToCartContext, getDataContext } from "../ContextApi/AddToCartContext";

export default function MonsoonFest() {
  const [data, setData] = useState([]);
  localStorage.setItem("collection", "wireless-earbuds");
  const {postData} = useContext(AddToCartContext)
  const {GetAddCartData} = useContext(getDataContext)
  const getData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/SliderData/wireless-earbuds`);
      let filterData = response.data.products.filter((ele, ind) => {
        if (ind < 4) {
          return ele;
        }
      });
      setData(filterData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="w-[94rem] m-auto my-5">
        <h1 className="text-start text-2xl font-medium mb-5 tracking-wide">
          <Link to={`/Collection/wireless-earbuds`} className="relative">
            Monsoon <span className="UnderLine font-extrabold">Fest</span>
          </Link>
        </h1>
        <div className="grid grid-cols-4 gap-7">
          {data.map((el, ind) => (
            <div key={ind} className="border-[1px] bg-gray-50 rounded-xl">
              <NavLink to={`/Description/${el.id}`}>
                <div className="w-[355px] h-[355px]">
                  <img
                    src={el.image_url}
                    alt=""
                    className="rounded-tl-xl rounded-tr-xl w-full h-full object-cover"
                  />
                </div>
              </NavLink>
                <div className="p-3 text-start">
                    <h1 className="font-medium mb-1">{el.name}</h1>
                    <div className="grid grid-flow-col justify-between">
                        <div>
                            <h4 className="mb-1">
                                <span className="lg:text-md font-medium">
                                    ₹{el.new_price}
                                </span>{" "}
                                <span className="lg:text-sm line-through text-gray-400">
                                    ₹{el.old_price}
                                </span>{" "}
                                <span className="text-green-500 font-medium lg:text-sm">
                                    {el.discount}
                                </span>
                            </h4>
                            <p className="flex items-center gap-1">
                                <span>
                                    <IoStar className="text-yellow-500" />
                                </span>
                                <span className="text-[12px]">{el.rating}</span>
                                <span className="text-[11px] text-gray-400">|</span>
                                <span className="text-[12px]">{el.reviews}</span>
                                <span>
                                    <img src={el.ratingIcon} alt="" className="h-[13px]" />
                                </span>
                            </p>
                        </div>
                        <button onClick={()=>postData("wireless-earbuds", el.id, GetAddCartData)} className="bg-black text-white w-32 py-2 font-medium text-[15px] rounded-xl">
                        Add To Cart
                        </button>
                    </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}