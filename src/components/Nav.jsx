import React from 'react';
import { navData } from '../data'
import { scroller } from 'react-scroll';

const Nav = () => {
  const scrollToSection = (sectionId) => {
    scroller.scrollTo(sectionId, {
      duration: 500,
      smooth: true,
      offset: -50, 
    });
  };
  return (
    <nav className='w-full h-full'>
      <ul className='h-full flex flex-col justify-center items-center gap-y-6'>
        {navData.map((item, index) => {
          return (
            <li key={index}>
              <button className='text-xl capitalize font-bold italic hover:bg-white hover:text-black  hover:p-4 transition-all duration-300'
                onClick={() => scrollToSection(item.href)} >
                {item.name}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  );
};

export default Nav;
