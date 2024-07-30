import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { IoStar } from 'react-icons/io5'
import Buttons from '../Components/Buttons';
import { getDataContext } from '../ContextApi/AddToCartContext';

export default function AddToCart() {
  const {GetAddCartData, addCartData, addCartLength} = useContext(getDataContext)
  useEffect(()=>{
    GetAddCartData()
  },[addCartLength])
  return (
    <div>
      <div className='w-[94rem] m-auto grid grid-cols-1 sm:grid-cols-3 mt-5 gap-5'>
        {addCartData.map((ele, ind)=>(
          <div
          key={ind}
          className="flex rounded-lg border-[1px] p-1 bg-gray-50">
          <div className="w-[190px] h-[190px]">
              <img
                src={ele.image_url}
                alt=""
                className="w-full h-full object-cover rounded-lg"
              />
          </div>
          <div className="pt-2 mx-4 text-start w-64 flex flex-col justify-between">
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
            <div>
              <Buttons id={ele.id} />
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}