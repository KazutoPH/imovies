import React, { Suspense } from 'react'
import { getTvSeriesById } from '@/lib/actions/movies.action'
import Details from './details'
import Similar from './similar'
import { MovieDetailSkeleton } from '@/components/skeleton'

async function page({ params }: { params: { id: string } }) {
  // const credits = await getCredits(params.id)
  // let officialTrailer
  // if(movie)
  //  officialTrailer = movie.videos.results.filter(( data:any) => data.name.includes('Official Trailer'))
  // // // console.log(credits)
  // console.log(officialTrailer)
  return (
    <>
      <Suspense fallback={<MovieDetailSkeleton/>}>
        <Details id={params.id}/>
      </Suspense>

      <Suspense>
        <Similar id={params.id}/>
      </Suspense>
    </>
  )
}

export default page