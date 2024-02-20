import Carousel from '@/components/carousel/carousel'
import Image from 'next/image'
import { carouselMovies } from '@/constants/constant'
import Movies from '@/components/moviedetails/movies'
import { getMovies, popularMovies, popularTvSeries, trendingMovies } from '@/lib/actions/movies.action'
import Modal from '@/components/modal'
import MovieCarousel from '@/components/carousel/movieCarousel'
import { Suspense } from 'react'
import { CarouselSkeleton, MovieDetailSkeleton } from '@/components/skeleton'
import Link from 'next/link'
import { FaChevronDown, FaChevronRight } from 'react-icons/fa6'

export default function Home() {
  //  console.log(tv)

  return (
    <main className="relative flex flex-col min-h-screen items-center w-full gap-4 z-30">

      <Suspense fallback={<CarouselSkeleton />}>
        <CarouselRender />
      </Suspense>

      <Suspense fallback={<p>Loadiing</p>}>
        <PopularMovieRender />
      </Suspense>
      <div className='-mt-3'>
        <Link href={`/list?type=movie&query=popular`}>
          <div className='flex flex-row gap-2 items-center hover:scale-110 transition'>
            <p className=' text-white text-[20px] font-semibold'>View More </p>
            <FaChevronDown
              color={'#FACC15'}
              size={20}
            />
          </div>
        </Link>
      </div>

      <Suspense fallback={<p>Loadiing</p>}>
        <TopRatedMovieRender />
      </Suspense>
      <div className='-mt-3'>
        <Link href={`/list?type=movie&query=top_rated`}>
          <div className='flex flex-row gap-2 items-center hover:scale-110 transition'>
            <p className=' text-white text-[20px] font-semibold'>View More </p>
            <FaChevronDown
              color={'#FACC15'}
              size={20}
            />
          </div>
        </Link>
      </div>

      <Suspense fallback={<p>Loadiing</p>}>
        <PopularTvRender />
      </Suspense>
      <div className='-mt-3'>
        <Link href={`/list?type=tv&query=popular`}>
          <div className='flex flex-row gap-2 items-center hover:scale-110 transition'>
            <p className=' text-white text-[20px] font-semibold'>View More </p>
            <FaChevronDown
              color={'#FACC15'}
              size={20}
            />
          </div>
        </Link>
      </div>

      <Suspense fallback={<p>Loadiing</p>}>
        <TopRatedTvRender />
      </Suspense>
      <div className='-mt-3'>
        <Link href={`/list?type=tv&query=top_rated`}>
          <div className='flex flex-row gap-2 items-center hover:scale-110 transition'>
            <p className=' text-white text-[20px] font-semibold'>View More </p>
            <FaChevronDown
              color={'#FACC15'}
              size={20}
            />
          </div>
        </Link>
      </div>

      <Modal />
    </main>
  )
}

async function CarouselRender() {
  const trending = await trendingMovies()
  return (
    <Carousel trending={trending} />
  )
}

async function PopularMovieRender() {
  const popularMovies = await getMovies('movie', 'popular', 1)
  return (
    <MovieCarousel movies={popularMovies} title={'Popular Movies'} type={'movie'} />
  )
}

async function TopRatedMovieRender() {
  const topRatedMovies = await getMovies('movie', 'top_rated', 1)
  return (
    <MovieCarousel movies={topRatedMovies} title={'Top Rated Movies'} type={'movie'} />
  )
}

async function PopularTvRender() {
  const popularTv = await getMovies('tv', 'popular', 1)
  return (
    <MovieCarousel movies={popularTv} title={'Popular TV Series'} type={'tv'} />
  )
}

async function TopRatedTvRender() {
  const topratedTv = await getMovies('tv', 'top_rated', 1)
  return (
    <MovieCarousel movies={topratedTv} title={'Top Rated TV Series'} type={'tv'} />
  )
}

