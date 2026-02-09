import React from 'react'
import { images } from '../data.js';

const Footer = () => {
  return (
   <nav className='flex justify-between items-center pl-[34px] pr-[34px] mt-[24px] bg-black h-[100px]'>
           <div className='flex items-center gap-2'>
               <img src={images.logo1} alt="Logo" className='invert' />
               <h3 className="text-xl font-bold text-white">Hemal Varsani</h3>
           </div>
           <div>
                <p className='text-white'>@2026 Hemal</p>
                <p className='text-white'>All Rights Reserved</p>

           </div>
       </nav>
  )
}

export default Footer