"use client"

import Movies from '@/components/moviedetails/movies'
import Title from './title'

function page() {  
  return (
    <div className='flex flex-col items-center'>
      
      <div className='content-container z-30'>
      <Title/>
      <Movies/>

      </div>
    </div>

  )
}

export default page