import React from 'react';
import { navData } from '../data'
import { useState } from 'react';
const Nav = () => {
  const [nav, setNav] = useState(false)
  return (
    <nav className='w-full h-full'>
      <ul className='h-full flex flex-col justify-center items-center gap-y-6'>
        {navData.map((item, index) => {
          return (
            <li key={index}>
              <a className='text-xl capitalize font-bold italic hover:bg-white hover:text-black  hover:p-4 transition-all duration-300'
                href={item.href} >
                {item.name}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  );
};

export default Nav;
