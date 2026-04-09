import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'


function Dashboard() {
  return (
    <>
      <div className='flex m-10 gap-4'>

        <div className=' bg-white rounded-2xl flex-1 h-100 '>
<div className=' flex justify-between items-center font-bold p-4'>
<h1>Nexum Platform</h1>
<FontAwesomeIcon className='cursor-pointer' icon={faEllipsis} />
</div>
<hr className='text-gray-300' />
      </div>

      <div className='flex-1 bg-white'> 

      </div>
      </div>
    </>
  )
}

export default Dashboard;