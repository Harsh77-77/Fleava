import React, { useState } from 'react';

const Expertise = () => {
  // State to keep track of which section is hovered
  const [hoveredSection, setHoveredSection] = useState(null);

  // Array of sections with unique styles for each
  const sections = [
    { 
      id: 'digital-strategy', 
      title: 'Digital Strategy', 
      imageSrc: '/assets/strategy.jpg',
      bgColor: 'bg-[#051c07]', 
      textColor: 'text-slate-500'
    },
    { 
      id: 'branding', 
      title: 'Branding', 
      imageSrc: '/assets/branding.jpg',
      bgColor: 'bg-[#37302a]', 
      textColor: 'text-slate-600'
    },
    { 
      id: 'web-dev', 
      title: 'Web + App Development', 
      imageSrc: '/assets/development.jpg',
      bgColor: 'bg-[#211e1b]', 
      textColor: 'text-slate-700',
      textClass: 'whitespace-nowrap lg:whitespace-normal'
    },
    { 
      id: 'user-experience', 
      title: 'User Experience', 
      imageSrc: '/assets/ux.jpg',
      bgColor: 'bg-[#191212]', 
      textColor: 'text-slate-800'
    },
    { 
      id: 'digital-marketing', 
      title: 'Digital Marketing', 
      imageSrc: '/assets/marketing.jpg',
      bgColor: 'bg-[#3a2e4f]', 
      textColor: 'text-slate-900'
    },
    { 
      id: 'media-production', 
      title: 'Media Production', 
      imageSrc: '/assets/production.jpg',
      bgColor: 'bg-[#1e1e1e]', 
      textColor: 'text-slate-500',
      textClass: 'whitespace-nowrap lg:whitespace-normal'
    },
  ];

  // Determine the text color and background color based on the hovered section
  const hoveredSectionStyles = hoveredSection 
    ? sections.find(section => section.id === hoveredSection) 
    : { bgColor: 'bg-black', textColor: 'text-white' };

  return (


    <div  className="relative h-[850px] lg:h-[1090px]  overflow-hidden">
      <div className={`absolute  inset-0 transition-all duration-500 ${hoveredSectionStyles.bgColor}`}>
      </div>

      <div className="relative z-10 px-10 py-20  lg:pt-32   ">
        <h1 className={`text-lg lg:text-xl lg:px-96 lg:mx-56 transition-colors duration-500 ${hoveredSectionStyles.textColor}`}>
         / Expertise
        </h1>
        <h2 className={`pt-5 text-lg lg:pt-16 lg:text-2xl lg:whitespace-nowrap lg:px-96 lg:mx-56 transition-colors duration-500 ${hoveredSectionStyles.textColor}`}>
          We are passionate about uncovering the best
        </h2>
        <h2 className={`pt-1 text-lg lg:text-2xl lg:whitespace-nowrap lg:px-96 lg:mx-56 transition-colors duration-500 ${hoveredSectionStyles.textColor}`}>
          digital innovations for forward-thinking
        </h2>
        <h2 className={`pt-1 text-lg lg:text-2xl lg:whitespace-nowrap lg:px-96 lg:mx-56 transition-colors duration-500 ${hoveredSectionStyles.textColor}`}>
          brands looking to push boundaries and drive
        </h2>
        <h2 className={`pt-1 text-lg lg:text-2xl lg:whitespace-nowrap lg:px-96 lg:mx-56 transition-colors duration-500 ${hoveredSectionStyles.textColor}`}>
          significant impact.
        </h2>
      </div>

      <div className="absolute px-10 space-y-2 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-4">
        {sections.map((section) => (
          <div
            key={section.id}
            // textClass={section.id}
            className="relative w-ful max-w-md mx-auto "
            onMouseEnter={() => setHoveredSection(section.id)}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <h1
              className={`text-2xl lg:text-8xl lg:font-light lg:whitespace-nowrap  z-20 transition-colors duration-500  ${
                hoveredSection === section.id ? section.textColor : 'text-white'
              }`}
            >
              {section.title}
            </h1>
            <img
              src={section.imageSrc}
              alt={`${section.title} Overlay`}
              className={`absolute  inset-0 h-96 w-96 object-cover transition-opacity duration-500 ${
                hoveredSection === section.id ? 'opacity-100 z-30' : 'opacity-0'
              }`}
              // style={{
              //   top: hoveredSection === section.id ? '0' : '6',
              //   left: hoveredSection === section.id ? '0' : 'auto',
              //   transition: 'top 0.5s easeout, left .5s easeout',}}
            />
          </div>
        ))} 
        
        <div className="pt-16 lg:px-96 lg:whitespace-nowrap text-slate-400">
        <h1 className={` transition-colors duration-500 ${hoveredSectionStyles.textColor}`}>
          Explore all Expertise 
        </h1>
      </div>























      </div>

     

    </div>
  );
};

export default Expertise;
