import MovieDetails from '@/components/moviedetails/moviedetails'
import { getMovieById } from '@/lib/actions/movies.action'
import React from 'react'

async function Details(id:any) {
  const movie = await getMovieById(id.id)
  return (
    <MovieDetails movie={movie}/>
  )
}

export default Details