"use client"

import React, { useEffect, useState } from 'react'
import { navList } from '../constants/constant'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import SearchBar from './searchbar'
import SearchResults from './searchResult'


function Header() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    console.log(scrollY)
    if(lastScrollY === 0 && window.scrollY < 100){
      setShow(true)
} else {
  if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
    setShow(false); 
  } else { // if scroll up show the navbar
    setShow(true);  
  }
}
    // remember current page location to use in the next move
    setLastScrollY(window.scrollY); 
  };
  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);

    // cleanup function
    return () => {
       window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);



  return (
    
    <AnimatePresence initial={false} >
    <motion.div 
          variants={{
            visible: { opacity: 1, display: 'flex' },
            hidden: { opacity: 0,
              transitionEnd: {
                display: "none"
              }
            }
          }}    
    animate={ show ? 'visible' : 'hidden'}
    transition={{ duration: 0.5 }}
    className={`fixed flex flex-col w-full items-center py-5 shadow-yellow-400 shadow-sm z-[100] bg-dark overflow-visible`}>
      <nav className='content-container flex flex-row gap-10 items-center'>
        <Link href='/'>
        <div className='rounded-md px-2 py-1 bg-yellow-400'>
          <p className='font-extrabold text-3xl'>iMovies</p>
        </div>
        </Link>

        <div className='w-full relative'>
        <div className='flex flex-row w-full'>
          <div>

          </div>
          <SearchBar/>
        </div>
          <SearchResults/>
        </div>
        
        <div className='flex flex-row gap-5'>
          {navList.map((nav, i) =>
          <Link href={`/list?type=${nav.type}&query=popular`} key={i}>
            <p key={i} className='font-semibold text-lg text-white whitespace-nowrap'>{nav.name}</p>
          </Link>

          )}
        </div>
      </nav>
    </motion.div>
  
    </AnimatePresence>
  )
}

export default Header