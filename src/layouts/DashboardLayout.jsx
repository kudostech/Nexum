import React from 'react'
import { Outlet } from 'react-router'

import Navbar from '../components/Navbar'

function DashboardLayout() {
  return (
    <div className=' flex min-h-screen bg-gray'>
       <div className='flex-1'>
        <Navbar />

        <div className=' p-6'>

            <Outlet />

        </div>
       </div> 
    </div>
  )
}

export default DashboardLayout;