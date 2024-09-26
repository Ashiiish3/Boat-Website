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
import profile_img from '../Assets/Images/Profile-photo.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../Services/Firebase";
import UserProfile from "../Pages/UserProfile";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const {GetAddCartData, addCartLength, showLogin, setShowLogin, showProfile, setShowProfile } = useContext(getDataContext)
  const {setSearch, search} = useContext(AddToCartContext)
  const [activeIndex, setActiveIndex] = useState(null);
  const [user] = useAuthState(auth);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
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

  const [showCategories, setShowCategories] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    let timer;
    if (!isHovered) {
      timer = setTimeout(() => setShowCategories(false), 200);
    } else {
      setShowCategories(true);
    }
    return () => clearTimeout(timer);
  }, [isHovered]);
  useEffect(() => {
    GetAddCartData()
  }, [addCartLength])
  return (
    <>
      { menuOpen && <div className="fixed left-0 right-0 top-0 bottom-0 z-10 bg-black opacity-50 w-full h-full"></div>}
      <nav className="border-b-[1px] border-gray-300 sticky bg-white top-0 w-full z-10 lg:px-3">
        <div className="relative w-[100%] lg:w-[94rem] h-[60px] lg:h-[82px] m-auto flex justify-between items-center px-3 lg:px-0">
          <div className="flex justify-between items-center gap-24">
            <div className="order-1 lg:order-none flex items-center gap-3">
              {menuOpen ? <RxCross2 className="menu-button" onClick={NavbarHandle} /> : <FiMenu className="menu-button"  onClick={NavbarHandle} /> }
              <NavLink to={"/"}><img src={boatLogo} alt="" className="h-[28px] lg:h-[30px]" /></NavLink>
            </div>
            {/* Navbar for large screens */}
            <div className="navbar hidden lg:flex lg:items-center gap-6">
              <div
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  >
                  <p className="hover:font-medium transition-all cursor-pointer">
                    Categories
                  </p>
                  {showCategories && (
                    <ul className="bg-white absolute top-20 left-0 right-0 grid grid-cols-5 gap-4 p-8 w-[100%] border-[1px] border-gray-300">
                      <li><NavLink className="flex items-center justify-start" to="/Collection/wireless-earbuds" onClick={()=>setIsHovered(false)}><img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/32011675-2ad8-4b99-9787-895caf201d28_600x.png?v=1642405569" alt="" className="w-10 me-3" /><p>True Wireless Earbuds</p></NavLink></li>
                      <li><NavLink className="flex items-center justify-start" to="/Collection/neckbands" onClick={()=>setIsHovered(false)}><img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Artboard4_b8ab8e06-45ab-40be-b6da-c35a63ff5bd3_600x.png?v=1713177293" alt="" className="w-10 me-3" /><p>Neckbands</p></NavLink></li>
                      <li><NavLink className="flex items-center justify-start" to="/Collection/smart-watches" onClick={()=>setIsHovered(false)}><img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Chronos_Leather__5_-removebg-preview_500x.png?v=1690528562" alt="" className="w-10 me-3" /><p>Smart Watches</p></NavLink></li>
                      <li><NavLink className="flex items-center justify-start" to="/Collection/headphones" onClick={()=>setIsHovered(false)}><img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_b6563f96-f1a1-4915-b686-d4e37232ec3c_600x.png?v=1685707922" alt="" className="w-10 me-3" /><p>Wireless Headphones</p></NavLink></li>
                      <li><NavLink className="flex items-center justify-start" to="/Collection/wireless-speakers" onClick={()=>setIsHovered(false)}><img src="https://www.boat-lifestyle.com/cdn/shop/products/main-1_35ca2d35-3e30-49ec-bb17-dc55a1abc589_600x.png?v=1640073282" alt="" className="w-10 me-3" /><p>Wireless Speakers</p></NavLink></li>

                      <li><NavLink className="flex items-center justify-start" to="/Collection/neckbands" onClick={()=>setIsHovered(false)}><img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_ab6a4439-77fc-4cc9-a63a-33368391fed7_600x.png?v=1646987536" alt="" className="w-10 me-3" /><p>Wired Earphones</p></NavLink></li>
                      <li><NavLink className="flex items-center justify-start" to="/Collection/headphones" onClick={()=>setIsHovered(false)}><img src="https://www.boat-lifestyle.com/cdn/shop/products/450im_600x.png?v=1639990280" alt="" className="w-10 me-3" /><p>Wired Headphones</p></NavLink></li>
                      <li><NavLink className="flex items-center justify-start" to="/Collection/smart-watches" onClick={()=>setIsHovered(false)}><img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/LunarConnect-FI_Black01_299d178c-7551-448a-bf0b-0c1d07b2e75e_600x.png?v=1695812751" alt="" className="w-10 me-3" /><p>Stylish Watches</p></NavLink></li>
                      <li><NavLink className="flex items-center justify-start" to="/Collection/wireless-speakers" onClick={()=>setIsHovered(false)}><img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/e4faf0d0-1ce3-4a3c-8825-fbf5487b6611_600x.png?v=1625045119" alt="" className="w-10 me-3" /><p>Party Speakers</p></NavLink></li>
                    </ul>
                  )}
                </div>
              <NavLink className="hover:font-medium transition-all" to={'/Collection/smart-watches'}>boAt Personalisation</NavLink>
              <NavLink className="hover:font-medium transition-all" to={'/GiftWithBoat'}>Gift with boAt</NavLink>
              <NavLink className="hover:font-medium transition-all" to={'/CorporateOrder'}>Corporate Orders</NavLink>
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
            <div className="flex items-center gap-2 lg:gap-3">
              {
              user ? <img src={user.photoURL || profile_img } className="w-7 h-7 cursor-pointer rounded-full border-2 border-gray-300 shadow-lg object-cover" onClick={()=>setShowProfile(true)} /> : <NavLink onClick={() => setShowLogin(true)}>
                <IoPersonOutline className="text-xl" />
              </NavLink>
              }
              <NavLink to={"/AddToCart"} className="relative">
                <HiOutlineShoppingBag className="text-xl" />
                <div className="absolute inline-flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-red-500 rounded-full -top-2 -end-2 p-2">{addCartLength}</div>
              </NavLink>
            </div>
          </div>
          {/* Navbar for small screens  */}
          <div className={`fixed top-14 left-0 h-full w-[95%] bg-white shadow-lg z-50 transform ${ menuOpen ? "translate-x-0" : "-translate-x-full" } transition-transform duration-300 lg:hidden`}>
            <div className="flex flex-col items-start p-6 gap-4">
              <div className="font-medium transition-all w-full">
                <button onClick={()=>toggleAccordion(1)} className="w-full flex justify-between items-center text-slate-800">
                  <span>Categories</span>
                  <span id="icon-1" className="text-slate-800 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                      <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                    </svg>
                  </span>
                </button>
                <div id="content-1" className={`overflow-hidden transition-max-height overflow-y-scroll duration-300 ${activeIndex === 1 ? "max-h-96" : "max-h-0"}`}>
                  <div className="pb-5 text-sm text-slate-500">
                    <ul className="grid grid-cols-3 mt-5 gap-5">
                      <li><NavLink className="text-center" to="/Collection/wireless-earbuds" onClick={NavbarHandle}><img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/32011675-2ad8-4b99-9787-895caf201d28_600x.png?v=1642405569" alt="" className="w-16 m-auto" /><p>True Wireless Earbuds</p></NavLink></li>
                      <li><NavLink className="text-center" to="/Collection/neckbands" onClick={NavbarHandle}><img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Artboard4_b8ab8e06-45ab-40be-b6da-c35a63ff5bd3_600x.png?v=1713177293" alt="" className="w-16 m-auto" /><p>Neckbands</p></NavLink></li>
                      <li><NavLink className="text-center" to="/Collection/smart-watches" onClick={NavbarHandle}><img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Chronos_Leather__5_-removebg-preview_500x.png?v=1690528562" alt="" className="w-16 m-auto" /><p>Smart Watches</p></NavLink></li>
                      <li><NavLink className="text-center" to="/Collection/headphones" onClick={NavbarHandle}><img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_b6563f96-f1a1-4915-b686-d4e37232ec3c_600x.png?v=1685707922" alt="" className="w-16 m-auto" /><p>Wireless Headphones</p></NavLink></li>
                      <li><NavLink className="text-center" to="/Collection/wireless-speakers" onClick={NavbarHandle}><img src="https://www.boat-lifestyle.com/cdn/shop/products/main-1_35ca2d35-3e30-49ec-bb17-dc55a1abc589_600x.png?v=1640073282" alt="" className="w-16 m-auto" /><p>Wireless Speakers</p></NavLink></li>

                      <li><NavLink className="text-center" to="/Collection/neckbands" onClick={NavbarHandle}><img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_ab6a4439-77fc-4cc9-a63a-33368391fed7_600x.png?v=1646987536" alt="" className="w-16 m-auto" /><p>Wired Earphones</p></NavLink></li>
                      <li><NavLink className="text-center" to="/Collection/headphones" onClick={NavbarHandle}><img src="https://www.boat-lifestyle.com/cdn/shop/products/450im_600x.png?v=1639990280" alt="" className="w-16 m-auto" /><p>Wired Headphones</p></NavLink></li>
                      <li><NavLink className="text-center" to="/Collection/smart-watches" onClick={NavbarHandle}><img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/LunarConnect-FI_Black01_299d178c-7551-448a-bf0b-0c1d07b2e75e_600x.png?v=1695812751" alt="" className="w-16 m-auto" /><p>Stylish Watches</p></NavLink></li>
                      <li><NavLink className="text-center" to="/Collection/wireless-speakers" onClick={NavbarHandle}><img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/e4faf0d0-1ce3-4a3c-8825-fbf5487b6611_600x.png?v=1625045119" alt="" className="w-16 m-auto" /><p>Party Speakers</p></NavLink></li>
                    </ul>
                  </div>
                </div>
              </div>
              <NavLink className="font-medium transition-all w-full text-start" to={'/Collection/smart-watches'} onClick={NavbarHandle}>boAt Personalisation</NavLink>
              <NavLink className="font-medium transition-all w-full text-start" to={'/GiftWithBoat'} onClick={NavbarHandle}>Gift with boAt</NavLink>
              <NavLink className="font-medium transition-all w-full text-start" to={'/CorporateOrder'} onClick={NavbarHandle}>Corporate Orders</NavLink>
            </div>
          </div>
        </div>
        {showLogin && <Login />}
        {showProfile && <UserProfile />}
      </nav>
    </>
  );
}