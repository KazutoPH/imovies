import React from 'react'
import { carouselMovies } from '@/constants/constant'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa6'

function page() {
  return (
    <div className='flex w-full flex-col items-center pb-10'>
    <div className='content-container flex flex-col'>
      <div className='relative flex h-[600px] min-w-full w-full items-end transition-transform ease-out duration-1000 bg-red-500 self-center z-10'>

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
      
      <div className='flex z-20 -mt-[200px] px-10 gap-5'>
        <div className='group flex items-end relative h-full min-h-[320px] w-[250px] overflow-hidden  rounded-md border-[2px]  border-gray-800'>
        <div className=" h-full w-full ">
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

        <div className='flex-col z-20 mb-[100px] flex flex-1'>
                <p className='text-5xl font-extrabold text-white'>{carouselMovies[0].name}</p>
                <div>
                  <p className='text-3xl font-medium text-white'>2022-2-18</p>
                </div>
                <p className='text-lg text-white leading-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at lacus odio. Sed nec orci ut est feugiat ultricies. Sed scelerisque erat quis elit venenatis, vitae auctor risus convallis. Vestibulum lobortis, augue sed gravida facilisis, urna arcu interdum odio, eu vestibulum turpis libero ac mi. Mauris euismod felis urna, non convallis elit congue at.</p>
              </div>
      </div>
    </div>
    </div>
  )
}

export default page