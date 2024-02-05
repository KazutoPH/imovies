import Carousel from '@/components/carousel'
import Image from 'next/image'
import { carouselMovies } from '@/constants/constant'
import Movies from '@/components/movies'
import { popularMovies, popularTvSeries, trendingMovies } from '@/lib/actions/movies.action'
import Modal from '@/components/modal'
import MovieCarousel from '@/components/movieCarousel'

export default async function Home() {

  const trending = await trendingMovies()
  const movies = await popularMovies()
  const tv = await popularTvSeries()
  
  //  console.log(tv)

  return (
    <main className="flex flex-col min-h-screen items-center w-full gap-4 mt-[85px]">
      <Carousel trending={trending}/>
      
      <MovieCarousel movies={movies} title={'Movies'} type={'movie'}/>
      <MovieCarousel movies={tv}  title={'TV Series'} type={'tv'}/>
      <Modal/>
    </main>
  )
}
