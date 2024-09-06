import React from 'react';

function ScrollingImage() {


  return (
    <div className="relative w- h-screen bg-black">
      <div className=" h-screen  flex">
        <div
          className="flex justify-center items-center"
        
        >
          <img
            src="/assets/about.jpg"
            alt="Scrolling Image"
            className=" zoom-image absolute inset-0 h-screen w-screen object-cover "
          />
            <div class="absolute inset-0 px-10 pt-96 mt-20 text-yellow-100 lg:mt-20 lg:pt-20 lg:px-56 ">
    <span class=" text-lg font-light         lg:text-xl lg:font-normal    ">/The Agency</span>
    <h1 className='pt-8 text-3xl font-light  lg:text-8xl lg:              '>We Provoke</h1>
    <h1 className='pt-2 text-3xl font-light  lg:text-8xl lg:              ' >What's possible</h1>
    <h1 className='pt-7 text-xl font-light   lg:text-2xl lg:font-normal    '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum rem consectetur autem blanditiis exercitationem distinctio saepe laborum provident, debitis deleniti quibusdam numquam </h1>
  </div>
        </div>
      </div>
    </div>
  );
}

export default ScrollingImage;
