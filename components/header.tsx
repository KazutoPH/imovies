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
    if (window.scrollY === 0 || window.scrollY < 100) {
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
          hidden: { opacity: 0, height: 0, paddingTop: 0, paddingBottom: 0, overflow: 'hidden' }
        }}
        animate={show ? 'visible' : 'hidden'}
        className={`fixed top-0 flex flex-col w-full items-center py-3 shadow-yellow-400 shadow-sm z-[100] bg-dark overflow-visible`}>
        <nav className='content-container flex flex-row gap-10 items-center'>
          <Link href='/'>
            <div className='rounded-md px-2 py-[2px] bg-yellow-400'>
              <p className='font-extrabold text-2xl'>iMovies</p>
            </div>
          </Link>

          <div className='w-full relative'>
            <div className='flex flex-row w-full'>
              <div>

              </div>
              <SearchBar />
            </div>
            <SearchResults />
          </div>

          <div className='flex flex-row gap-2'>
            {navList.map((nav, i) =>
              <div className='group'>
                <Link href={`/list?type=${nav.type}&query=popular`} key={i}>
                  <div className='p-2 -my-2 hover:bg-grey ease-in transition rounded'>
                    <p key={i} className='font-semibold text-xl text-white whitespace-nowrap'>{nav.name}</p>
                  </div>

                </Link>

                <div className='hidden group group-hover:md:flex hover:md:flex flex-col bg-darkgrey absolute rounded py-2 mt-[10px]'>
                  {nav.category.map((category, x) =>
                    <div className='hover:bg-grey ease-in transition hover:cursor-pointer py-2 px-4' key={x}>
                      <Link href={`/list?type=${nav.type}&query=${category.filter}`}>
                        <p key={x} className=' font-medium text-base text-white whitespace-nowrap'>{category.name}</p>
                      </Link>

                    </div>
                  )}
                </div>
              </div>
            )}

          </div>
        </nav>
      </motion.div>

    </AnimatePresence>
  )
}

export default Header