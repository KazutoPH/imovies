import Carousel from '@/components/carousel'
import Image from 'next/image'
import { carouselMovies } from '@/constants/constant'
import Movies from '@/components/movies'
import { popularMovies, popularTvSeries, trendingMovies } from '@/lib/actions/movies.action'
import Modal from '@/components/modal'

export default async function Home() {

  const trending = await trendingMovies()
  const movies = await popularMovies()
  const tv = await popularTvSeries()
  
   console.log(tv)

  return (
    <main className="flex flex-col min-h-screen items-center w-full">
      <Carousel trending={trending}/>

      <Movies movies={movies} title={'Movies'} type={'movie'}/>
      <Movies movies={tv} title={'TV Series'} type={'tvSeries'}/>
      <Modal/>
    </main>
  )
}
