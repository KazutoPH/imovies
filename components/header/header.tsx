"use client"

import React, { useEffect, useState } from 'react'
import { navList } from '@/constants/constant'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import SearchBar from './searchbar'
import SearchResults from './searchResult'
import { FaBars, FaBurger } from 'react-icons/fa6'
import SideNav from '../sidenav'
import { getGenres } from '@/lib/actions/movies.action'

function Header() {
  const [show, setShow] = useState(true);
  const [sideNavPress, setSideNavPress] = useState(false)
  const [ishover, setIsHover] = useState(false)
  const [selectedHover, setSelectedHover] = useState(0)
  const [lastScrollY, setLastScrollY] = useState(0);
  const [moviegenres, setMovieGenres] = useState<any[]>([])
  const [tvgenres, setTvGenres] = useState<any[]>([])

  useEffect(() => {
    async function getMovieGenres() {
      const moviegenre = await getGenres('movie')
      setMovieGenres(moviegenre)
    }

    async function getTvGenres() {
      const moviegenre = await getGenres('tv')
      setTvGenres(moviegenre)
      console.log(moviegenres)
    }

    getMovieGenres()
    getTvGenres()
  }, [])

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
    <div className='relative z-[60]'>
      <AnimatePresence initial={false} >
        <motion.div
          variants={{
            visible: { opacity: 1, display: 'flex' },
            hidden: { opacity: 0, height: 0, paddingTop: 0, paddingBottom: 0, overflow: 'hidden' }
          }}
          animate={show ? 'visible' : 'hidden'}
          className={`fixed top-0 flex flex-col w-full items-center py-3 shadow-yellow-400 shadow-sm z-[50] bg-dark overflow-visible`}>
          <nav className='content-container flex flex-row gap-10 items-center'>
            <Link href='/'>
              <div className='rounded-md px-2 py-[2px] bg-yellow-400'>
                <p className='font-extrabold text-2xl'>iMovies</p>
              </div>
            </Link>

            <div className='w-full relative'>
              <div className='hidden md:flex flex-row w-full'>
                <div>

                </div>
                <SearchBar />
              </div>
              <SearchResults />
            </div>

            <div className='md:flex flex-row gap-2 hidden relative overflow-visible'>
              {navList.map((nav, i) =>
                <div
                  onMouseEnter={() => {
                    setSelectedHover(i)
                    setIsHover(true)
                  }}
                  onMouseLeave={() => {
                    setIsHover(false)
                  }}
                >
                  <Link href={`/list?type=${nav.type}&query=popular`} key={i}>
                    <div className='p-2 -my-2 hover:bg-grey ease-in transition rounded'>
                      <p key={i} className='font-semibold text-xl text-white whitespace-nowrap'>{nav.name}</p>
                    </div>
                  </Link>

                  {ishover && selectedHover === i &&
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                      exit={{ height: 0 }}
                      className='w-max flex-col bg-darkgrey absolute right-0 rounded py-2 px-1 mt-[10px] overflow-hidden'>
                      <div className='grid grid-cols-3'>
                        {nav.category.map((category, x) =>
                          <div className='hover:bg-grey ease-in transition hover:cursor-pointer py-2 px-4' key={x}>
                            <Link href={`/list?type=${nav.type}&query=${category.filter}`}>
                              <p key={x} className=' font-medium text-base text-white whitespace-nowrap'>{category.name}</p>
                            </Link>

                          </div>
                        )}

                        {selectedHover === 0 ? (
                          <>
                            {moviegenres.map((data, x) =>
                              <div 
                              onClick={()=> setIsHover(false)}
                              className='hover:bg-grey ease-in transition hover:cursor-pointer py-2 px-4' key={x}>
                                <Link href={`/list?type=${nav.type}&genre=${data.name}&genreID=${data.id}`}>
                                  <p key={x} className=' font-medium text-base text-white whitespace-nowrap'>{data.name}</p>
                                </Link>

                              </div>
                            )}
                          </>
                        ) :
                          <>
                            {tvgenres.map((data, x) =>
                              <div 
                              onClick={()=> setIsHover(false)}
                              className='hover:bg-grey ease-in transition hover:cursor-pointer py-2 px-4' key={x}>
                                <Link href={`/list?type=${nav.type}&genre=${data.name.replace(/&/g, '+')}&genreID=${data.id}`}>
                                  <p className=' font-medium text-base text-white whitespace-nowrap'>{data.name}</p>
                                </Link>

                              </div>
                            )}
                          </>
                        }

                      </div>
                    </motion.div>
                  }
                </div>
              )}

            </div>

            <div
              onClick={() => setSideNavPress(!sideNavPress)}
              className='relative md:hidden hover:cursor-pointer'>
              <FaBars
                size={30}
                color='white'
              />
            </div>

          </nav>
        </motion.div>

      </AnimatePresence>

      <AnimatePresence>
        {sideNavPress &&
          <SideNav setSideNavPress={setSideNavPress} sideNavPress={sideNavPress} />
        }
      </AnimatePresence>
    </div>
  )
}

export default Header