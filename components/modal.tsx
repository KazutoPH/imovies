'use client'
import React, { useEffect, useState } from 'react'
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { getTrailer } from '@/lib/actions/movies.action'

interface trailerData {
  key?: string
}

function Modal() {
  const [show, setShow] = useState(false)
  const [ trailer, setTrailer ] = useState()
  const [ isloading, setIsLoading ] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const search = searchParams.get('trailer')
  let result:any

  useEffect(()=> {
    // async function getData(){

    //   if(search !== null){
    //     const result = await getTrailer(search?.toString())
    //     setIsLoading(true)

    //   }     
    // }

    if(search !== null) {
      setShow(true)
      getTrailer(search?.toString()).then((res) => {
        result = res
        setTrailer(result)
        console.log(trailer)
        console.log(result)
      })

    }

  },[search])


  return (
    <div className={`darkbg ${show ? 'flex':'hidden'}`} onClick={()=> {
      router.push(`${pathname}`)
      setShow(false)
      }}>
      <div className=' h-auto w-4/5'>
    
      <iframe className='w-full aspect-video' src={`https://www.youtube.com/embed/${trailer}`} title="Movie Trailer" allow="autoplay; picture-in-picture;" allowFullScreen></iframe>
 

      </div>

    </div>
  )
}

export default Modal