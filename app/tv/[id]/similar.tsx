import MovieCarousel from '@/components/carousel/movieCarousel'
import { getSimilar } from '@/lib/actions/movies.action'
import React from 'react'

async function Similar(id:any) {
  const similar = await getSimilar('tv', id.id, 1)
  // console.log(similar)
  return (
    <>
    {similar.results.length && 
        <div className='flex justify-center w-full mt-5'>
        <div className='max-w-7xl w-full'>
         <MovieCarousel movies={similar} title={'Similar TV Series'} type={'tv'}/>
        </div>
        </div>
    }

    </>
  )
}

export default Similar