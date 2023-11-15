import Carousel from '@/components/carousel'
import Image from 'next/image'
import { carouselMovies } from '@/constants/constant'
import Movies from '@/components/movies'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center w-full">
      <Carousel/>
      <Movies/>
    </main>
  )
}
