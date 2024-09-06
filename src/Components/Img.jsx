import React from 'react'

const Img = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='' className='lg:bg-black  lg:w-[1300px] lg:scale-125 lg:-mt-28 lg:flex lg:items-center lg:justify-center'>
        <div  className=" h-[600px] lg:h-[700px]  ">
        <video className="h-full object-cover" autoPlay muted loop>
          <source src="/assets/trophy.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

    </div>
  )
}

export default Img
