import MovieDetails from '@/components/moviedetails/moviedetails'
import { getTvSeriesById } from '@/lib/actions/movies.action'
import React from 'react'

async function Details(id:any) {
  const tv = await getTvSeriesById(id.id)
  return (
    <MovieDetails movie={tv}/>
  )
}

export default Details