import React, { useContext, useState } from "react";
import { auth } from "../Services/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth/cordova";
import { getDataContext } from "../ContextApi/AddToCartContext";
import { IoClose } from "react-icons/io5";

export default function CreateAccount() {
  const signUpObj = {
    name: "",
    email: "",
    password: "",
  };
  const { showLogin, setShowLogin } = useContext(getDataContext);
  const [signUpData, setSignUpData] = useState(signUpObj);
  const { name, email, password } = signUpData;
  const HandleChange = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };
  const SubmitSignUpForm = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setShowLogin(!showLogin);
        alert("Your Account has been Created.");
        setSignUpData(signUpObj);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="flex justify-center items-center relative">
        <span className="font-medium text-[24px] sm:text-[28px] md:text-[30px] mb-2">
          Sign Up
        </span>
        <span
          className="absolute right-0 text-[18px] sm:text-[20px] md:text-[22px] p-2 rounded-full cursor-pointer"
          style={{ backgroundColor: "#eff4f7" }}
          onClick={() => setShowLogin(!showLogin)}
        >
          <IoClose />
        </span>
      </div>
      <p className="text-center text-[14px] sm:text-[16px] md:text-[18px]">
        Please enter all your details to create an account
      </p>
      <form
        className="mt-5 mb-2 rounded-xl py-4 px-6 sm:px-10 md:px-16 lg:px-20"
        onSubmit={(e) => SubmitSignUpForm(e)}
      >
        <div className="text-start my-2">
          <label
            htmlFor="name"
            className="block text-[14px] sm:text-[16px] md:text-[18px]"
          >
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => HandleChange(e)}
            className="border-[1px] px-2 h-[40px] sm:h-[45px] w-full rounded-md my-1"
            placeholder="Enter Your Name"
            required
          />
        </div>
        <div className="text-start my-2">
          <label
            htmlFor="email"
            className="block text-[14px] sm:text-[16px] md:text-[18px]"
          >
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => HandleChange(e)}
            className="border-[1px] px-2 h-[40px] sm:h-[45px] w-full rounded-md my-1"
            placeholder="Enter Your Email"
            required
          />
        </div>
        <div className="text-start my-2">
          <label
            htmlFor="password"
            className="block text-[14px] sm:text-[16px] md:text-[18px]"
          >
            Password:
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => HandleChange(e)}
            className="border-[1px] px-2 h-[40px] sm:h-[45px] w-full rounded-md my-1"
            placeholder="Enter Your Password"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-gray-300 py-2 sm:py-3 px-8 sm:px-10 md:px-14 my-2 uppercase font-medium rounded-xl"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}