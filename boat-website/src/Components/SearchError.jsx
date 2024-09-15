import React, { useEffect, useState } from 'react'
import errorImage from '../Assets/Images/search_error_image.svg'
import LoaingImage from '../Assets/Images/Boat-Loader.gif'

export default function SearchError() {
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    setInterval(() => {
      setLoading(false)
    }, 1500);
  },[])

  return loading ? <p><img src={LoaingImage} alt="" className='m-auto mt-5 w-32 ' /></p> : (
    <div>
        <div className='search-error-box h-[270px] w-[270px] lg:w-[400px] m-auto text-center'>
            <img src={errorImage} alt="" className='m-auto' />
            <div className='mt-4'>
                <h4 className='font-medium text-md lg:text-lg'>Oh shoot!</h4>
                <h4 className='font-medium text-md lg:text-lg'>We've hit offshore with that search.</h4>
                <p className='italic'>Try one of this?</p>
            </div>
        </div>
    </div>
  )
}