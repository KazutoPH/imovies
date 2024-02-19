"use client"

import Movies from '@/components/moviedetails/movies'
import SearchBar from '@/components/header/searchbar'
import Selection from '@/components/selection'
import { useSearchParams } from 'next/navigation'
import { getMovies, searchMovie } from '@/lib/actions/movies.action'
import React, { useEffect, useState } from 'react'
import { MovieListSkeleton } from '@/components/skeleton'
import Title from './title'

function page() {  
  return (
    <div className='flex flex-col items-center'>
      
      <div className='content-container'>
      <Title/>
      <Movies/>

      </div>
    </div>

  )
}

export default page