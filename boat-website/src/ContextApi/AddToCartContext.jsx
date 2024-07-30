import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AddToCartContext = createContext();

export function AddToCartContextProvider({ children }) {
  const postData = async (productId, id, GetAddCartData) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/SliderData/${productId}`
      );
      let filterData = response.data.products.filter((ele) => ele.id === id);
      axios
        .post(`http://localhost:3000/Add-to-cart`, filterData[0])
        .then((res) => {
            alert("Product has been Added.")
            GetAddCartData()
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AddToCartContext.Provider value={{ postData }}>
      {children}
    </AddToCartContext.Provider>
  );
}

// get Data from add to cart
export const getDataContext = createContext();

export function GetDataContextProdiver({ children }) {
  const [addCartData, setAddCartData] = useState([]);
  const [addCartLength, setAddCartLength] = useState(1)
  const GetAddCartData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/Add-to-cart");
      setAddCartData(response.data);
      setAddCartLength(response.data.length);
    } catch (error) {
      console.log(error);
    }
  };
  return <getDataContext.Provider value={{GetAddCartData, addCartData, setAddCartData, addCartLength, setAddCartLength}}>{children}</getDataContext.Provider>;
}