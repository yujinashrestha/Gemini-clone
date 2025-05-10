import React from 'react'
import { assets } from '../../assets/assets'
import '../../index.css'

function mainbar() {
  return (
    <div className='flex flex-col w-full  bg-blue-50 justify-between'>
        <div>
        <div className='flex justify-between navbar items-center h-14 mx-6'>
            <div>Gemini</div>
            <img src={assets.profile} className='h-10' alt="" />
        </div>
        </div>

        <div className='mx-auto my-6 flex flex-col'>
        <div className='m-6 flex flex-col text-2xl font-bold justify-center items-center'>
            <span className='greet'>Hello, Yujina</span>
            <span className='text-blue-200'>How can I help you ?</span>
        </div>
        <div className='cards flex justify-between p-4'>
            <div className='card'>  <p>
                    Suggest a beautiful place to see in an upcoming road trip
                </p>
                <div  className='flex items-end justify-end'><img src={assets.explore} className='h-10' alt="" /></div>
            </div>
             <div className='card'>
                <p>
                    Briefly summarize this concept: Urban planning
                </p>
                <div className='flex items-end justify-end'><img src={assets.thinking} className='h-10' alt="" /></div>
            </div>
             <div className='card'>
                <p>
                    Brainstrom team bonding activies for our work retreat
                </p>
                <div className='flex items-end justify-end'><img src={assets.bonding} className='h-10' alt="" /></div>
            </div>
             <div className='card'>
                <p>
                Improve the readabilty of the following code
                </p>
                <div className='flex items-end justify-end'><img src={assets.code} className='h-10' alt="" /></div>
            </div>
        </div>
        </div>
        <div className='bottom flex flex-col'>
        <div className='search-area bg-blue-100 rounded-2xl flex items-center p-4 w-[60%] mx-auto justify-between'>
        <input type="text" placeholder='Enter a prompt here' className='caret-black border-none outline-none focus:outline-none focus:ring-0' />
        <div className='input flex '>
     
        <div className='hover:bg-blue-200 rounded-3xl m-1.5 p-2'><img src={assets.addphoto} /></div>
        <div className='hover:bg-blue-200 rounded-3xl m-1.5 p-2'><img src={assets.microphone}  alt="" /></div>
        <div className='hover:bg-blue-200 rounded-3xl m-1.5 p-2'><img src={assets.send}  alt="" /></div>
    
        </div>
        </div>

        <p className='text-center'>
            Gemini might display inaccurate info, including people so double check the responses.
        </p>
    
    </div>
    </div>
  )
}

export default mainbar