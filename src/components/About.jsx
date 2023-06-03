import React from 'react';
import { aboutData } from '../data'
import { motion } from 'framer-motion'
import { plateVariants, staggerContainer, fadeIn } from '../variants'
const About = () => {
  const { pretitle, subtitle, image } = aboutData

  return (
    <section id='about' className='min-h-[620px] mt-20'>
      <div className='container mx-auto min-h-[620px]'>

        <motion.div variants={staggerContainer} initial='hidden' whileInView={'show'} viewport={{
          once: false, amount: 0.6
        }} className='min-h-[620px] flex flex-col lg:flex-row items-center'>

          <motion.div variants={fadeIn('right', 'tween', 0.2, 1.8)} className='flex-1 text-center lg:text-left'>
            <div className='pretitle text-yellow-500'>{pretitle}</div>
            <p className='mb-8 text-grey max-w-[560px]'>{subtitle}</p>
          </motion.div>

          <motion.div variants={plateVariants} className='-mb-[300px] -mr-[186px] z-10 '><img className='w-[700px] h-[700px] rounded-full' src={image} /></motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
