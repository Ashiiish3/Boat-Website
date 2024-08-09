import axios from "axios";
import { createContext, useState } from "react";

export const AddToCartContext = createContext();

export function AddToCartContextProvider({ children }) {
  const [input, setInput] = useState("")
  const postData = async (productId, id, GetAddCartData) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/SliderData/${productId}`
      );
      let filterData = response.data.products.find((ele) => ele.id === id);
      axios
        .post(`http://localhost:3000/Add-to-cart`, filterData)
        .then((res) => {
            alert("Product has been Added.")
            GetAddCartData()
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };
  const ChangeInputHandle = (value)=>{
    setInput(value)
    console.log(value)
  }
  return (
    <AddToCartContext.Provider value={{ postData, input, setInput, ChangeInputHandle}}>
      {children}
    </AddToCartContext.Provider>
  );
}

// get Data from add to cart
export const getDataContext = createContext();

export function GetDataContextProdiver({ children }) {
  const [addCartData, setAddCartData] = useState([]);
  const [addCartLength, setAddCartLength] = useState(0)
  const [showLogin, setShowLogin] = useState(false)
  const GetAddCartData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/Add-to-cart");
      setAddCartData(response.data);
      setAddCartLength(response.data.length);
    } catch (error) {
      console.log(error);
    }
  };
  return <getDataContext.Provider value={{GetAddCartData, addCartData, setAddCartData, addCartLength, setAddCartLength, showLogin, setShowLogin}}>{children}</getDataContext.Provider>;
}