import React from 'react';
import ExperiencesCarousel from './ExperiencesCarousel'
import { experiencesData } from '../data'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Experiences = () => {
  const { title, modelImg, slider } = experiencesData
  return (
    <section id='critics' className='bg-cover bg-no-repeat relative top-[340px] lg:top-[390px] z-10 h-[850px] pt-[60px] md:pt-[120px]'>
      <div className='container mx-auto'>
        {/*tx*/}
        <motion.div variants={fadeIn('up', 'tween', 0.2, 1.6)} initial='hidden' whileInView={'show'} className='text-center capitalize flex flex-col items-center'>
          <h2 className='h2 text-white'>{title}</h2>
          <div className='mb-12'>
            <img src={modelImg} style={{ height: '50px', width: '50px' }} />
          </div>
        </motion.div>
        {/*corousel*/}
        <motion.div variants={fadeIn('up', 'tween', 0.4, 1.6)} initial='hidden' whileInView={'show'} className='flex justify-center items-center'>
          <ExperiencesCarousel slider={slider} />
        </motion.div>
      </div>
    </section>
  );
};

export default Experiences;
