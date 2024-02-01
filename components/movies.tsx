"use client"

import { carouselMovies } from "@/constants/constant"
import Image from "next/image"
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa6';
import { useEffect } from "react";
import Link from "next/link";
import MovieCard from "./movieCard";

function Movies({ movies, title, type }: any) {


  // console.log(movies)
  return (
    <div className='content-container py-10'>
      {title ? (
        <h1 className='text-white text-3xl font-extrabold self-start'>{title}</h1>
      ) : null}
      <div className='gridcontainer w-full mt-5'>
        {movies && movies?.results?.map((movie: any, i: any) =>
          <MovieCard movie={movie} i={i} type={type} key={i}/>
        )}
      </div>
    </div>
  )
}

export default Movies