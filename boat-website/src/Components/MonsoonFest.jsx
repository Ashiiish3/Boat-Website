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
      const response = await axios.get(`https://boat-website-json-server.onrender.com/SliderData/wireless-earbuds`);
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
      <div className="w-[100%] lg:w-[94rem] m-auto my-5 px-3 lg:p-0">
        <h1 className="text-start text-2xl font-medium mb-5 tracking-wide">
          <Link to={`/Collection/wireless-earbuds`} className="relative">
            Monsoon <span className="UnderLine font-extrabold">Fest</span>
          </Link>
        </h1>
        <div className="grid grid-flow-col gap-3 overflow-auto">
          {data.map((el, ind) => (
            <div key={ind} className="border-[1px] bg-gray-50 rounded-xl">
              <NavLink to={`/Description/${el.id}`}>
                <div className="w-[270px] h-[270px] lg:w-[365px] lg:h-[365px]">
                  <img
                    src={el.image}
                    alt=""
                    className="rounded-tl-xl rounded-tr-xl w-full h-full object-cover"
                  />
                </div>
              </NavLink>
                <div className="px-3 pt-3 lg:p-3 text-start">
                    <h1 className="font-medium mb-1">{el.name}</h1>
                    <div className="grid grid-flow-col justify-between">
                        <div>
                            <h4 className="mb-1">
                                <span className="text-[16px] lg:text-md font-medium">
                                    ₹{el.new_price}
                                </span>{" "}
                                <span className="text-[13px] lg:text-sm line-through text-gray-400">
                                    ₹{el.old_price}
                                </span>{" "}
                                <span className="text-[14px] text-green-500 font-medium lg:text-sm">
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
                        <button onClick={()=>postData("wireless-earbuds", el.id, GetAddCartData)} className="bg-black h-[40px] lg:h-auto text-white w-32 lg:py-2 font-medium text-[15px] rounded-xl">
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