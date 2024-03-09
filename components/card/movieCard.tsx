"use client"

import React from 'react'
import Image from "next/image"
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';

function MovieCard({ movie, i, type, isDragging }: any) {
  const router = useRouter()

  return (
    <motion.div
      onClick={() => {
        if (!isDragging) {
          router.push(`/${type}/${movie.id}`)
        }
      }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 }
      }}
      initial={{ opacity: 0 }}
      transition={{ delay: i * 0.05 }}
      whileInView="visible"
      viewport={{ once: true }}
      className="relative cursor-pointer hover:z-50"
      key={i}>

      <motion.div
        className='group flex flex-col relative w-full sm:hover:scale-110 active:scale-100 ease-in duration-200'>
        <div className='group flex items-end relative w-full aspect-[2/3] overflow-hidden  rounded-md border-[2px] bg-[#3b3b3b]  border-gray-800'>
          <div className="absolute h-full w-full flex items-center justify-center">
            {movie.poster_path ? (
            <Image
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            fill
            unoptimized
            className='object-cover relative w-auto h-auto'
          />
            ): 
            <p className=' text-white text-lg md:text-3xl font-bold text-center'>{type === 'tv' ? movie.name : movie.title}</p>
            }

            <div className=' absolute top-0 bottom-0 left-0 right-0 sm:group-hover:shadow-[inset_0px__-100px_100px_rgba(0,0,0,0.8)] box-border z-30 duration-300' />
          </div>

          <div className="z-40 p-2 hidden sm:group-hover:flex flex-col">
            <p className=' text-white text-lg font-bold'>{type === 'tv' ? movie.original_name : movie.original_title}</p>
            <div className="flex justify-between items-center">
              <p className=' text-white text-sm font-light'>{type === 'tv' ? movie.first_air_date : movie.release_date}</p>

              <div className="flex items-center">
                <p className=' text-white text-sm font-light mr-2'>{Math.round((movie.vote_average) * 10.0) / 10.0}</p>
                <FaStar color={'white'} size={20} />
              </div>
            </div>
            <div className=" overflow-hidden max-w-max">
              <p className=' text-white text-sm font-normal italic line-clamp-4 text-ellipsis ... '>{movie.overview}</p>
            </div>

          </div>
        </div>

      </motion.div>
      {/* <div className="px-2">
            <p className=' text-white text-lg font-bold leading-[10%]'>{type === 'tv' ? movie.original_name : movie.original_title}</p>
          </div> */}
    </motion.div>
  )
}

export default MovieCard