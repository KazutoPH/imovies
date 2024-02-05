import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export function MovieListSkeleton() {

  return (
    <div className='content-container py-5'>
    <div className='gridcontainer w-full'>
          <CardSKeleton/>
          <CardSKeleton/>
          <CardSKeleton/>
          <CardSKeleton/>
          <CardSKeleton/>
          <CardSKeleton/>
          <CardSKeleton/>
          <CardSKeleton/>
          <CardSKeleton/>
          <CardSKeleton/>
          <CardSKeleton/>
          <CardSKeleton/>
    </div>
    </div>
  )
}

export function CardSKeleton() {
  return (
    <Skeleton baseColor='#1f2937' className='relative w-full aspect-[2/3]   rounded-md overflow-hidden border-[2px]  border-gray-800'/>
  )
}

export function LoadingCircle() {
  return(
    <div className='loader'/>
  )

}

