import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { getDataContext } from "../ContextApi/AddToCartContext";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../Services/Firebase";

export default function PrivatePage({ children }) {
  const [user] = useAuthState(auth);
  const { setShowLogin } = useContext(getDataContext);
  if (!user) {
    return <Navigate to={"/"} element={setShowLogin(true)} />;
  }
  return children;
}