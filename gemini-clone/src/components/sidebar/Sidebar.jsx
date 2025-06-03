import React from 'react'
import { assets } from '../../assets/assets'
import '../../index.css'
import { useState } from 'react'

function Sidebar() {
    const [isExtended, setExtended] = useState(false)

  return (
    <div className={`sidebar bg-blue-100 inline-flex flex-col justify-between cursor-pointer text-sm ${isExtended ? 'w-64' : 'w-20'}`}>

        <div>
        <div className='my-6 mx-2 hover:bg-blue-200 rounded-2xl p-1.5' onClick={()=> setExtended(prev=>!prev)}>
            <img src={assets.menu_icon} className="h-10" alt="" />
        </div>
        <div className='flex items-center hover:bg-blue-200  rounded-2xl p-1.5 m-1'>

            <img src={assets.newchat} className="h-10 m-2" alt="" />
            {isExtended?<p className='m-2'>New Chat</p>:null}
        </div>
        <div className='flex items-center   hover:bg-blue-200 rounded-2xl p-1.5 m-1'>
          {isExtended?<> <img src={assets.explore} className='h-10 m-2' alt="" />
            <div className='whitespace-nowrap'>Explore Gems</div></>:null}
        </div>
       
        <div className='flex flex-col justify-start'>
           {isExtended?<><p className=' p-1.5 m-1'>Recents</p>
            <div className='overflow-auto h-[50vh] flex flex-col justify-start'>
                <div className='flex items-center  hover:bg-blue-200  rounded-2xl p-1.5 m-1'>
                    <img src={assets.message} className='h-10' alt="" />
                    <p className='p-2'>what is a react....</p>
                </div>
            </div>
            </>:null}
        </div>
        </div>
        <div>
            <div className='flex items-center   hover:bg-blue-200 rounded-2xl p-1'>
                <img src={assets.questionmark} className='h-10 m-2 ' alt="" />
          {isExtended? 
            <p>Help</p>:null}       
             </div>
        <div className='flex items-center   hover:bg-blue-200 rounded-2xl p-1 '>
            <img src={assets.history} className='h-10 m-2' alt="" />
           {isExtended? 
            <p>History</p>:null}
        </div>
        <div className='flex items-center   hover:bg-blue-200 rounded-2xl p-1 '>
            <img src={assets.settings} className='h-10 m-2' alt="" />
           {isExtended? 
            <p>Settings</p>:null}
        </div>
        </div>
    </div>
  )
}

export default Sidebar