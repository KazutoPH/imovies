"use client"
import { carouselMovies } from '@/constants/constant'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from 'react-icons/fa6';

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    setTimeout(() => setCurrentSlide((currentSlide) => (currentSlide === carouselMovies.length - 1 ? 0 : currentSlide + 1 )), 5000)
  }, [currentSlide]);

  return (
    <div className='w-full'>
      <div className='relative z-30'>
     
        <div className='flex justify-center items-center w-14 absolute left-0 top-0 bottom-0 z-20 bg-dark/60'
        onClick={()=> setCurrentSlide((currentSlide) => (currentSlide === 0 ? carouselMovies.length - 1 : currentSlide - 1 ))}>
          <FaChevronLeft color='white' size={25} />
        </div>

        <div className='flex justify-center items-center w-14 absolute right-0 top-0 bottom-0 z-20 bg-dark/60'
        onClick={()=> setCurrentSlide((currentSlide) => (currentSlide === carouselMovies.length - 1 ? 0 : currentSlide + 1 ))}>
          <FaChevronRight color='white' size={25} />
        </div>
        <div 
        className='flex justify-start items-start overflow-hidden relative'
        >
          {carouselMovies.map((movie, i) =>
            <div 
            style={{ transform: `translateX(-${currentSlide * 100}%)` }} 
            className='flex h-[500px] min-w-full relative items-end transition-transform ease-out duration-700' key={i}>

              
              <div className={`absolute h-full w-full z-10 `} key={i}>
                <div className='relative z-20 h-full w-full '>
                <Image
                  src={movie.image}
                  alt={movie.image}
                  fill
                  unoptimized
                  className='object-cover relative -z-10'
                />

                <div className=' absolute top-0 bottom-0 left-0 right-0 shadow-[inset_0px_0px_100px_100px_rgba(0,0,0,0.8)] box-border z-30' />
              </div>
              </div>

              <div className='flex flex-col z-20 mb-[50px] ml-[100px] gap-2 max-w-[40%]'>
                <p className='text-5xl font-extrabold text-white'>{movie.name}</p>
                <div>
                  <p className='text-3xl font-medium text-white'>2022-2-18</p>
                </div>
                  <p className='text-lg text-white leading-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at lacus odio. Sed nec orci ut est feugiat ultricies. Sed scelerisque erat quis elit venenatis, vitae auctor risus convallis. Vestibulum lobortis, augue sed gravida facilisis, urna arcu interdum odio, eu vestibulum turpis libero ac mi. Mauris euismod felis urna, non convallis elit congue at.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Carousel