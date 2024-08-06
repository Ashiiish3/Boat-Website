import React, { useContext, useState } from 'react'
import { auth } from '../Services/Firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth/cordova'
import { getDataContext } from '../ContextApi/AddToCartContext'
import { IoClose } from 'react-icons/io5'

export default function CreateAccount() {
  const signUpObj = {
    name: "",
    email: "",
    password: ""
  }
  const { showLogin, setShowLogin } = useContext(getDataContext)
  const [signUpData, setSignUpData] = useState(signUpObj)
  const { name, email, password } = signUpData
  const HandleChange = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value })
  }
  const SubmitSignUpForm = (e) => {
    e.preventDefault()
    console.log(signUpData)
    createUserWithEmailAndPassword(auth, email, password).then((res) => {
      setShowLogin(!showLogin)
      console.log(res)
    }).catch((err) => console.log(err))
    alert("Your Account has been Created.")
    setSignUpData(signUpObj)
  }
  return (
    <div>
      <div className='flex justify-center items-center relative '>
        <span className='font-medium text-[30px] mb-2'>Sign Up</span> <span className='absolute right-0 text-[22px] p-2 rounded-full cursor-pointer' style={{ backgroundColor: "#eff4f7" }} onClick={() => setShowLogin(!showLogin)} ><IoClose /></span>
      </div>
      <p>Please enter your All details to Create Account</p>
      <form className='mt-5 mb-2 rounded-xl py-4 px-20' onSubmit={(e) => SubmitSignUpForm(e)}>
        <div className='text-start my-2'>
          <label htmlFor='name' className='block'>Name:</label>
          <input type='text' name='name' value={name} onChange={(e) => HandleChange(e)} className='border-[1px] px-2 h-[45px] w-full rounded-md my-1' placeholder='Enter Your Name' required />
        </div>
        <div className='text-start my-2'>
          <label htmlFor='email' className='block'>Email:</label>
          <input type='email' name='email' value={email} onChange={(e) => HandleChange(e)} className='border-[1px] px-2 h-[45px] w-full rounded-md my-1' placeholder='Enter Your Email' required />
        </div>
        <div className='text-start my-2'>
          <label htmlFor='password' className='block'>Password:</label>
          <input type='password' name='password' value={password} onChange={(e) => HandleChange(e)} className='border-[1px] px-2 h-[45px] w-full rounded-md my-1' placeholder='Enter Your Password' required />
        </div>
        <button type='submit' className='bg-gray-300 py-3 px-14 my-2 uppercase font-medium rounded-xl' >Sign Up</button>
      </form>
    </div>
  )
}