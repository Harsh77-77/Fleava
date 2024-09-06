import LocomotiveScroll from 'locomotive-scroll'
import React from 'react'

const Header = () => {
  return (
  <div data-scroll 
  
  data-scroll-speed="-.8" 
  className='bg-black ' >
    
  <div className=' '>
  <div>
  <img src="/assets/bgv.svg" alt="Background SVG" className='h-screen w-screen'></img>
  </div>
  <img src='/assets/1.svg' alt="1.svg" className='h-20 w-20 absolute top-3 right-20 lg:top-16 lg:right-60 '></img>
  <h1 className='absolute top-80 px-8 text-slate-400 tracking-wide lg:top-[400px] lg:px-52 lg:text-xl md:top-[550px] md:px-24'>/ 01  /  Digital Company</h1>
  <h1 className='absolute top-[369px] px-14 text-slate-400 text-2xl tracking-wide lg:top-[450px] lg:px-52 lg:text-7xl md:top-[600px] md:px-24 '>Elevating Brands through</h1>
  <h1 className='absolute top-[400px] px-14 text-slate-400  text-2xl tracking-wide lg:top-[550px] lg:px-52 lg:text-7xl md:top-[640px] md:px-24 '>Digital Innovation.</h1>
    
      <a href='#' className='absolute top-[450px] px-16 text-white lg:top-[800px] lg:px-56 md:top-[750px] md:px-28  '>Prev</a>
      <a href='#' className='absolute top-[450px] px-40 text-white lg:top-[800px] lg:px-80 md:top-[750px] md:px-52'>Next</a>
    
</div>
</div>
  )
}

export default Header

