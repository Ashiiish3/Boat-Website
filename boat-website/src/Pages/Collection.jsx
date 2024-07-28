import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { IoStar } from "react-icons/io5";

export default function Collection() {
  let { id } = useParams();
  const [productData, setProductData] = useState([]);
  const [title, setTitle] = useState("")
  const getData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/SliderData/${id}`
      );
      setTitle(response.data.title)
      setProductData(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="text-start">
      <div className="w-[94rem] m-auto py-3">
        <h6 className="flex items-center text-[11px] text-gray-400"><NavLink to={"/"}>Home</NavLink> <IoIosArrowForward /> {title}</h6>
        <h1 className="font-medium text-2xl mt-4 mb-8">{title}</h1>
        <div className="flex justify-between">
          <div className="border-[1px] bg-gray-100 p-2 rounded-lg">
            <select className="bg-transparent">
                <option value="">Filter By</option>
                <option value="">Alphabetically A-Z</option>
                <option value="">Alphabetically Z-A</option>
                <option value="">Price, low to high</option>
                <option value="">Price, high to low</option>
              </select>
          </div>
          <div className="border-[1px] bg-gray-100 p-2 rounded-lg"><span className="font-medium">Sort by :</span> <select className="bg-transparent">
              <option value="">Features</option>
              <option value="">Alphabetically A-Z</option>
              <option value="">Alphabetically Z-A</option>
              <option value="">Price, low to high</option>
              <option value="">Price, high to low</option>
            </select>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 mt-5 gap-5">
          {productData.map((ele, ind) => (
            <div
              key={ind}
              className="flex rounded-lg border-[1px] p-1 bg-gray-50"
            >
              <div className="w-[190px] h-[190px]">
                <NavLink to={`/Description/${ele.id}`}>
                  <img
                    src={ele.image_url}
                    alt=""
                    className="w-full h-full object-cover rounded-lg"
                  />
                </NavLink>
              </div>
              <div className="pt-2 mx-4 text-start w-64 flex flex-col justify-between">
                <NavLink to={`/Description/${ele.id}`}>
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
                  <h3 className="text-sm lg:text-lg font-medium my-1">
                    {ele.name}
                  </h3>
                  <h4>
                    <span className="lg:text-lg font-medium">
                      ₹{ele.new_price}
                    </span> <span className="lg:text-sm line-through text-gray-400">
                      ₹{ele.old_price}
                    </span> <span className="text-green-500 font-medium lg:text-sm">
                      {ele.discount}
                    </span>
                  </h4>
                </div>
                </NavLink>
                <button className="bg-black text-white w-full py-2 font-medium text-[15px] rounded-xl">
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