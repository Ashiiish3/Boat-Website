import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { IoStar } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import { AddToCartContext, getDataContext } from '../ContextApi/AddToCartContext';

export default function BoatNavTabs() {
  const [toggle, setToggle] = useState(1)
  const [bestSellerData, setBestSellerData] = useState([])
  const [getId, setGetId] = useState("wireless-earbuds")
  const {postData} = useContext(AddToCartContext)
  const {GetAddCartData} = useContext(getDataContext)
  localStorage.setItem("collection", getId);
  const ChangeIndex = (index, id)=>{
    setToggle(index)
    setGetId(id)
  }
  const getData = async () => {
    try {
      const response = await axios.get(`https://boat-website-json-server.onrender.com/SliderData/${getId}`);
      let filterData = response.data.products.filter((ele, ind) => {
        if (ind > 4 && ind < 9) {
          return ele;
        }
      });
      setBestSellerData(filterData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, [getId]);
  return (
    <div className="lg:w-[94rem] m-auto my-10 px-3 lg:p-0">
      <h1 className="text-start text-2xl font-medium mb-5 tracking-wide">
        Best of{" "}
        <span className="UnderLine relative font-extrabold">boAt</span>
      </h1>
      <div>
        <div className='flex items-center gap-4 lg:gap-8 text-gray-600 w-[100%] overflow-auto whitespace-nowrap'>
          <p className={`${toggle === 1 ? "tabs Active-Tab" : "tabs"} text-[12px] lg:text-[16px]`} onClick={()=>ChangeIndex(1, "wireless-earbuds")}>Top Earbuds</p>
          <p className={`${toggle === 2 ? "tabs Active-Tab" : "tabs"} text-[12px] lg:text-[16px]`} onClick={()=>ChangeIndex(2, "wireless-speakers")}>Home Theatre Systems & Soundbars</p>
          <p className={`${toggle === 3 ? "tabs Active-Tab" : "tabs"} text-[12px] lg:text-[16px]`} onClick={()=>ChangeIndex(3, "neckbands")}>Best Seller</p>
          <p className={`${toggle === 4 ? "tabs Active-Tab" : "tabs"} text-[12px] lg:text-[16px]`} onClick={()=>ChangeIndex(4, "smart-watches")}>Top Watches</p>
          <p className={`${toggle === 5 ? "tabs Active-Tab" : "tabs"} text-[12px] lg:text-[16px]`} onClick={()=>ChangeIndex(5, "headphones")}>Best Headphones</p>
        </div>
        <div>
          <div className={`${toggle === 1 ? "content active-content" : "content"} grid grid-flow-col gap-3 mt-5 overflow-auto`}>
            {bestSellerData.map((ele, i)=>(
              <div key={i} className="border-[1px] bg-gray-50 rounded-xl">
              <NavLink to={`/Description/${ele.id}`}>
                <div className="w-[270px] h-[270px] lg:w-[365px] lg:h-[365px]">
                  <img
                    src={ele.image}
                    alt=""
                    className="rounded-tl-xl rounded-tr-xl w-full h-full object-cover"
                  />
                </div>
              </NavLink>
                <div className="p-3 text-start">
                    <h1 className="font-medium mb-1">{ele.name}</h1>
                    <div className="grid grid-flow-col justify-between">
                        <div>
                            <h4 className="mb-1">
                                <span className="text-[16px] lg:text-md font-medium">
                                    ₹{ele.new_price}
                                </span>{" "}
                                <span className="text-[13px] lg:text-sm line-through text-gray-400">
                                    ₹{ele.old_price}
                                </span>{" "}
                                <span className="text-[14px] text-green-500 font-medium lg:text-sm">
                                    {ele.discount}
                                </span>
                            </h4>
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
                        </div>
                        <button onClick={()=>postData("wireless-earbuds", ele.id, GetAddCartData)} className="bg-black h-[40px] text-white w-32 py-2 font-medium text-[15px] rounded-xl">
                        Add To Cart
                        </button>
                    </div>
                </div>
            </div>
            ))}
          </div>
          <div className={`${toggle === 2 ? "content active-content" : "content"} grid grid-flow-col gap-3 mt-5 overflow-auto`}>
          {bestSellerData.map((ele, i)=>(
              <div key={i} className="border-[1px] bg-gray-50 rounded-xl">
              <NavLink to={`/Description/${ele.id}`}>
                <div className="w-[270px] h-[270px] lg:w-[365px] lg:h-[365px]">
                  <img
                    src={ele.image}
                    alt=""
                    className="rounded-tl-xl rounded-tr-xl w-full h-full object-cover"
                  />
                </div>
              </NavLink>
                <div className="p-3 text-start">
                    <h1 className="font-medium mb-1">{ele.name}</h1>
                    <div className="grid grid-flow-col justify-between">
                        <div>
                            <h4 className="mb-1">
                                <span className="text-[16px] lg:text-md font-medium">
                                    ₹{ele.new_price}
                                </span>{" "}
                                <span className="text-[13px] lg:text-sm line-through text-gray-400">
                                    ₹{ele.old_price}
                                </span>{" "}
                                <span className="text-[14px] text-green-500 font-medium lg:text-sm">
                                    {ele.discount}
                                </span>
                            </h4>
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
                        </div>
                        <button onClick={()=>postData(getId, ele.id, GetAddCartData)} className="bg-black h-[40px] text-white w-32 py-2 font-medium text-[15px] rounded-xl">
                        Add To Cart
                        </button>
                    </div>
                </div>
            </div>
            ))}
          </div>
          <div className={`${toggle === 3 ? "content active-content" : "content"} grid grid-flow-col gap-3 mt-5 overflow-auto`}> 
          {bestSellerData.map((ele, i)=>(
              <div key={i} className="border-[1px] bg-gray-50 rounded-xl">
              <NavLink to={`/Description/${ele.id}`}>
                <div className="w-[270px] h-[270px] lg:w-[365px] lg:h-[365px]">
                  <img
                    src={ele.image}
                    alt=""
                    className="rounded-tl-xl rounded-tr-xl w-full h-full object-cover"
                  />
                </div>
              </NavLink>
                <div className="p-3 text-start">
                    <h1 className="font-medium mb-1">{ele.name}</h1>
                    <div className="grid grid-flow-col justify-between">
                        <div>
                            <h4 className="mb-1">
                                <span className="text-[16px] lg:text-md font-medium">
                                    ₹{ele.new_price}
                                </span>{" "}
                                <span className="text-[13px] lg:text-sm line-through text-gray-400">
                                    ₹{ele.old_price}
                                </span>{" "}
                                <span className="text-[14px] text-green-500 font-medium lg:text-sm">
                                    {ele.discount}
                                </span>
                            </h4>
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
                        </div>
                        <button onClick={()=>postData(getId, ele.id, GetAddCartData)} className="bg-black h-[40px] text-white w-32 py-2 font-medium text-[15px] rounded-xl">
                        Add To Cart
                        </button>
                    </div>
                </div>
            </div>
            ))}
          </div>
          <div className={`${toggle === 4 ? "content active-content" : "content"} grid grid-flow-col gap-3 mt-5 overflow-auto`}>
          {bestSellerData.map((ele, i)=>(
              <div key={i} className="border-[1px] bg-gray-50 rounded-xl">
              <NavLink to={`/Description/${ele.id}`}>
                <div className="w-[270px] h-[270px] lg:w-[365px] lg:h-[365px]">
                  <img
                    src={ele.image}
                    alt=""
                    className="rounded-tl-xl rounded-tr-xl w-full h-full object-cover"
                  />
                </div>
              </NavLink>
                <div className="p-3 text-start">
                    <h1 className="font-medium mb-1">{ele.name}</h1>
                    <div className="grid grid-flow-col justify-between">
                        <div>
                            <h4 className="mb-1">
                                <span className="text-[16px] lg:text-md font-medium">
                                    ₹{ele.new_price}
                                </span>{" "}
                                <span className="text-[13px] lg:text-sm line-through text-gray-400">
                                    ₹{ele.old_price}
                                </span>{" "}
                                <span className="text-[14px] text-green-500 font-medium lg:text-sm">
                                    {ele.discount}
                                </span>
                            </h4>
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
                        </div>
                        <button onClick={()=>postData(getId, ele.id, GetAddCartData)} className="bg-black h-[40px] text-white w-32 py-2 font-medium text-[15px] rounded-xl">
                        Add To Cart
                        </button>
                    </div>
                </div>
            </div>
            ))}
          </div>
          <div className={`${toggle === 5 ? "content active-content" : "content"} grid grid-flow-col gap-3 mt-5 overflow-auto`}>
          {bestSellerData.map((ele, i)=>(
              <div key={i} className="border-[1px] bg-gray-50 rounded-xl">
              <NavLink to={`/Description/${ele.id}`}>
                <div className="w-[270px] h-[270px] lg:w-[365px] lg:h-[365px]">
                  <img
                    src={ele.image}
                    alt=""
                    className="rounded-tl-xl rounded-tr-xl w-full h-full object-cover"
                  />
                </div>
              </NavLink>
                <div className="p-3 text-start">
                    <h1 className="font-medium mb-1">{ele.name}</h1>
                    <div className="grid grid-flow-col justify-between">
                        <div>
                            <h4 className="mb-1">
                                <span className="text-[16px] lg:text-md font-medium">
                                    ₹{ele.new_price}
                                </span>{" "}
                                <span className="text-[13px] lg:text-sm line-through text-gray-400">
                                    ₹{ele.old_price}
                                </span>{" "}
                                <span className="text-[14px] text-green-500 font-medium lg:text-sm">
                                    {ele.discount}
                                </span>
                            </h4>
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
                        </div>
                        <button onClick={()=>postData(getId, ele.id, GetAddCartData)} className="bg-black h-[40px] text-white w-32 py-2 font-medium text-[15px] rounded-xl">
                        Add To Cart
                        </button>
                    </div>
                </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}