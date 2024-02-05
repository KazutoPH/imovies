"use client"

import { carouselMovies } from "@/constants/constant"
import Image from "next/image"
import { motion, useInView } from 'framer-motion';
import { FaStar } from 'react-icons/fa6';
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import MovieCard from "./movieCard";
import { useSearchParams } from "next/navigation";
import { getMovies } from "@/lib/actions/movies.action";
import { CardSKeleton, LoadingCircle, MovieListSkeleton } from "./skeleton";

let page = 1

function Movies() {
  const [result, setResult] = useState<any[]>([])
  const searchParams = useSearchParams()
  const type = searchParams.get('type')
  const query = searchParams.get('query')
  const ref = useRef(null)
  const isInView = useInView(ref)

  let pArray = new Array(10).fill(null).map(( data, i ) => <CardSKeleton key={i}/>)

  
  useEffect(() => {
    setResult([])
    const fetchData = async () => {
      const result = await getMovies(type, query, page);
      setResult((oldData:any)=>  [...oldData, result])
      console.log(result)
    };

    if (query)
      fetchData()


  }, [query, type])

  // async function onClick() {
  //   page++
  //     const Newresult = await getMovies(type, query, page );
  //     setResult( (oldData:any)=>  [...oldData, Newresult] )
  //     // setResult(await result);

  //     console.log(result)
  //   };
  
  useEffect(() => {
    const fetchData = async (page:number) => {
      const Newresult = await getMovies(type, query, page );
      setResult( (oldData:any)=>  [...oldData, Newresult] )
      // setResult(await result);

      console.log(result)
    };

    if(result && isInView) {
      page++
      fetchData(page)
    }
    
  }, [isInView])

  // console.log(movies)
  return (
    <div className='flex flex-col  content-container py-5 gap-10'>
      {/* <div className='gridcontainer w-full'>
        {result ? (
          result?.results?.map((movie: any, i: any) =>
          <MovieCard movie={movie} i={i} type={type} key={i}/>
        )
        ):(
          pArray.map((skeleton)=>
            skeleton
          )
        )}
      </div> */}

        <div className='relative gridcontainer w-full z-[60]'>
          {result.length - 1 >= 0 ? (
            result.map(( data, i ) => 
              data.results.map((movie:any, index:any) => 
              <MovieCard movie={movie} i={index} type={type} key={index}/>
              )
            )
          ):
          (
            pArray.map((skeleton)=>
              skeleton
            ))
          }
        </div>
      
      <div ref={ref} className="flex self-center">
      <LoadingCircle/>
      </div>

    </div>
  )
}

export default Movies