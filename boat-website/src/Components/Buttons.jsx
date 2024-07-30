import axios from "axios";
import React, { useContext, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { TiMinus } from "react-icons/ti";
import { getDataContext } from "../ContextApi/AddToCartContext";

export default function Buttons({id}) {
  const [count, setCount] = useState(1);
  const {GetAddCartData} = useContext(getDataContext)
  const DeleteProduct = async (id) => {
    try {
        await axios.delete(`http://localhost:3000/Add-to-cart/${id}`);
        alert("Product has been deleted.")
        GetAddCartData()
      } catch (error) {
        console.log(error);
      }
  }
  return (
    <>
    <div className="my-2 flex justify-between items-center w-52 m-auto">
      <button
        className="bg-black text-white py-2 w-14 text-[20px] rounded-xl text-center"
        disabled={count == 1}
        onClick={() => setCount(count - 1)}
      >
        <TiMinus className="m-auto" />
      </button>
      <button className="bg-black text-white py-2 w-14 text-[13px] rounded-xl">
        {count}
      </button>
      <button
        className="bg-black text-white py-2 w-14 text-[20px] rounded-xl"
        onClick={() => setCount(count + 1)}
      >
        <FiPlus className="m-auto" />
      </button>
    </div>
    <div className="w-52 m-auto">
        <button onClick={()=>DeleteProduct(id)} className="bg-black text-white w-full rounded-xl py-2 mb-2 font-medium">Delete</button>
    </div>
    </>
  );
}