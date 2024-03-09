'use client'
import React, { useEffect, useState } from 'react'
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { getTrailer } from '@/lib/actions/movies.action'
import { FaX } from 'react-icons/fa6';
import ErrorButton from './button/ErrorButton';

interface trailerData {
  key?: string
}

function Modal() {
  const [show, setShow] = useState(false)
  const [trailer, setTrailer] = useState()
  const [isloading, setIsLoading] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const search = searchParams.get('trailer')
  let result: any


  useEffect(() => {
    if (search) {
      setShow(true)
      fetchData()
    }
  }, [search])

  const fetchData = async () => {
    setTrailer(undefined)
    const result = await getTrailer(search?.toString()).then(data => setTrailer(data));
    console.log(trailer)
  };

  // useEffect(()=> {
  //   async function getData(){

  //     if(search !== null){
  //       const result = await getTrailer(search?.toString())
  //       setIsLoading(true)

  //     }     
  //   }



  // if(search !== null) {
  //   setShow(true)
  //   getTrailer(search?.toString()).then((res) => {
  //     result = res
  //     setTrailer(result)
  //     // console.log(trailer)
  //     // console.log(result)
  //   })

  // }

  // },[search])

  return (
    <>
      {show &&
        <div className={` darkbg flex items-center justify-center flex-col z-[60] relative`}>

          <div className=' h-auto w-[95%] aspect-video sm:w-4/5 p-2 bg-dark flex flex-col gap-1 relative z-[100]'>
            <div className='flex self-end hover:scale-110 active:scale-100 hover:cursor-pointer transition'
              onClick={() => {
                router.push(`${pathname}`)
                setShow(false)
                setTrailer(undefined)
              }}>
              <FaX
                size={30}
                color='white' />
            </div>

            <div className=' w-full flex items-center justify-center h-full relative' >
              {trailer ?
                (
                  <>
                    {trailer === 'error' ? (
                      <div className='flex flex-col items-center gap-3'>
                        <p className='text-white text-base'>There was an error fetching data</p>
                        <div onClick={() => fetchData()}>
                          <ErrorButton />
                        </div>

                      </div>
                    ) : (
                      <iframe className='w-full aspect-video' src={`https://www.youtube.com/embed/${trailer}?&autoplay=1`} title="Movie Trailer" allow="autoplay; picture-in-picture;" allowFullScreen></iframe>
                    )}
                  </>

                ) : (
                  <div className='relative'>
                    <div className='videoloader' />
                  </div>
                )
              }
            </div>

          </div>
        </div>
      }
    </>
  )
}

export default Modal