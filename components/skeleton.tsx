import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export function MovieListSkeleton() {

  return (
    <div className='content-container py-5'>
      <div className='gridcontainer w-full'>
        <CardSKeleton />
        <CardSKeleton />
        <CardSKeleton />
        <CardSKeleton />
        <CardSKeleton />
        <CardSKeleton />
        <CardSKeleton />
        <CardSKeleton />
        <CardSKeleton />
        <CardSKeleton />
        <CardSKeleton />
        <CardSKeleton />
      </div>
    </div>
  )
}

export function CardSKeleton() {
  return (
    <Skeleton baseColor='#3b3b3b' className='relative w-full aspect-[2/3]   rounded-md overflow-hidden border-[2px]  border-gray-800' />
  )
}

export function LoadingCircle() {
  return (
    <div className='loader' />
  )
}

export function MovieDetailSkeleton() {
  return (
    <div className='flex flex-col'>
      <div className='relative h-[600px] w-full leading-none'>
        <Skeleton baseColor='#3b3b3b' className='w-full h-full' />
        <div className='carouselgradient' />
      </div>

      <div className='flex flex-col z-20 -mt-[500px] px-10 gap-10 overflow-visible self-center content-container'>
        <div className='flex gap-5 flex-col md:flex-row'>
          <div className='group flex self-center md:self-start items-end relative h-full min-h-[500px] w-[300px] overflow-hidden  rounded-md border-[2px]  border-gray-800 postershadow'>
            <Skeleton baseColor='#3b3b3b' className='w-full h-full' />
          </div>

          <div className='flex-col z-20 flex flex-1 gap-5' />
        </div>
      </div>
    </div>
  )
}
