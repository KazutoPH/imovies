import Carousel from '@/components/carousel/carousel'
import Image from 'next/image'
import { carouselMovies } from '@/constants/constant'
import Movies from '@/components/moviedetails/movies'
import { popularMovies, popularTvSeries, trendingMovies } from '@/lib/actions/movies.action'
import Modal from '@/components/modal'
import MovieCarousel from '@/components/carousel/movieCarousel'

export default async function Home() {

  const trending = await trendingMovies()
  const movies = await popularMovies()
  const tv = await popularTvSeries()
  
  //  console.log(tv)

  return (
    <main className="relative flex flex-col min-h-screen items-center w-full gap-4 z-[50]">
      <Carousel trending={trending}/>
      
      <MovieCarousel movies={movies} title={'Popular Movies'} type={'movie'}/>
      <MovieCarousel movies={tv}  title={'Popular TV Series'} type={'tv'}/>
      <Modal/>
    </main>
  )
}
