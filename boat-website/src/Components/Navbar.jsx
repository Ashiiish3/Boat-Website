import React, { useContext, useEffect, useState } from "react";
import boatLogo from "../Assets/Images/Boat-logo.png";
import { NavLink } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { AddToCartContext, getDataContext } from "../ContextApi/AddToCartContext";
import Login from "../Pages/Login";

export default function Navbar() {
  const { GetAddCartData, addCartLength } = useContext(getDataContext)
  const { showLogin, setShowLogin } = useContext(getDataContext)
  const {ChangeInputHandle} = useContext(AddToCartContext)
  useEffect(() => {
    GetAddCartData()
  }, [addCartLength])
  return (
    <nav className="border-b-[1px] border-gray-300 sticky bg-white top-0 w-full z-10">
      <div className="w-[94rem] h-[82px] m-auto flex justify-between items-center">
        <div className="flex justify-between items-center">
          <div className="me-24">
            <NavLink to={"/"}><img src={boatLogo} alt="" height={80} width={80} /></NavLink>
          </div>
          <div className="flex justify-between items-center gap-6">
            <NavLink className="hover:font-medium transition-all">Categories</NavLink>
            <NavLink className="hover:font-medium transition-all">boAt Personalisation</NavLink>
            <NavLink className="hover:font-medium transition-all">Gift with boAt</NavLink>
            <NavLink className="hover:font-medium transition-all">Corporate Orders</NavLink>
            <NavLink className="hover:font-medium transition-all">More</NavLink>
          </div>
        </div>
        <div className="flex justify-between items-center gap-5">
          <div className="flex justify-between items-center relative">
            <IoSearchOutline className="absolute left-2 text-xl" />
            <input
              type="Search"
              placeholder="Search Speakers"
              className="bg-gray-100 rounded-3xl py-2 ps-8 pe-3 w-72"
              onChange={(e)=>ChangeInputHandle(e.target.value)}
            />
          </div>
          <div className="flex gap-3">
            <NavLink onClick={() => setShowLogin(true)}>
              <IoPersonOutline className="text-xl" />
            </NavLink>
            <NavLink to={"/AddToCart"} className="relative" >
              <HiOutlineShoppingBag className="text-xl" />
              <div className="absolute inline-flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-red-500 rounded-full -top-2 -end-2 p-2">{addCartLength}</div>
            </NavLink>
          </div>
        </div>
      </div>
      {showLogin && <Login />}
    </nav>
  );
}