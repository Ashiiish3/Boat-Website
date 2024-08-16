import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import SearchProducts from "../Pages/SearchProducts";
import Home from "../Pages/Home";

export const AddToCartContext = createContext();

export function AddToCartContextProvider({ children }) {
  const [search, setSearch] = useState("");
  const [searchProductId, setSearchProductId] = useState("");
  const [filterData, setFilterData] = useState([]);
  const query = new URLSearchParams(useLocation().search).get("q");
  const navigate = useNavigate();
  const postData = async (productId, id, GetAddCartData) => {
    console.log(productId)
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
  // data get for search button
  const getSliderData = async () => {
    try {
      const response = await axios.get(
        `https://boat-website-json-server.onrender.com/SliderData`,
        {
          params: {
            q: search,
          },
        }
      );
      response.data.map((ele) =>{
        setSearchProductId(ele.id)
        setFilterData(ele.products)
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const unlisten = window.addEventListener("popstate", () => {
      setSearch("");
    });
    return () => {
      window.removeEventListener("popstate", unlisten);
    };
  }, []);
  useEffect(() => {
    if (search !== "") {
      let timeOut = setTimeout(() => {
        getSliderData();
        navigate(`/SearchProducts?q=${search}`);
      }, 1000);
      return () => {
        clearTimeout(timeOut);
      };
    } else {
      navigate(`/`);
    }
  }, [search]);
  return (
    <AddToCartContext.Provider
      value={{ postData, search, setSearch, filterData, query, setFilterData, searchProductId, setSearchProductId }}
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
