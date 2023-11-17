import React from 'react'
import { navList } from '../constants/constant'
import Link from 'next/link'

function Header() {
  return (
    <div className='flex flex-col w-full items-center py-5'>
      <nav className='content-container flex flex-row gap-10 items-center'>
        <Link href='/'>
        <div className='rounded-md px-2 py-1 bg-yellow-400'>
          <p className='font-extrabold text-3xl'>iMovies</p>
        </div>
        </Link>
        <div className='flex flex-row gap-5'>
          {navList.map((nav, i) =>
            <p key={i} className='font-semibold text-lg text-white'>{nav.name}</p>
          )}
        </div>
      </nav>
    </div>
  )
}

export default Header