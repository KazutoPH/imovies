import React from 'react'
import { getTvSeriesById } from '@/lib/actions/movies.action'
import MovieDetails from '@/components/moviedetails'
import TVSeriesDetails from '@/components/tvseriesdetails'

async function page({ params }: { params: { id: string } }) {
  const tv = await getTvSeriesById(params.id)
  // const credits = await getCredits(params.id)
  // let officialTrailer
  // if(movie)
  //  officialTrailer = movie.videos.results.filter(( data:any) => data.name.includes('Official Trailer'))
  // // // console.log(credits)
  // console.log(officialTrailer)
  return (
    <>
       <TVSeriesDetails movie={tv}/>
    </>
  )
}

export default page