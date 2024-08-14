import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export const AddToCartContext = createContext();

export function AddToCartContextProvider({ children }) {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const postData = async (productId, id, GetAddCartData) => {
    try {
      const response = await axios.get(
        `https://boat-website-json-server.onrender.com/SliderData/${productId}`
      );
      let filterData = response.data.products.find((ele) => ele.id === id);
      axios
        .post(
          `https://boat-website-json-server.onrender.com/Add-to-cart`,
          filterData
        )
        .then((res) => {
          alert("Product has been Added.");
          GetAddCartData();
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };
  const getSliderData = async () => {
    try {
      const response = await axios.get(
        "https://boat-website-json-server.onrender.com/SliderData"
      );
      setResults(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // Filter the results based on the query
    setTimeout(() => {
      getSliderData();
      const filtered = results
        .filter((item) => item.title.toLowerCase().includes(search))
        .map((ele) => console.log(ele.products));
      console.log(filtered);
    }, 2000);
  }, [search]);
  const ChangeInputHandle = (event) => {
    setSearch(event.target.value);
  };
  return (
    <AddToCartContext.Provider
      value={{ postData, search, setSearch, ChangeInputHandle }}
    >
      {children}
    </AddToCartContext.Provider>
  );
}

// get Data from add to cart
export const getDataContext = createContext();

export function GetDataContextProvider({ children }) {
  const [addCartData, setAddCartData] = useState([]);
  const [addCartLength, setAddCartLength] = useState(0);
  const [showLogin, setShowLogin] = useState(false);
  const GetAddCartData = async () => {
    try {
      const response = await axios.get(
        "https://boat-website-json-server.onrender.com/Add-to-cart"
      );
      setAddCartData(response.data);
      setAddCartLength(response.data.length);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <getDataContext.Provider
      value={{
        GetAddCartData,
        addCartData,
        setAddCartData,
        addCartLength,
        setAddCartLength,
        showLogin,
        setShowLogin,
      }}
    >
      {children}
    </getDataContext.Provider>
  );
}
