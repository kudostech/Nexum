import React from 'react'
import logo from '../assets/logo.png'


function Signin() {
  return (
    <div>        
<nav className='bg-white flex items-center gap-2 p-6 lg:px-20'>
<img className='w-10' src={logo} alt="" />
<h1 className='font-bold text-2xl'>NEXUM</h1>
</nav>
<section className='p-6'>
<div className='bg-white lg:mx-100 pb-80  border border-gray-300  rounded-2xl '>
<h1 className='p-6 font-medium text-2xl '>Sign in</h1>
<hr className=' text-[#e4e4e4] w-full' />
<h2 className='px-6 pt-6'  > Email address </h2>
<input 
placeholder='Your email address'
className='border border-gray-300 mx-6 mt-2 p-3 w-90/100 rounded-md'
type="Email" />
<h2 className='px-6 pt-6'> Password </h2>
<input 
placeholder='Enter your password'
className='border border-gray-300 mx-6 mt-2 p-3 w-90/100 rounded-md'
type="Email" />
 
<p className=' flex justify-end lg:mx-5 m-4 '> Forget password ?</p>
<button className=' text-white bg-blue-400 mt-6 py-4 justify-center w-90/100 mx-5 rounded-md'> Sign in </button>
</div>
</section>

   </div>
  )
}

export default Signin;