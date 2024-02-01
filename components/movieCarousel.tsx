"use client"

import { carouselMovies } from "@/constants/constant"
import Image from "next/image"
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa6';
import { useEffect } from "react";
import Link from "next/link";
import MovieCard from "./movieCard";

function MovieCarousel({ movies, title, type }: any) {


  // console.log(movies)
  return (
    <div className='content-container py-10 overflow-x-clip'>
      {title ? (
        <h1 className='text-white text-3xl font-extrabold self-start'>{title}</h1>
      ) : null}
      <motion.div 
      drag="x"
      className='flex flex-row w-full mt-5 gap-2 p-5 z-[100]'>
        {movies && movies?.results?.map((movie: any, i: any) =>
        <div className="min-w-[200px]"  key={i}>
          <MovieCard movie={movie} i={i} type={type}/>
        </div>  
          
        )}
      </motion.div>
    </div>
  )
}

export default MovieCarousel