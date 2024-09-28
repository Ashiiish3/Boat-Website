import React, { useContext } from "react";
import profile_img from "../Assets/Images/Profile-photo.png";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Services/Firebase";
import { getDataContext } from "../ContextApi/AddToCartContext";
import { IoClose } from "react-icons/io5";
import { signOut } from "firebase/auth";

export default function UserProfile() {
  const [user] = useAuthState(auth);
  const { showProfile, setShowProfile } = useContext(getDataContext);
  const UserLogOut = () => {
    signOut(auth).then((res)=>{
      setShowProfile(false)
      alert("You are Logout successfully.")
    }).catch((err)=>console.log(err))
  }
  return (
    <>
      <div className="fixed left-0 right-0 top-0 bottom-0 z-100 w-full h-full" onClick={() => setShowProfile(!showProfile)}></div>
      <div className="flex flex-col items-center p-4 bg-white border border-gray-200 shadow-lg rounded-lg fixed right-1 top-[7.5%] z-10 transition-transform transform hover:scale-105 sm:right-4 xl:right-5 2xl:right-48 md:top-[7.5%]">
        <span
          className="absolute top-2 right-2 cursor-pointer text-[16px] sm:text-[20px] text-gray-600 hover:text-gray-800 p-1 rounded-full"
          onClick={() => setShowProfile(!showProfile)}
          style={{ backgroundColor: "#eff4f7" }}
        >
          <IoClose />
        </span>
        <div className="flex flex-col items-center">
          <img
            src={user.photoURL || profile_img}
            alt=""
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mb-4 border-2 border-gray-300 shadow-md object-cover"
          />
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
            Hi {user.displayName || "User"}!
          </h3>
          <p className="text-gray-700 text-xs sm:text-sm mb-4">{user.email}</p>
          <button className="py-1 px-4 sm:py-2 sm:px-6 bg-black text-white rounded-lg transition w-full duration-200" onClick={UserLogOut}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
}