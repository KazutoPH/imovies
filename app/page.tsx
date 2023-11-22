import Carousel from '@/components/carousel'
import Image from 'next/image'
import { carouselMovies } from '@/constants/constant'
import Movies from '@/components/movies'
import { popularMovies, trendingMovies } from '@/lib/actions/movies.action'
import Modal from '@/components/modal'

export default async function Home() {

   const movies = await popularMovies()
  const trending = await trendingMovies()
   console.log(trending)

  return (
    <main className="flex flex-col min-h-screen items-center w-full">
      <Carousel trending={trending}/>
      <Movies movies={movies}/>
      <Modal/>
    </main>
  )
}
