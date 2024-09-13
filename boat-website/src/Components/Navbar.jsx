import React, { useContext, useEffect, useState } from "react";
import boatLogo from "../Assets/Images/Boat-logo.png";
import { NavLink } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { AddToCartContext, getDataContext } from "../ContextApi/AddToCartContext";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import Login from "../Pages/Login";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { GetAddCartData, addCartLength } = useContext(getDataContext)
  const { showLogin, setShowLogin } = useContext(getDataContext)
  const {setSearch, search} = useContext(AddToCartContext)
  const ChangeInputHandle = (event) => {
    setSearch(event.target.value);
  };
  const NavbarHandle = () => {
    setMenuOpen(!menuOpen)
    if(menuOpen){
      document.body.style.overflowY = "scroll";
    }
    else{
      document.body.style.overflowY = "hidden";
    }
  }
  useEffect(() => {
    GetAddCartData()
  }, [addCartLength])
  return (
    <>
      { menuOpen && <div className="fixed left-0 right-0 top-0 bottom-0 z-10 bg-black opacity-50 w-full h-full"></div>}
      <nav className="border-b-[1px] border-gray-300 sticky bg-white top-0 w-full z-10">
        <div className="w-[100%] lg:w-[94rem] h-[60px] lg:h-[82px] m-auto flex justify-between items-center px-3 lg:px-0">
          <div className="flex justify-between items-center gap-24">
            <div className="order-1 lg:order-none flex items-center gap-3">
              {menuOpen ? <RxCross2 className="menu-button" onClick={NavbarHandle} /> : <FiMenu className="menu-button"  onClick={NavbarHandle} /> }
              <NavLink to={"/"}><img src={boatLogo} alt="" className="h-[28px] lg:h-[30px]" /></NavLink>
            </div>
            {/* Navbar for large screens */}
            <div className="navbar hidden lg:flex lg:items-center gap-6">
              <NavLink className="hover:font-medium transition-all">Categories</NavLink>
              <NavLink className="hover:font-medium transition-all">boAt Personalisation</NavLink>
              <NavLink className="hover:font-medium transition-all">Gift with boAt</NavLink>
              <NavLink className="hover:font-medium transition-all">Corporate Orders</NavLink>
            </div>
          </div>
          <div className="flex justify-between items-center gap-2 lg:gap-5">
            <div className="flex justify-between items-center relative">
              <IoSearchOutline className="absolute left-2 text-md lg:text-xl" />
                <input
                  type="Search"
                  placeholder="Search Speakers"
                  className="bg-gray-100 text-[12px] lg:text-[16px] rounded-3xl py-2 px-7 lg:ps-8 pe-3 w-36 lg:w-72"
                  value={search}
                  onChange={ChangeInputHandle}
                />
            </div>
            <div className="flex gap-2 lg:gap-3">
              <NavLink onClick={() => setShowLogin(true)}>
                <IoPersonOutline className="text-xl" />
              </NavLink>
              <NavLink to={"/AddToCart"} className="relative">
                <HiOutlineShoppingBag className="text-xl" />
                <div className="absolute inline-flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-red-500 rounded-full -top-2 -end-2 p-2">{addCartLength}</div>
              </NavLink>
            </div>
          </div>
          {/* Navbar for small screens  */}
          <div className={`fixed top-14 left-0 h-full w-[95%] bg-white shadow-lg z-50 transform ${ menuOpen ? "translate-x-0" : "-translate-x-full" } transition-transform duration-300 lg:hidden`}>
            <div className="flex flex-col items-start p-6 gap-4">
              <NavLink className="font-medium transition-all">Categories</NavLink>
              <NavLink className="font-medium transition-all">boAt Personalisation</NavLink>
              <NavLink className="font-medium transition-all">Gift with boAt</NavLink>
              <NavLink className="font-medium transition-all">Corporate Orders</NavLink>
            </div>
          </div>
        </div>
        {showLogin && <Login />}
      </nav>
    </>
  );
}