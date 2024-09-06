import LocomotiveScroll from 'locomotive-scroll';
import React, { useState, useEffect } from 'react';

const Intro = () => {
  const [rotation, setRotation] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const newRotation = scrollY * 0.1; 
    setRotation(newRotation);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div data-scroll
     data-scroll-section
      data-scroll-inview
      data-scroll-speed='.2' 
      className='bg-black  h-screen  text-[#dfdeca]'>
      <div  className='  pt-64 px-12 lg:px-80 lg:pt-52 md:px-40   '>
        <h1 className=' lg:text-xl md:text-xl'>/Introduction</h1>
        <br />
        <h1 className='text-3xl font-light lg:text-8xl md:text-5xl  lg:pt-6'>Accelerating Global</h1>
        <h1 className='text-3xl font-light lg:text-8xl md:text-5xl '>Brands - Years ahead.</h1>
        <br />
        <h1 className='text-lg lg:pt-16 lg:text-3xl '>We are a world-class team of industry-</h1>
        <h1 className='text-lg          lg:text-3xl '>leading professionals, who constantly push </h1>
         <h1 className='text-lg         lg:text-3xl  '>new technology to its limits.</h1> 
      </div>
      <img
        src='/assets/ornament.svg'
        className='h-32 px-12 mt-16  lg:mx-[1000px] lg:-mt-32 md:mx-96 '
        style={{ transform: `rotate(${rotation}deg)` }} 
        alt='Ornament'
      />
    </div>
  );
}

export default Intro;


