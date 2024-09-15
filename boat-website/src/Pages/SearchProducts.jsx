import React, { useContext } from 'react'
import { IoStar } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'
import { AddToCartContext, getDataContext } from '../ContextApi/AddToCartContext'
import SearchError from '../Components/SearchError'

export default function SearchProducts() {
  const {filterData} = useContext(AddToCartContext)
  const {postData, query, searchProductId, setSortOrder} = useContext(AddToCartContext)
  const {GetAddCartData} = useContext(getDataContext)

  localStorage.setItem("collection", searchProductId)
  const HandleSortChange = (e) => {
    setSortOrder(e.target.value);
  }
  return filterData == "" ? <SearchError /> : (
    <>
      <div className="text-start px-4">
        <div className="w-full lg:w-[94rem] m-auto py-3">
          <h6 className="flex items-center text-md mb-5">Showing Results <span className='ms-1 font-medium'>"{query}"</span></h6>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="border-[1px] bg-gray-100 p-2 rounded-lg w-full lg:w-48">
              <label className="sr-only" htmlFor="sort">Sort by</label>
              <select id="sort" className="w-full bg-transparent" onChange={HandleSortChange}>
                <option value="">Sort by Features</option>
                <option value="AtoZ">Alphabetically A-Z</option>
                <option value="ZtoA">Alphabetically Z-A</option>
                <option value="asc">Price, low to high</option>
                <option value="desc">Price, high to low</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 mt-5 gap-5 w-[100%]">
            {filterData.map((ele, ind) => (
              <div
                key={ind}
                className="flex rounded-lg border-[1px] p-1 pb-2 bg-gray-50 w-[100%]"
              >
                <div className="w-[190px] h-[190px]">
                  <NavLink to={`/Description/${ele.id}`}>
                    <img
                      src={ele.image}
                      alt=""
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </NavLink>
                </div>
                <div className="pt-2 mx-4 text-start w-64 flex flex-col justify-between">
                  <NavLink to={`/Description/${ele.id}`}>
                  <div className="border-b-[1px] pb-2">
                    <p className="flex items-center gap-1">
                      <span>
                        <IoStar className="text-yellow-500" />
                      </span>
                      <span className="text-[12px]">{ele.rating}</span>
                      <span className="text-[11px] text-gray-400">|</span>
                      <span className="text-[12px]">{ele.reviews}</span>
                      <span>
                        <img src={ele.ratingIcon} alt="" className="h-[13px]" />
                      </span>
                    </p>
                    <h3 className="text-sm lg:text-lg font-medium my-1">
                      {ele.name}
                    </h3>
                    <h4>
                      <span className="lg:text-lg font-medium">
                        ₹{ele.new_price}
                      </span> <span className="lg:text-sm line-through text-gray-400">
                        ₹{ele.old_price}
                      </span> <span className="text-green-500 font-medium lg:text-sm">
                        {ele.discount}
                      </span>
                    </h4>
                  </div>
                  </NavLink>
                  <button onClick={()=>postData(searchProductId, ele.id, GetAddCartData)} className="bg-black text-white w-full py-2 font-medium text-[15px] rounded-xl">
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}