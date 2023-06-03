import React from 'react';
import { menuData } from '../data'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../variants'
import Footer from './Footer';
import Experiences from './Experiences';
const Menu = () => {
  const { title, subtitle, menuItems, menuItems2 } = menuData
  return (
    <section id='menu' className='min-h-[1630px] mb-0'>
      {/*bg*/}
      <div className='h-[2000px] bg-menu absolute w-full max-w-[1800px] -z-0'></div>
      <div className='relative z-10 top-72 lg:top-52'>
        <motion.div variants={staggerContainer} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.1 }} className='container mx-auto flex flex-col items-center text-center'>
          <motion.h2 variants={fadeIn('down', 'tween', 0.2, 1.6)} className='h2 capitalize text-white max-w-[400px] text-center' style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.888)',
          }}>{title}</motion.h2>
          <motion.p variants={fadeIn('down', 'tween', 0.4, 1.6)} className='text-white/70 capitalize mb-8' style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.888)',
          }}>{subtitle}</motion.p>
        </motion.div>
      </div>

      {/*menu g*/}
      <motion.div initial={{ opacity: 0, y: 150 }} whileInView={{ opacity: 1, y: 0, }} transition={{
        type: 'tween', delay: 0.2, duration: 1.6, ease: 'easeOut',
      }} className='relative top-80 lg:top-96'>

        <div className='container mx-auto'>
          <div className='lg:-mt-24 min-h-[690px] z-30 mb-8 md:mb-4 xl:mb-16'>
            {/*grid*/}
            <div className='grid grid-cols-1 lg:grid-cols-4 min-h-[590px]'>
              {menuItems.map((item, index) => {
                const { image, name, price, description } = item
                return (
                  <div key={index}>
                    <div className='flex flex-row lg:flex-col h-full' style={{
                      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.888)',
                    }}>
                      <div className={`w-[45%] md:w-auto ${index === 1 || index === 3 ? 'lg:order-1' : 'order-one'}`}>
                        <img src={image} style={{ height: '295px', width: '295px' }} />
                      </div>
                      {/*texts*/}
                      <div className='bg-[#110202] flex-1 flex flex-col justify-center px-6 lg:p-12 lg:max-h-[250px] xl:max-h-max'>
                        <div className='text-center'>
                          <div className='text-xl font-semibold text-yellow-300 xl:text-2xl'>{name}</div>
                          <div className='my-1 text-[20px] lg:text-[40px] lg:my-6 text-red-400 font-semibold'>{price}</div>
                          <div>{description}</div>
                        </div>
                      </div>

                    </div>
                  </div>
                )
              })}
            </div>
            <br /><br />
            <div className='grid grid-cols-1 lg:grid-cols-4 min-h-[590px]'>
              {menuItems2.map((item, index) => {
                const { image, name, price, description } = item
                return (
                  <div key={index}>
                    <div className='flex flex-row lg:flex-col h-full' style={{
                      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.888)',
                    }}>
                      <div className={`w-[45%] md:w-auto ${index === 1 || index === 3 ? 'lg:order-1' : 'order-one'}`}>
                        <img src={image} style={{ height: '295px', width: '295px' }} />
                      </div>
                      {/*texts*/}
                      <div className='bg-[#110202] flex-1 flex flex-col justify-center px-6 lg:p-12 lg:max-h-[250px] xl:max-h-max'>
                        <div className='text-center'>
                          <div className='text-xl font-semibold text-blue-300 xl:text-2xl'>{name}</div>
                          <div className='my-1 text-[20px] lg:text-[40px] lg:my-6 text-red-300 font-semibold'>{price}</div>
                          <div>{description}</div>
                        </div>
                      </div>

                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Menu;
