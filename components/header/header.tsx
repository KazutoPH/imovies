"use client"

import React, { useEffect, useState } from 'react'
import { navList } from '@/constants/constant'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import SearchBar from './searchbar'
import SearchResults from './searchResult'
import { FaBars, FaBurger } from 'react-icons/fa6'
import SideNav from './sidenav'
import { getGenres } from '@/lib/actions/movies.action'

function Header() {
  const [show, setShow] = useState(true);
  const [sideNavPress, setSideNavPress] = useState(false)
  const [ishover, setIsHover] = useState(false)
  const [selectedHover, setSelectedHover] = useState(0)
  const [lastScrollY, setLastScrollY] = useState(0);
  const [moviegenres, setMovieGenres] = useState<any[]>([])
  const [tvgenres, setTvGenres] = useState<any[]>([])
  const [searchbarFocus, setSearchBarFocus] = useState(false)

  useEffect(() => {
    async function getMovieGenres() {
      const moviegenre = await getGenres('movie')
      setMovieGenres(moviegenre)
    }

    async function getTvGenres() {
      const moviegenre = await getGenres('tv')
      setTvGenres(moviegenre)
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
    <div className='relative z-40'>
      <AnimatePresence initial={false} >
        <motion.div
          variants={{
            visible: { opacity: 1, display: 'flex' },
            hidden: { opacity: 0, height: 0, paddingTop: 0, paddingBottom: 0, overflow: 'hidden' }
          }}
          animate={show ? 'visible' : 'hidden'}
          className={`fixed top-0 flex flex-col w-full items-center py-3 shadow-yellow-400 shadow-sm z-[50] bg-dark overflow-visible h-[60px] `}>

          <nav className={`content-container flex flex-row ${!searchbarFocus ? 'gap-5' : ''} md:gap-10 items-center`}>

            <div className='md:hidden'>
              <AnimatePresence initial={false}>
                {!searchbarFocus &&
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 'auto', opacity: 1 }}
                    exit={{ width: 0, overflow: 'hidden', opacity: 0 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}>
                    <Link href='/'>
                      <div className='rounded-md px-2 bg-yellow-400'>
                        <p className='font-extrabold text-2xl'>iMovies</p>
                      </div>
                    </Link>
                  </motion.div>
                }
              </AnimatePresence>
            </div>

            <div className=' hidden md:flex'>
              <Link href='/'>
                <div className='rounded-md px-2 bg-yellow-400'>
                  <p className='font-extrabold text-2xl'>iMovies</p>
                </div>
              </Link>
            </div>


            <div className='w-full relative'>
              <div className='flex-row w-full'>
                <SearchBar searchbarFocus={searchbarFocus} setSearchBarFocus={setSearchBarFocus} />
              </div>
              <SearchResults />
            </div>

            <div className='md:flex flex-row gap-2 hidden relative overflow-visible'>
              {navList.map((nav, i) =>
                <div
                  key={i}
                  onMouseEnter={() => {
                    setSelectedHover(i)
                    setIsHover(true)
                  }}
                  onMouseLeave={() => {
                    setIsHover(false)
                  }}
                  onClick={() => setIsHover(false)}
                >
                  <Link href={`/list?type=${nav.type}&query=popular`}>
                    <div
                      className='p-2 -my-2 hover:bg-grey ease-in transition rounded'>
                      <p className='font-semibold text-xl text-white whitespace-nowrap'>{nav.name}</p>
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
                          <Link href={`/list?type=${nav.type}&query=${category.filter}`} key={x}>
                            <div className='hover:bg-grey ease-in transition hover:cursor-pointer py-2 px-4'>
                              <p className=' font-medium text-base text-white whitespace-nowrap'>{category.name}</p>
                            </div>
                          </Link>

                        )}

                        {selectedHover === 0 ? (
                          <>
                            {moviegenres.map((data, x) =>
                              <Link href={`/list?type=${nav.type}&genre=${data.name}&genreID=${data.id}`} key={x}>
                                <div
                                  className='hover:bg-grey ease-in transition hover:cursor-pointer py-2 px-4'>
                                  <p className=' font-medium text-base text-white whitespace-nowrap'>{data.name}</p>
                                </div>
                              </Link>
                            )}
                          </>
                        ) :
                          <>
                            {tvgenres.map((data, x) =>
                              <Link href={`/list?type=${nav.type}&genre=${data.name.replace(/&/g, '+')}&genreID=${data.id}`} key={x}>
                                <div
                                  className='hover:bg-grey ease-in transition hover:cursor-pointer py-2 px-4' >
                                  <p className=' font-medium text-base text-white whitespace-nowrap'>{data.name}</p>
                                </div>
                              </Link>
                            )}
                          </>
                        }

                      </div>
                    </motion.div>
                  }
                </div>
              )}

            </div>

            <div className='md:hidden'>
              <AnimatePresence initial={false} >
                {!searchbarFocus &&
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 'auto', opacity: 1 }}
                    exit={{ width: 0, overflow: 'hidden', opacity: 0 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    onClick={() => setSideNavPress(!sideNavPress)}
                    className=' hover:cursor-pointer'>
                    <FaBars
                      size={30}
                      color='white'
                    />
                  </motion.div>
                }
              </AnimatePresence>
            </div>

          </nav>
        </motion.div>

      </AnimatePresence>

      <AnimatePresence>
        {sideNavPress &&
          <SideNav
            setSideNavPress={setSideNavPress}
            sideNavPress={sideNavPress}
            moviegenres={moviegenres}
            tvgenres={tvgenres}
          />
        }
      </AnimatePresence>
    </div>
  )
}

export default Header