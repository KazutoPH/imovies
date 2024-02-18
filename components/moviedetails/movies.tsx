"use client"

import { carouselMovies } from "@/constants/constant"
import Image from "next/image"
import { motion, useInView } from 'framer-motion';
import { FaStar } from 'react-icons/fa6';
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import MovieCard from "../card/movieCard";
import { useSearchParams } from "next/navigation";
import { getMovies } from "@/lib/actions/movies.action";
import { CardSKeleton, LoadingCircle, MovieListSkeleton } from "../skeleton";

let page = 1

function Movies() {
  const [result, setResult] = useState<any[]>([])
  const [error, setError] = useState(false)
  const searchParams = useSearchParams()
  const type = searchParams.get('type')
  const query = searchParams.get('query')
  const ref = useRef(null)
  const isInView = useInView(ref)

  let pArray = new Array(10).fill(null).map((data, i) => <CardSKeleton key={i} />)

  useEffect(() => {
    setResult([])

    if (query)
      initialFetchData()

  }, [query, type])

  const initialFetchData = async () => {
    const newRresult = await getMovies(type, query, page);
    console.log(result)

    if (newRresult.results) {
      setResult((oldData: any) => [...oldData, result])
      setError(false)
    } else {
      setError(true)
    }
  };

  // async function onClick() {
  //   page++
  //     const Newresult = await getMovies(type, query, page );
  //     setResult( (oldData:any)=>  [...oldData, Newresult] )
  //     // setResult(await result);

  //     console.log(result)
  //   };

  useEffect(() => {
    const fetchData = async (page: number) => {
      const Newresult = await getMovies(type, query, page);
      if (Newresult.results)
        setResult((oldData: any) => [...oldData, Newresult])
      // setResult(await result);

      console.log(result)
    };

    if (result.length - 1 >= 0  && isInView) {
      page++
      fetchData(page)
    }

  }, [isInView])

  // console.log(movies)
  return (
    <div className='flex flex-col  content-container py-5 gap-10'>
      <div className='relative gridcontainer w-full z-[50]'>

        {result.length - 1 >= 0 ? (
          result.map((data, i) =>
            data.results?.map((movie: any, index: any) =>
              <MovieCard movie={movie} i={index} type={type} key={index} />
            )
          )
        ) :
          (
            <>
              {!error ? (
                pArray.map((skeleton) =>
                  skeleton
                )
              ) : null}
            </>
          )
        }

        {error &&
          <p className=" text-white">There was an error Loading files</p>
        }
      </div>

      {!error &&
        <div ref={ref} className="flex self-center">
          <LoadingCircle />
        </div>
      }


    </div>
  )
}

export default Movies