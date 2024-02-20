import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaStar } from 'react-icons/fa6'

function MovieDetails({ movie }: any) {

  return (
    <div className='flex w-full flex-col items-center pb-10'>
      <div className=' w-full flex flex-col'>
        <div className='relative flex h-[600px] min-w-full w-full items-end self-center z-10 bg-white'>

          <div className={`absolute h-full w-full z-10 `} >
            <div className='relative z-20 h-full w-full '>
              <div className='carouselgradient z-20' />
              {movie.backdrop_path &&
                <Image
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  alt={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  fill
                  unoptimized
                  priority
                  className='object-cover relative -z-10'
                />
              }
            </div>
          </div>
        </div>

        <div className='flex flex-col z-20 -mt-[500px] px-10 gap-10 overflow-visible self-center content-container'>
          <div className='flex gap-5 flex-col md:flex-row'>
            <div className='group flex self-center md:self-start items-end relative h-full aspect-[24/36] w-[300px] overflow-hidden  rounded-md border-[2px]  border-gray-800 postershadow'>
              {movie.poster_path ? (
                <div className=" h-full w-full flex justify-center items-center">
                  <Image
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    fill
                    unoptimized
                    className='object-cover relative'
                  />
                </div>
              ) :
                <p className=' text-white text-3xl font-bold text-center'>{movie.title}</p>
              }
            </div>

            <div className='flex-col z-20 flex flex-1 gap-5'>
              <div className='flex flex-col gap-1'>
                <p className='text-5xl font-extrabold text-white textShadow'>{movie.title}</p>
                <p className='text-base  text-white textShadow'>{movie.tagline}</p>
                <div className='flex items-center'>
                  <p className='text-base  text-white textShadow mr-1'>{Math.round((movie.vote_average) * 10.0) / 10.0}</p>
                  <FaStar color={'white'} size={20} />
                  <p className='text-base  text-white textShadow ml-5'>{`(${movie.vote_count}) votes`}</p>
                </div>
                <p className='text-base text-white textShadow'>{movie.runtime} mins.</p>
                <p className='text-base  text-white textShadow'>Release date: {movie.release_date}</p>
              </div>
              <div className='flex flex-row gap-3 flex-wrap'>

                {movie.genres?.map((genre: any, i: any) =>
                  <Link href={`/list?type=movie&genre=${genre.name}&genreID=${genre.id}`} key={i}>
                    <div className='py-1 px-4 border-2 border-white rounded-full'>
                      <p className='text-base  text-white textShadow'>{genre.name}</p>

                    </div>
                  </Link>
                )}

              </div>
              <div className='flex flex-col gap-1'>
                <p className='text-2xl text-white textShadow font-bold'>Synopsis</p>
                <p className='text-base  text-white textShadow'>{movie.overview}</p>
              </div>

              <div className='flex flex-col gap-1'>
                <p className='text-2xl text-white textShadow font-bold'>Cast</p>
                <div className='flex flex-row gap-5 flex-wrap'>
                  {movie.credits?.cast?.slice(0, 5).map((cast: any, i: any) =>
                    <div className=' flex-wrap max-w-min' key={i}>
                      <div className=' h-[160px] w-[130px] relative bg-white overflow-hidden'>
                        {cast.profile_path ? (
                          <Image
                            src={`https://image.tmdb.org/t/p/original${cast.profile_path}`}
                            alt={`https://image.tmdb.org/t/p/original${cast.profile_path}`}
                            fill
                            unoptimized
                            className='object-cover relative'
                          />
                        ) : (
                          <Image
                            src={'/assets/avatar.png'}
                            alt={'avatar'}
                            fill
                            unoptimized
                            className='object-cover mt-5'
                          />
                        )}
                      </div>

                      <p className='text-base  text-white textShadow'>{cast.name}</p>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>


          {/* {officialTrailer ? (
                  <div className=' w-full'>
        <p className='text-2xl text-white textShadow font-bold pb-5'>Official Trailer</p>    
        <div className=' h-auto w-full'>
<iframe className='w-full aspect-video' src={`https://www.youtube.com/embed/${officialTrailer}`} title="Movie Trailer" allow="autoplay; picture-in-picture;" allowFullScreen></iframe>
</div>
      </div>
        ):null} */}

          {movie.videos?.results?.slice(-4).reverse().map((data: any, i: any) =>
            <div className=' w-full' key={i}>
              <p className='text-2xl text-white textShadow font-bold pb-2'>{data.name}</p>
              <div className=' h-auto w-full'>
                <iframe className='w-full aspect-video max-h-[600px] min-h-[300px]' src={`https://www.youtube.com/embed/${data.key}`} title="Movie Trailer" allow="autoplay; picture-in-picture;" allowFullScreen></iframe>
              </div>
            </div>

          )}


        </div>
      </div>
    </div>
  )
}

export default MovieDetails