import Movies from '@/components/movies'
import SearchBar from '@/components/searchbar'
import { searchMovie } from '@/lib/actions/movies.action'
import React from 'react'

async function page({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const search = typeof searchParams.search === 'string' ? searchParams.search : undefined

  console.log(search)

  let result = await searchMovie(search)

  return (
    <div className='flex flex-col items-center'>

      <div className='content-container'>
        <h1 className='text-white text-3xl font-extrabold self-start'>Search</h1>
        <SearchBar />
        <Movies movies={result}/>
      </div>
    </div>

  )
}

export default page