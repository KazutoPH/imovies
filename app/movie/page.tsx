import React from 'react'
import { carouselMovies } from '@/constants/constant'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa6'

function page() {
  return (
    <div className='flex w-full flex-col items-center pb-10'>
      <div className='content-container flex flex-col'>
        <div className='relative flex h-[600px] min-w-full w-full items-end transition-transform ease-out duration-1000 self-center z-10 bg-white'>

          <div className={`absolute h-full w-full z-10 `} >
            <div className='relative z-20 h-full w-full '>
              <Image
                src={carouselMovies[0].image}
                alt={carouselMovies[0].image}
                fill
                unoptimized
                className='object-cover relative -z-10'
              />
            </div>
          </div>
        </div>

        <div className='flex z-20 -mt-[250px] px-10 gap-5 overflow-visible'>
          <div className='group flex items-end relative h-full min-h-[500px] w-[300px] overflow-hidden  rounded-md border-[2px]  border-gray-800 postershadow'>
            <div className=" h-full w-full">
              <Image
                src={carouselMovies[0].image}
                alt={carouselMovies[0].image}
                fill
                unoptimized
                className='object-cover relative'
              />
              <div className=' absolute top-0 bottom-0 left-0 right-0 group-hover:shadow-[inset_0px__-100px_100px_rgba(0,0,0,0.8)] box-border z-30 duration-300' />
            </div>
          </div>

          <div className='flex-col z-20 mb-[100px] flex flex-1 gap-14'>
            <div className='flex flex-col gap-1'>
              <p className='text-5xl font-extrabold text-white textShadow'>{carouselMovies[0].name}</p>
              <p className='text-base  text-white textShadow'>Caption</p>
              <div className='flex items-center'>
                <p className='text-base  text-white textShadow'>7.1</p>
                <FaStar color={'white'} size={20} />
                <p className='text-base  text-white textShadow'>{`(301) votes`}</p>
              </div>
              <p className='text-base font-medium text-white textShadow'>119 mins</p>
              <p className='text-base font-medium text-white textShadow'>Release date: 2022-2-18</p>
            </div>

            <div className='flex flex-col gap-1'>
              <p className='text-2xl text-white textShadow font-bold'>Synopsis</p>
              <p className='text-base  text-white textShadow'>Caption</p>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default page