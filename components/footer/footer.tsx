import { footerLinks } from '@/constants/constant'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='w-full'>
      <div className='content-container mx-auto flex flex-row gap-10 justify-evenly py-10 flex-wrap'>
        {footerLinks.map((data, i) => 
          <div className='flex flex-col gap-3' key={i}>
            <h1 className='text-lg font-bold text-white'>
              {data.title}
              </h1>
            <div className='flex flex-col gap-3'>
              {data.links.map((link, x) => 
              <div className='w-full hover:text-white' key={x}>
                <Link href={link.links}>
                <p className='text-base hover:text-white text-white/50 hover:cursor-pointer'>
                  {link.name}
                </p>
                </Link>
              </div>  
              )}
            </div>
          </div>  
        )}
      </div>
    <div className='w-full flex items-center justify-center bg-yellow-400 py-1'>
      <p className='text-[14px] font-medium text-dark'>iMovies 2024 || All rights reserve</p>
    </div>
    </div>

  )
}

export default Footer