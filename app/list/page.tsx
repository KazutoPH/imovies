"use client"

import Movies from '@/components/movies'
import SearchBar from '@/components/searchbar'
import Selection from '@/components/selection'
import { useSearchParams } from 'next/navigation'
import { getMovies, searchMovie } from '@/lib/actions/movies.action'
import React, { useEffect, useState } from 'react'

function page() {
  const [result, setResult] = useState<any>()
  const searchParams = useSearchParams()
 
  const type = searchParams.get('type')
  const query = searchParams.get('query')

  useEffect(() => {
    setResult('')
    const fetchData = async () => {
      const result = await getMovies(type, query);
      setResult(await result);
    };

    if (query)
      fetchData()

  }, [query, type])
  
  return (
    <div className='flex flex-col items-center'>
      
      <div className='content-container'>
      <Selection/>
      <Movies movies={result} type={'movie'}/>
      </div>
    </div>

  )
}

export default page