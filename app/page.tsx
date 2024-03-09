import Carousel from '@/components/carousel/carousel'
import { getMovies, trendingMovies } from '@/lib/actions/movies.action'
import MovieCarousel from '@/components/carousel/movieCarousel'
import { Suspense } from 'react'
import { CarouselSkeleton, MovieCarouselSkeleton } from '@/components/skeleton'
import { homeCarouselList } from '@/constants/constant'

export default function Home() {
  //  console.log(tv)


  return (
    <main className="relative flex flex-col min-h-screen items-center w-full gap-4 z-30">

      <Suspense fallback={<CarouselSkeleton />}>
        <CarouselRender />
      </Suspense>

      <div className='flex flex-col gap-5 w-full max-w-7xl'>
      {homeCarouselList.map((data, i) =>
          <div className='flex flex-col' key={i}>
          <Suspense fallback={<MovieCarouselSkeleton/>}>
            <CarouselListRender name={data.name} type={data.type} query={data.query} page={1} />
          </Suspense>
          </div>
      )}
       </div>
    </main>
  )
}


async function CarouselRender() {
  const trending = await trendingMovies()
  return (
    <Carousel trending={trending} />
  )
}

async function CarouselListRender({ name, type, query, page }: {
  name: string,
  type: string,
  query: string,
  page: number
}) {
  const movies = await getMovies(type, query, page)
  return (
    <MovieCarousel movies={movies} type={type} title={name} />
  )
}


