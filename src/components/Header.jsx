import React, { useState, useEffect } from 'react';
import Nav from './Nav'
import logoWhite from '../assets/img/header/pizza-lo.png'
import { motion } from 'framer-motion'
import {
  staggerContainer, fadeIn
} from '../variants';

const headerVariant = {
  hidden: {
    padding: '84px 0 84px 0',
    background: 'none',
  },
  show: {
    padding: '14px 0 14px 0',
    background: 'transparent',
    transition: {
      type: 'spring',
    },
  }
}

export const navVariants = {
  hidden: {
    clipPath: 'circle(5.8% at 50% 0)',
    opacity: 0,
    transition: {
      type: 'spring',
      delay: 0.2,
      stiffness: 300,
      damping: 140
    }
  },
  show: {
    opacity: 1,
    clipPath: 'circle(130% at 50% 0)',
    transition: {
      type: 'spring',
      stiffness: 80,
    },
  },
}

export const Header = () => {
  const [isActive, setIsActive] = useState(false)
  const [nav, setNav] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false)
    })
  })
  return (
    <motion.header
      variants={headerVariant}
      initial='hidden'
      animate='show'
      className='fixed w-full max-w-[1800px] z-50 py-4'
    >
      <motion.div
        variants={staggerContainer(0.3, 1)}
        initial='hidden'
        animate='show'
        className='container mx-auto'
      >
        <div className='flex justify-between items-center px-4 lg:4 lg:px-0 relative text-white'>
          {/*menu*/}
          <motion.div
            variants={fadeIn('down', 'tween', 1.2, 1.4)}
            className={`${nav ? 'gap-y-0' : 'gap-y-2'} flex flex-col items-center justify-center w-12 h-12 p-3 order-2 lg:order-3 cursor-pointer border-2 `}
            onClick={() => setNav(!nav)}
          >
            {/*bars*/}
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: nav ? -45 : 0, translateY: nav ? 2 : 0 }}
              className='w-full h-[2px] bg-white'
            ></motion.div>

            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: nav ? 45 : 0 }}
              className='w-full h-[2px] bg-white'
            ></motion.div>
            <motion.div
              animate={nav ? { opacity: 0 } : 'show'}
              whileInView={nav ? { opacity: 0 } : 'show'}
              className='w-full h-[2px] bg-white'
            ></motion.div>

          </motion.div>

          <motion.div
            variants={navVariants}
            initial='hidden'
            animate={nav ? 'show' : ''}
            className='absolute bg-black w-[260px] h-[400px] right-0 lg:left-auto top-[120px] bottom-0 z-50 rounded-lg shadow-xl'
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
            }}
          >
            <Nav />
          </motion.div>

          <motion.div
            variants={fadeIn('down', 'tween', 1.2, 1.4)}
            className='order-1 lg:order-2'
          >
            <a href='#'>
              <img
                className={`w-[90px] h-[90px] rounded-full`}
                src={logoWhite}
              />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </motion.header>

  );
};


