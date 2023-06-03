import React from 'react';
import { socialData } from '../data';
const Socials = () => {
  return (
    <div className='flex gap-x-[10px]'>
      {socialData.map((item, index) => {
        return (
          <a className='border border-yellow-300 w-[55px] h-[55px] text-yellow-300 flex items-center justify-center  hover:text-red-600 hover:border-red-600 transition-all' href={item.href} target={item.target} key={index}>
            {item.icon}
          </a>
        )
      })}

    </div>
  );
};

export default Socials;
