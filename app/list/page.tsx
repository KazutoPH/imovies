"use client"

import Movies from '@/components/movies'
import SearchBar from '@/components/searchbar'
import Selection from '@/components/selection'
import { useSearchParams } from 'next/navigation'
import { getMovies, searchMovie } from '@/lib/actions/movies.action'
import React, { useEffect, useState } from 'react'
import { MovieListSkeleton } from '@/components/skeleton'

function page() {

  
  return (
    <div className='flex flex-col items-center'>
      
      <div className='content-container'>
      <Selection/>
     
      <Movies/>

      </div>
    </div>

  )
}

export default page