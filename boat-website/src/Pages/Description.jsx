import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoStar } from "react-icons/io5";
import { NavLink, useParams } from "react-router-dom";
import { AddToCartContext, getDataContext } from "../ContextApi/AddToCartContext";

export default function Description() {
  const { id } = useParams();
  const [descriptionData, setDescriptionData] = useState([]);
  const [index, setIndex] = useState(0)
  const [currentColor, setCurrentColor] = useState([])
  let productsId = localStorage.getItem("collection");
  const { postData } = useContext(AddToCartContext)
  const { GetAddCartData } = useContext(getDataContext)
  const getData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/SliderData/${productsId}`);
      let filterData = response.data.products.find((ele) => ele.id === id);
      setDescriptionData(filterData)
      setCurrentColor(filterData.image_url[0])
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const getIndex = (i) => {
    setIndex(i)
  }
  const HandleColorChange = (el) => {
    setCurrentColor(el)
  }
  return (
    <div>
      <div className="w-[94rem] m-auto py-3">
        <h6 className="flex items-center text-[11px] text-gray-400">
          <NavLink to={"/"}>Home</NavLink> <IoIosArrowForward /> Description{" "}
        </h6>
        <div className="mt-5">
          <div className="grid grid-cols-2 gap-10">
            <div className="rounded-xl flex gap-5">
              <div className="h-[450px] gap-2 grid">
                {currentColor.images && currentColor.images.map((el, ind)=>(
                  <div key={ind} className="h-[80px] w-[80px] border-[1px] rounded-md p-1">
                    <img src={el} alt="" className="h-full w-full object-cover rounded-md cursor-pointer" onMouseEnter={()=>getIndex(ind)}/>
                  </div>
                ))}
              </div>
              <img src={currentColor.images && currentColor.images[index]} alt="" className="m-auto rounded-xl w-[90%] h-[600px] object-cover border-[1px] bg-[#E1E1E1]" />
            </div>
            <div className="text-start bg-red-400">
              <p className="flex items-center gap-1">
                <span>
                  <IoStar className="text-yellow-500" />
                </span>
                <span className="text-[15px]">{descriptionData.rating}</span>
                <span className="text-[14px] text-gray-400">|</span>
                <span className="text-[15px]">{descriptionData.reviews} Reviews</span>
                <span>
                  <img src={descriptionData.ratingIcon} alt="" className="h-[15px] mt-1" />
                </span>
              </p>
              <h3 className="text-sm lg:text-3xl font-medium my-1 mt-2">
                {descriptionData.name}
              </h3>
              <h4>
                <span className="lg:text-2xl font-medium">
                  ₹{descriptionData.new_price}
                </span>{" "}
                <span className="lg:text-md line-through text-gray-400 mx-1">
                  ₹{descriptionData.old_price}
                </span>{" "}
                <span className="text-green-500 font-medium lg:text-md">
                  {descriptionData.discount}
                </span>
              </h4>
              <div className="mt-5">
                <h1 className="mb-2"><span className="font-medium">Choose your colour :</span><span> {currentColor.colorName}</span></h1>
                {descriptionData.image_url && descriptionData.image_url.map((el, index) => (
                  <button key={index} className={`text-white h-[30px] w-[30px] rounded-full me-2`} style={{ backgroundColor: el.color }} onClick={() => HandleColorChange(el)}></button>
                ))}
              </div>
              <button onClick={() => postData(productsId, descriptionData.id, GetAddCartData)} className="bg-black text-white w-52 py-2 mt-10 font-medium text-[15px] rounded-xl">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}