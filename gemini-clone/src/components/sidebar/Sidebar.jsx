import React from 'react'
import { assets } from '../../assets/assets'

function Sidebar() {
  return (
    <div>
        <div>
        <div className='m-4'>
            <img src={assets.menu_icon} className="h-10" alt="" />
        </div>
        <div className='flex p-1 items-center'>

            <img src={assets.newchat} className="h-10" alt="" />
            <p>New Chat</p>
        </div>
        <div className='flex p-1 items-center'>

            <img src={assets.explore} className='h-10' alt="" />
            <p>Explore Gems</p>
        </div>
        </div>
        <div className='flex h-[65vh] '>
            <p>Recents</p>
        </div>
        <div className='flex items-center p-1'>
            <img src={assets.settings} className='h-10' alt="" />
            <p>Settings and Help</p>
        </div>
    </div>
  )
}

export default Sidebar