"use client"
import { carouselMovies } from '@/constants/constant'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { useRouter, usePathname } from "next/navigation";

function Carousel({ trending }: any) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [buttonPress, setButtonPress] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {

    if (!buttonPress)
      var timer = setTimeout(() => setCurrentSlide((currentSlide) => (currentSlide === trending.length - 1 ? 0 : currentSlide + 1)), 5000)

    if (buttonPress)
      var timer = setTimeout(() => setCurrentSlide((currentSlide) => (currentSlide === trending.length - 1 ? 0 : currentSlide + 1)), 15000)

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
            setCurrentSlide((currentSlide) => (currentSlide === 0 ? trending.length - 1 : currentSlide - 1))
            setButtonPress(true)
          }}>
          <FaChevronLeft color='white' size={40} />
        </motion.button>

        <motion.button
          whileTap={{ scale: 1.1 }}
          whileHover={{ scale: 1.2 }}
          className='flex justify-center items-center w-14 absolute right-0 top-0 bottom-0 z-20 bg-dark/40 shadow-lg shadow-dark'
          onClick={() => {
            setCurrentSlide((currentSlide) => (currentSlide === trending.length - 1 ? 0 : currentSlide + 1))
            setButtonPress(true)
          }}>
          <FaChevronRight color='white' size={40} />
        </motion.button>
        <div
          className='flex justify-start items-start overflow-hidden relative'
        >
          {trending && trending.map((movie:any, i:any) =>
            <div
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              className='relative flex h-[600px] min-w-full items-center transition-transform ease-out duration-1000' key={i}>


              <div className={`absolute h-full w-full z-10 `} key={i}>
                <div className='relative h-full w-full '>
                  <Image
                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                    alt={movie.backdrop_path}
                    fill
                    unoptimized
                    priority
                    className='object-cover relative -z-10'
                  />

                  <div className='carouselgradient z-20' />
                  {/* <div className='absolute top-0 bottom-0 left-0 right-0 shadow-[inset_0px__-250px_200px_rgba(18,18,18,1)] box-border z-30' /> */}
                </div>
              </div>

              <div className='flex items-center z-20 mx-28 gap-16 justify-center'>
                <div className='flex flex-col z-20 gap-2 w-[50%]'>
                  <p className='text-5xl font-extrabold text-white'>{movie.original_title}</p>
                  <div>
                    <p className='text-3xl font-medium text-white'>{movie.release_date}</p>
                  </div>
                  <p className='text-lg text-white leading-5'>{movie.overview}</p>

                  <div className='flex gap-5 mt-2'>
                    <button className='btn'>
                      Watch Now
                    </button>

                    <button className='btn2'
                    onClick={()=> router.push(`${pathname}?trailer=${movie.id}`)}>
                      Watch Trailer
                    </button>
                  </div>  
                </div>

                  <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.2, type: 'spring', stiffness: 100 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                    className='flex relative min-h-[420px] w-[330px] overflow-hidden  rounded-md border-[2px]  border-gray-800 '>
                      <Image
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt={movie.poster_path}
                        fill
                        unoptimized
                        className='object-cover'
                      />
                  </motion.div>
              </div>
            </div>
          )}
        </div>
        <div className='absolute bottom-10 flex gap-5 left-1/2 -translate-x-1/2 z-50'>
          {trending && trending.map((movie:any, i:any) =>
            <div onClick={() => setCurrentSlide(i)} className={`h-2 w-2 rounded-full ${currentSlide === i ? ' bg-white' : ' bg-gray-500'} hover:cursor-pointer`} key={i} />
          )}

        </div>

      </div>

    </div>
  )
}

export default Carousel