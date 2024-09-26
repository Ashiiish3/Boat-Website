import React, { useContext } from "react";
import profile_img from "../Assets/Images/Profile-photo.png";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Services/Firebase";
import { getDataContext } from "../ContextApi/AddToCartContext";
import { IoClose } from "react-icons/io5";

export default function UserProfile() {
  const [user] = useAuthState(auth);
  const { showProfile, setShowProfile } = useContext(getDataContext);
  return (
    <>
      <div className="fixed left-0 right-0 top-0 bottom-0 z-100 w-full h-full" onClick={() => setShowProfile(!showProfile)}></div>
      <div className="flex flex-col items-center p-4 bg-white border border-gray-200 shadow-lg rounded-lg fixed right-56 top-[11%] z-10 transition-transform transform hover:scale-105">
        <span className="absolute top-3 right-3 cursor-pointer text-[20px] text-gray-600 hover:text-gray-800 p-1 rounded-full" onClick={() => setShowProfile(!showProfile)} style={{ backgroundColor: "#eff4f7" }}>
          <IoClose />
        </span>
        <div className="flex flex-col items-center">
          <img
            src={user.photoURL || profile_img}
            alt=""
            className="w-24 h-24 rounded-full mb-4 border-2 border-gray-300 shadow-md object-cover"
          />
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            Hi {user.displayName || "User"}!
          </h3>
          <p className="text-gray-700 text-sm mb-4">{user.email}</p>
          <button className="pt-1 pb-2 bg-black text-white rounded-lg transition w-full duration-200">
            Logout
          </button>
        </div>
      </div>
    </>
  );
}