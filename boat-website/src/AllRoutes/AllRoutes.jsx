import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Collection from "../Pages/Collection";
import Description from "../Pages/Description";
import AddToCart from "../Pages/AddToCart";
import PrivatePage from "../Pages/PrivatePage";
import SearchProducts from "../Pages/SearchProducts";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      {/* <Route path='/Login' element={<Login />} ></Route> */}
      <Route
        path="/Collection/:id"
        element={
          <PrivatePage>
            <Collection />
          </PrivatePage>
        }
      ></Route>
      <Route path="/Description/:id" element={<Description />}></Route>
      <Route path="/AddToCart" element={<AddToCart />}></Route>
      <Route path="/SearchProducts" element={<SearchProducts />}></Route>
      <Route path="*" element={<h1>Page is not Found</h1>}></Route>
    </Routes>
  );
}
