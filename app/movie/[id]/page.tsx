import React from 'react'
import { carouselMovies } from '@/constants/constant'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa6'
import { getMovieById } from '@/lib/actions/movies.action'

async function page({ params }: { params: { id: string } }) {
  
  const movie = await getMovieById(params.id)

  console.log(movie)
  return (
    <div className='flex w-full flex-col items-center pb-10'>
      <div className=' w-full flex flex-col'>
        <div className='relative flex h-[600px] min-w-full w-full items-end transition-transform ease-out duration-1000 self-center z-10 bg-white'>

          <div className={`absolute h-full w-full z-10 `} >
            <div className='relative z-20 h-full w-full '>
            <div className='carouselgradient z-20' />
              <Image
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                fill
                unoptimized
                className='object-cover relative -z-10'
              />
            </div>
          </div>
        </div>

        <div className='flex z-20 -mt-[300px] px-10 gap-5 overflow-visible self-center content-container'>
          <div className='group flex items-end relative h-full min-h-[500px] w-[300px] overflow-hidden  rounded-md border-[2px]  border-gray-800 postershadow'>
            <div className=" h-full w-full">
              <Image
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                fill
                unoptimized
                className='object-cover relative'
              />
              <div className=' absolute top-0 bottom-0 left-0 right-0 group-hover:shadow-[inset_0px__-100px_100px_rgba(0,0,0,0.8)] box-border z-30 duration-300' />
            </div>
          </div>

          <div className='flex-col z-20 flex flex-1 gap-5'>
            <div className='flex flex-col gap-1'>
              <p className='text-5xl font-extrabold text-white textShadow'>{movie.original_title}</p>
              <p className='text-base  text-white textShadow'>{movie.tagline}</p>
              <div className='flex items-center'>
                <p className='text-base  text-white textShadow mr-1'>{Math.round((movie.vote_average) * 10.0) / 10.0}</p>
                <FaStar color={'white'} size={20} />
                <p className='text-base  text-white textShadow ml-5'>{`(${movie.vote_count}) votes`}</p>
              </div>
              <p className='text-base text-white textShadow'>{movie.runtime} mins.</p>
              <p className='text-base  text-white textShadow'>Release date: {movie.release_date}</p>
            </div>
              <div className='flex flex-row gap-3'>

                  {movie.genres?.map((genre:any, i:any) => 
                  <div className='py-1 px-4 border-2 border-white rounded-full' key={i}>
                    <p className='text-base  text-white textShadow'>{genre.name}</p>
                  </div>  
                  )}

              </div>
            <div className='flex flex-col gap-1'>
              <p className='text-2xl text-white textShadow font-bold'>Synopsis</p>
              <p className='text-base  text-white textShadow'>{movie.overview}</p>
            </div>

            <div className='flex flex-col gap-1'>
              <p className='text-2xl text-white textShadow font-bold'>Cast</p>
              <div className='flex flex-row gap-2'>
              {movie.credits?.cast?.slice(0,5).map((cast:any, i:any) =>
                <p>{cast.name}</p>
                  )}
                </div>
              </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default page