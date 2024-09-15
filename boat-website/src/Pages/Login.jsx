import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import CreateAccount from "./CreateAccount";
import GoogleButton from "react-google-button";
import { auth, provider } from "../Services/Firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { getDataContext } from "../ContextApi/AddToCartContext";
import { IoClose } from "react-icons/io5";
import { useEffect } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSignUp, setShowSignUp] = useState(true);
  const { showLogin, setShowLogin } = useContext(getDataContext);
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);
  const SubmitLoginForm = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        alert("You are logged in Successfully.");
        setShowLogin(!showLogin);
        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        alert("No user found with matching email. Please Sign Up first.");
        setEmail("");
        setPassword("");
      });
  };
  const SubmitLoginFromGoogleButton = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        alert("You are logged in Successfully using Google.");
        setShowLogin(!showLogin);
      })
      .catch((err) => console.log(err));
  };
  const LoginForm = () => {
    return (
      <div className="px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex justify-center items-center relative">
          <span className="font-medium text-[24px] sm:text-[28px] md:text-[30px] mb-2">
            Login
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
          Please enter your Email and Password to continue
        </p>
        <form
          className="mt-5 mb-2 rounded-xl py-4 px-6 sm:px-10 md:px-16 lg:px-20"
          onSubmit={SubmitLoginForm}
        >
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
              className="border-[1px] px-2 h-[40px] sm:h-[45px] w-full rounded-md my-1"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              className="border-[1px] px-2 h-[40px] sm:h-[45px] w-full rounded-md my-1"
              placeholder="Enter Your Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-gray-300 py-2 sm:py-3 px-8 sm:px-10 md:px-14 my-2 uppercase font-medium rounded-xl"
          >
            Login
          </button>
          <p className="text-[18px] sm:text-[20px] text-gray-500 opacity-70 font-medium mt-2">
            Or
          </p>
          <div className="mt-4 w-[240px] sm:w-[220px] md:w-[240px] m-auto bg-red-400">
            <GoogleButton
              label="Login with Google"
              onClick={SubmitLoginFromGoogleButton}
            />
          </div>
        </form>
      </div>
    );
  };
  return (
    <>
      <div className="fixed left-0 right-0 top-0 bottom-0 z-10 bg-black opacity-50 w-full h-full"></div>
      <div className="form-box w-full sm:max-w-[80%] md:max-w-[70%] lg:max-w-[550px] z-10 rounded-xl border-[1px] bg-white p-4 sm:p-5">
        {showSignUp ? LoginForm() : <CreateAccount />}
        <div className="text-center mt-4">
          {showSignUp ? (
            <span>Don't have an Account? </span>
          ) : (
            <span>Already have an account? </span>
          )}
          <NavLink onClick={() => setShowSignUp(!showSignUp)}>
            <span className="text-gray-400 font-medium">
              {showSignUp ? "Sign Up" : "Log In"}
            </span>
          </NavLink>
        </div>
      </div>
    </>
  );
}