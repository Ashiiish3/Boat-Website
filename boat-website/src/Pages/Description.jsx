import axios from 'axios'
import React, { useEffect } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { NavLink, useParams } from 'react-router-dom'

export default function Description() {
    const {id} = useParams()
    console.log(id)
    const getData = async ()=>{
        try{
            const response = await axios.get(`http://localhost:3000/SliderData/smart-watches/`)
            console.log(response.data)
        }
        catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <div>
      <div className="w-[94rem] m-auto py-3">
      <h6 className="flex items-center text-[11px] text-gray-400"><NavLink to={"/"}>Home</NavLink> <IoIosArrowForward /> Description </h6>
        <div>
            <div></div>
            <div></div>
        </div>
      </div>
    </div>
  )
}
