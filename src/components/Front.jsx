import React from 'react';
import { frontData } from '../data'
import { Header } from './Header'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../variants'
import { scroller } from 'react-scroll';

const Hero = () => {
  const { pretitle, title, subtitle, btnText } = frontData
  const scrollToSection = (sectionId) => {
    scroller.scrollTo(sectionId, {
      duration: 500,
      smooth: true,
      offset: -50, 
    });
  };
  return (
    <section className='min-h-[980px] bg-hero bg-cover bg-right'>
      <Header />
      <div className='container mx-auto min-h-[980px] flex justify-center items-center'>
        <motion.div variants={staggerContainer(0.3, 1)} initial='hidden' whileInView={'show'} className='text-center flex flex-col items-center'>

          <motion.div variants={fadeIn('down', 'tween', 0.2, 1.1)} className='text-while text-[24px] lg:text-[28px] font-primary italic lg:font-medium mb-1'>
            {pretitle}
          </motion.div>

          <motion.h1 variants={fadeIn('down', 'tween', 0.3, 1.1)} className='h1 mb-5' style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.888)',
          }}>{title}</motion.h1>

          <motion.p variants={fadeIn('down', 'tween', 0.4, 1.1)} className='text-white max-w-[540px] mb-8 text-shadow-sm' style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.888)',
          }}>{subtitle}</motion.p>

          <motion.div variants={fadeIn('down', 'tween', 0.5, 1.1)}>
            <button className='btn bg-yellow-400 hover:bg-red-600' onClick={() => scrollToSection('menu')}>
              {btnText}
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
