import Carousel from '@/components/carousel'
import Image from 'next/image'
import { carouselMovies } from '@/constants/constant'
import Movies from '@/components/movies'
import { popularMovies } from '@/lib/actions/movies.action'

export default async function Home() {

   const movies = await popularMovies()

   console.log(movies)

  return (
    <main className="flex flex-col min-h-screen items-center w-full">
      <Carousel/>
      <Movies movies={movies}/>
    </main>
  )
}
