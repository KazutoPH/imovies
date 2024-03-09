import { navList } from '@/constants/constant';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link'
import React, { Dispatch, SetStateAction, useRef, useState } from 'react'
import { FaX } from 'react-icons/fa6'
import { FaChevronDown } from 'react-icons/fa6';


interface Props {
  setSideNavPress: Dispatch<SetStateAction<boolean>>;
  sideNavPress: boolean,
  tvgenres: Array<any>,
  moviegenres: Array<any>,
}

function SideNav({ setSideNavPress, sideNavPress, moviegenres, tvgenres }: Props) {
  const [selectedType, setSelectedType] = useState('')
  const elementRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      initial={{ background: 'rgb(18, 18, 18, 0)' }}
      animate={{ background: 'rgb(18,18,18, 0.8)' }}
      transition={{ duration: 0.2 }}
      exit={{ background: 'rgb(18, 18, 18, 0)' }}
      className='darkbg md:hidden'>

      <motion.div
        ref={elementRef}
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        transition={{ ease: 'easeInOut', duration: 0.25 }}
        exit={{ x: '100%' }}
        className='absolute right-0 h-full bg-dark overflow-y-scroll pb-5'>
        <div className='flex flex-col px-[5vw] md:px-2'>
          <div
            onClick={() => setSideNavPress(false)}
            className='flex self-end my-[15px] hover:cursor-pointer'>
            <FaX
              size={30}
              color="white"
            />
          </div>

          <div className='flex flex-col gap-5'>
            {navList.map((nav, i) =>
              <div key={i}>
                <div
                  onClick={() => {
                    if (nav.name !== selectedType)
                      setSelectedType(nav.name)

                    else
                      setSelectedType('')
                  }}
                  className='flex flex-row justify-between items-center p-2 -my-2 hover:bg-grey hover:cursor-pointer ease-in transition rounded'>
                  <div className='flex items-center'>
                    {nav.icon}
                    <p className='font-semibold text-xl text-white whitespace-nowrap ml-2'>{nav.name}</p>
                  </div>
                  <div className={`ml-2 ${nav.name=== selectedType ? ' -rotate-180':''} transition`}>
                  <FaChevronDown
                    size={20}
                    color='white'
                  />
                  </div>
                </div>

                <AnimatePresence>
                  {selectedType === nav.name &&
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      transition={{ duration: 0.5 }}
                      exit={{ height: 0 }}
                      className=' overflow-hidden'
                    >
                      {nav.category.map((category, x) =>
                        <div
                          onClick={() => setSideNavPress(false)}
                          className='hover:bg-grey ease-in transition hover:cursor-pointer p-2 ml-7' key={x}>
                          <Link href={`/list?type=${nav.type}&query=${category.filter}`}>
                            <p key={x} className=' font-medium text-base text-white whitespace-nowrap'>{category.name}</p>
                          </Link>

                        </div>
                      )}

                      {nav.name === 'movies' ? (
                        <>
                          {moviegenres.map((data, x) =>
                            <div
                              onClick={() => setSideNavPress(false)}
                              className='hover:bg-grey ease-in transition hover:cursor-pointer p-2 ml-7' key={x}>
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
                              onClick={() => setSideNavPress(false)}
                              className='hover:bg-grey ease-in transition hover:cursor-pointer p-2 ml-7' key={x}>
                              <Link href={`/list?type=${nav.type}&genre=${data.name.replace(/&/g, '+')}&genreID=${data.id}`}>
                                <p className=' font-medium text-base text-white whitespace-nowrap'>{data.name}</p>
                              </Link>

                            </div>
                          )}
                        </>
                      }

                    </motion.div>
                  }
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>

      </motion.div>
    </motion.div>
  )
}

export default SideNav