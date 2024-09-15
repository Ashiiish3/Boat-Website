import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Collection from "../Pages/Collection";
import Description from "../Pages/Description";
import AddToCart from "../Pages/AddToCart";
import PrivatePage from "../Pages/PrivatePage";
import SearchProducts from "../Pages/SearchProducts";
import GiftWithBoat from "../Components/GiftWithBoat";
import CorporateOrder from "../Pages/CorporateOrder";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/SearchProducts" element={<SearchProducts />}></Route>
      <Route
        path="/Collection/:id"
        element={
          <PrivatePage>
            <Collection />
          </PrivatePage>
        }
      ></Route>
      <Route path="/Description/:id" element={
        <PrivatePage>
          <Description />
        </PrivatePage>
        }></Route>
      <Route path="/GiftWithBoat" element={<GiftWithBoat />}></Route>
      <Route path="/CorporateOrder" element={<CorporateOrder />}></Route>
      <Route path="/AddToCart" element={<AddToCart />}></Route>
      <Route path="*" element={<h1>Page is not Found</h1>}></Route>
    </Routes>
  );
}