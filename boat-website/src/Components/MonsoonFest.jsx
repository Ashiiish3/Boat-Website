import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function MonsoonFest() {
    const [data, setData]= useState([])
    const getData = async ()=>{
        try{
            const response = await axios.get(`http://localhost:3000/SliderData/wireless-earbuds`)
            setData(response.data.products)
            console.log(response.data.products)
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
        <div className='w-[94rem] m-auto'>
            <div>
                {data.map((el, ind)=>(
                    <div key={ind}>
                        
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
