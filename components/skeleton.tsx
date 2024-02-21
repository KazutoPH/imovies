import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
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

export function CarouselSkeleton() {
  return (
    <div className='relative h-[600px] w-full leading-none'>

      <button
        className='hidden sm:flex justify-center items-center w-14 absolute left-0 top-0 bottom-0 z-20 bg-dark/40 shadow-lg shadow-dark hover:scale-110 transition'>
        <FaChevronLeft color='white' size={40} />
      </button>

      <Skeleton baseColor='#3b3b3b' className='w-full h-full' />
      <div className='carouselgradient' />
      <button
        className='hidden sm:flex justify-center items-center w-14 absolute right-0 top-0 bottom-0 z-20 bg-dark/40 shadow-lg shadow-dark hover:scale-110 transition'>
        <FaChevronRight color='white' size={40} />
      </button>

    </div>
  )
}

export function MovieCarouselSkeleton() {

  return (
    <div className='content-container overflow-hidden  z-50'>
      <div className="relative sm:overflow-x-clip py-2 sm:p-5">
        <div className='flex flex-row w-full gap-2 z-[60] relative overflow-visible'>
          <div className=" min-w-[130px] sm:min-w-[200px]">
            <CardSKeleton />
          </div>
          <div className=" min-w-[130px] sm:min-w-[200px]">
            <CardSKeleton />
          </div>
          <div className=" min-w-[130px] sm:min-w-[200px]">
            <CardSKeleton />
          </div>
          <div className=" min-w-[130px] sm:min-w-[200px]">
            <CardSKeleton />
          </div>
          <div className=" min-w-[130px] sm:min-w-[200px]">
            <CardSKeleton />
          </div>
          <div className=" min-w-[130px] sm:min-w-[200px]">
            <CardSKeleton />
          </div>
          <div className=" min-w-[130px] sm:min-w-[200px]">
            <CardSKeleton />
          </div>
        </div>

        <div className="hidden sm:flex absolute right-0 top-0 bottom-0 z-[70] overflow-hidden rounded-sm">
          <button
            className='flex justify-center items-center h-full w-14 left-0 top-0 bottom-0 bg-gradient-to-l from-dark to-transparent'>
            <div>
              <FaChevronRight color='white' size={40} />
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

