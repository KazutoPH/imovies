"use client"

import { carouselMovies } from "@/constants/constant"
import Image from "next/image"
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa6';

function Movies() {
  return (
    <div className='content-container py-10'>
      <h1 className='text-white text-3xl font-extrabold self-start'>Popular Movies</h1>

      <div className='gridcontainer w-full mt-5'>
        {carouselMovies.map((movie, i) =>
        <div className="relative" key={i}>
          <motion.div 
          whileHover={{ scale: 1.2, zIndex: 50 }}
          className='group flex items-end relative h-full min-h-[320px] w-full overflow-hidden  rounded-md border-[2px]  border-gray-800'>
            <div className=" absolute h-full w-full ">
            <Image
              src={movie.image}
              alt={movie.image}
              fill
              unoptimized
              className='object-cover relative'
            />
                <div className=' absolute top-0 bottom-0 left-0 right-0 group-hover:shadow-[inset_0px__-100px_100px_rgba(0,0,0,0.8)] box-border z-30 duration-300' />
            </div>

            <div className="z-40 p-2 hidden group-hover:flex flex-col">
            <p className=' text-white text-lg font-bold'>{movie.name}</p>
            <div className="flex justify-between items-center">
            <p className=' text-white text-sm font-light'>9-2-21</p>

            <div className="flex items-center">
            <p className=' text-white text-sm font-light mr-2'>4.5</p>
            <FaStar color={'white'} size={20}/>
            </div>
            </div>
            <div className=" overflow-hidden max-w-max">
            <p className=' text-white text-sm font-normal italic line-clamp-3 text-ellipsis ... '>Lorem ipsum dolor sit amet, consectetur adipiscing elitasda. Proin at lacus odio. Sed nec orci ut est feugiat ultricies. Sed scelerisque erat quis elit venenatis, vitae auctor risus convallis. Vestibulum lobortis, augue sed gravida facilisis, urna arcu interdum odio, eu vestibulum turpis libero ac mi. Mauris euismod felis urna, non convallis elit congue at.</p>
            </div>
            
            </div>

          </motion.div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Movies