"use client"

import { carouselMovies } from "@/constants/constant"
import Image from "next/image"
import { motion, useInView } from 'framer-motion';
import { FaStar } from 'react-icons/fa6';
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import MovieCard from "../card/movieCard";
import { useSearchParams } from "next/navigation";
import { getByGenre, getMovies } from "@/lib/actions/movies.action";
import { CardSKeleton, LoadingCircle, MovieListSkeleton } from "../skeleton";

let page = 1

function Movies() {
  const [result, setResult] = useState<any[]>([])
  const [error, setError] = useState(false)
  const searchParams = useSearchParams()
  const type = searchParams.get('type')
  const query = searchParams.get('query')
  const genre = searchParams.get('genreID')
  const ref = useRef(null)
  const isInView = useInView(ref)

  let pArray = new Array(10).fill(null).map((data, i) => <CardSKeleton key={i} />)

  useEffect(() => {
    setResult([])

      initialFetchData()

  }, [query, type, genre])

  const initialFetchData = async () => {
    
    let newRresult:any;

    if(query)
    newRresult = await getMovies(type, query, page);

    else
    newRresult = await getByGenre(type, genre, page);
  
    console.log(result)

    if (newRresult.results) {
      setResult((oldData: any) => [...oldData, newRresult])
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

      let Newresult:any;

      if(query)
      Newresult = await getMovies(type, query, page);
  
      else
      Newresult = await getByGenre(type, genre, page);
    
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
    <div className='flex flex-col py-5 gap-10'>
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