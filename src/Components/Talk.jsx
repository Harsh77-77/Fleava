import React from 'react';

const Talk = () => {
  return (
    <div className='relative h-screen bg-[#141410] text-[#a79a7c] lg:flex'>
      <img
        src="/assets/bgv.svg"
        alt="Background SVG"
        className='absolute inset-0 h-screen w-screen object-cover'
      />

      <div className='relative z-10 pt-24 px-10 '>
        <h1 className='text-5xl underline lg:text-[200px] lg:px-52 lg:pt-60 lg:no-underline'>
          Let's Talk.
        </h1>
        <h1 className='pt-16 text-xl lg:flex '>Singapore</h1>
        <div className='pt-10'>
          <p>FLEAVA PTE. LTD.</p>
          <p>broke</p>
          <p>Technology used</p>
          <p>React Js, Tailwind, Locomotive Js</p>
        </div>

        <div className='pt-16 lg:px-96 lg:-mt-[230px]'>
          <h1 className='text-2xl'>Bali</h1>
          <p className='pt-10'>PT FLEAVA DIGITAL MEDIA</p>
          <p>This is a clone website</p>
          <p>Hire me!</p>
          <p>India-201005</p>
        </div>

        <div className='flex space-x-10 pt-16 lg:mx-[900px] lg:-mt-[245px] lg:absolute'>
          <div className='flex-1  space-y-2 lg:space-y-0 lg:'>
            <p className='p-2'>Home</p>
            <p className='p-2'>Work</p>
            <p className='p-2'>About</p>
            <p className='p-2'>Experience</p>
            <p className='p-2'>Contact</p>
          </div>

          <div className='flex-1 space-y-2 lg:space-y-0 lg:space-x-0 '>
            <p className='p-2'>Awards</p>
            <p className='p-2'>Brands</p>
            <p className='p-2'>Careers</p>
            <p className='p-2'>Inquiries</p>
            <p className='p-2'>Transform</p>
          </div>
        </div>

        <div className='flex space-x-5 lg:mx-[1200px] lg:absolute lg:whitespace-nowrap lg:-mt-[170px] '>
          <h1>2024</h1>
          <h1>© Copyright</h1>
        </div>
      </div>
    </div>
  );
};

export default Talk;
