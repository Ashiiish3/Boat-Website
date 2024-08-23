import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AddToCartContext = createContext();

export function AddToCartContextProvider({ children }) {
  const [search, setSearch] = useState("");
  const [searchProductId, setSearchProductId] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [sortOrder, setSortOrder] = useState('');
  const query = new URLSearchParams(useLocation().search).get("q");
  const location = useLocation()
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
  // get data for search button
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
        if(sortOrder === ''){
          setFilterData(ele.products)
        }
        let sortedProducts = [...ele.products];
        if (sortOrder === "asc") {
          sortedProducts.sort((a, b) => a.new_price.replace(/,/g, '') - b.new_price.replace(/,/g, ''));
        } else if (sortOrder === "desc") {
          sortedProducts.sort((a, b) => b.new_price.replace(/,/g, '') - a.new_price.replace(/,/g, ''));
        } else if (sortOrder === "AtoZ") {
          sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortOrder === "ZtoA") {
          sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        }
        setFilterData(sortedProducts)
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
      if(location.pathname === '/'){
        setSearch("");
      }
  }, [location.pathname]);
  useEffect(() => {
    if (search !== "") {
      let timeOut = setTimeout(() => {
        getSliderData();
        navigate(`/SearchProducts?q=${search}`);
        setFilterData([])
      }, 1000);
      return () => {
        clearTimeout(timeOut);
      };
    } else {
      navigate(`/`);
    }
  }, [search]);
  useEffect(()=>{
    getSliderData();
  },[sortOrder])
  return (
    <AddToCartContext.Provider
      value={{ postData, search, setSearch, filterData, query, setFilterData, searchProductId, setSearchProductId, sortOrder, setSortOrder }}
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