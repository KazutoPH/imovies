"use client"
import { carouselMovies } from '@/constants/constant'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from 'react-icons/fa6';
import { motion } from 'framer-motion';

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [buttonPress, setButtonPress] = useState(false)

  useEffect(() => {

    if (!buttonPress)
      var timer = setTimeout(() => setCurrentSlide((currentSlide) => (currentSlide === carouselMovies.length - 1 ? 0 : currentSlide + 1)), 5000)

    if (buttonPress)
      var timer = setTimeout(() => setCurrentSlide((currentSlide) => (currentSlide === carouselMovies.length - 1 ? 0 : currentSlide + 1)), 15000)

    return () => {
      clearTimeout(timer);
    }

  }, [currentSlide]);

  return (
    <div className='w-full'>
      <div className='relative z-30 overflow-hidden'>

        <motion.button
          whileTap={{ scale: 1.1 }}
          whileHover={{ scale: 1.2 }}
          className='flex justify-center items-center w-14 absolute left-0 top-0 bottom-0 z-20 bg-dark/40 shadow-lg shadow-dark'
          onClick={() => {
            setCurrentSlide((currentSlide) => (currentSlide === 0 ? carouselMovies.length - 1 : currentSlide - 1))
            setButtonPress(true)
          }}>
          <FaChevronLeft color='white' size={40} />
        </motion.button>

        <motion.button
          whileTap={{ scale: 1.1 }}
          whileHover={{ scale: 1.2 }}
          className='flex justify-center items-center w-14 absolute right-0 top-0 bottom-0 z-20 bg-dark/40 shadow-lg shadow-dark'
          onClick={() => {
            setCurrentSlide((currentSlide) => (currentSlide === carouselMovies.length - 1 ? 0 : currentSlide + 1))
            setButtonPress(true)
          }}>
          <FaChevronRight color='white' size={40} />
        </motion.button>
        <div
          className='flex justify-start items-start overflow-hidden relative'
        >
          {carouselMovies.map((movie, i) =>
            <div
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              className='relative flex h-[600px] min-w-full items-end transition-transform ease-out duration-1000' key={i}>


              <div className={`absolute h-full w-full z-10 `} key={i}>
                <div className='relative z-20 h-full w-full '>
                  <Image
                    src={movie.image}
                    alt={movie.image}
                    fill
                    unoptimized
                    className='object-cover relative -z-10'
                  />

                  <div className='absolute top-0 bottom-0 left-0 right-0 shadow-[inset_0px__-250px_200px_rgba(18,18,18,1)] box-border z-30' />
                </div>
              </div>

              <div className='flex flex-col z-20 mb-[100px] ml-[100px] gap-2 max-w-[50%]'>
                <p className='text-5xl font-extrabold text-white'>{movie.name}</p>
                <div>
                  <p className='text-3xl font-medium text-white'>2022-2-18</p>
                </div>
                <p className='text-lg text-white leading-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at lacus odio. Sed nec orci ut est feugiat ultricies. Sed scelerisque erat quis elit venenatis, vitae auctor risus convallis. Vestibulum lobortis, augue sed gravida facilisis, urna arcu interdum odio, eu vestibulum turpis libero ac mi. Mauris euismod felis urna, non convallis elit congue at.</p>
              </div>
            </div>
          )}
        </div>
        <div className='absolute bottom-10 flex gap-5 left-1/2 -translate-x-1/2 z-50'>
          {carouselMovies.map((movie, i) =>
            <div onClick={() => setCurrentSlide(i)} className={`h-2 w-2 rounded-full ${currentSlide === i ? ' bg-white' : ' bg-gray-500'} hover:cursor-pointer`} key={i} />
          )}

        </div>

      </div>

    </div>
  )
}

export default Carousel