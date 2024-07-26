import React from 'react'
import { Icons } from '../Constant/AllData'

export default function Banner() {
  return (
    <div>
      <div className='w-[50%] py-6 m-auto grid grid-cols-1 lg:grid-cols-4'>
        <div>
            <img src={Icons.icon1} alt="" className='m-auto w-28' />
            <p className='text-lg'><span className='font-bold'>1 year </span>Warranty</p>
        </div>
        <div>
            <img src={Icons.icon2} alt="" className='m-auto w-28' />
            <p className='text-lg'><span className='font-bold'>7-day </span>Replacement</p>
        </div>
        <div>
            <img src={Icons.icon3} alt="" className='m-auto w-28' />
            <p className='text-lg'><span className='font-bold'>Free Express </span>Delivery</p>
        </div>
        <div>
            <img src={Icons.icon4} alt="" className='m-auto w-28' />
            <p className='text-lg'><span className='font-bold'>GST </span>Billing</p>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  )
}
