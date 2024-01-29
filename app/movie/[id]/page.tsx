import React from 'react'
import { getMovieById } from '@/lib/actions/movies.action'
import MovieDetails from '@/components/moviedetails'

async function page({ params }: { params: { id: string } }) {
  const movie = await getMovieById(params.id)
  // const credits = await getCredits(params.id)
  // let officialTrailer
  // if(movie)
  //  officialTrailer = movie.videos.results.filter(( data:any) => data.name.includes('Official Trailer'))
  // // // console.log(credits)
  // console.log(officialTrailer)
  return (
    <>
       <MovieDetails movie={movie}/>
    </>
  )
}

export default page