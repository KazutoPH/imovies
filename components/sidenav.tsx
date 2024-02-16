import { navList } from '@/constants/constant'
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link'
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { FaX } from 'react-icons/fa6'

interface Props {
  setSideNavPress: Dispatch<SetStateAction<boolean>>;
  sideNavPress: boolean
}

function SideNav({setSideNavPress, sideNavPress}:Props) {
  const elementRef = useRef<HTMLDivElement>(null);

  return (
    <div className='darkbg'>

      <motion.div
      ref={elementRef}
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        transition={{ ease: 'easeInOut', duration: 0.2 }}
        exit={{ x: '100%' }}
      className='absolute right-0 h-full bg-dark z-50'>
        <div className='flex flex-col px-5'>
          <div
          onClick={ ()=> setSideNavPress(false) }
          className='flex self-end my-[15px] hover:cursor-pointer'>
            <FaX
            size={30}
            color="white"
            />
          </div>
        
          {navList.map((nav, i) =>
            <div>
              <div className='p-2 -my-2 hover:bg-grey ease-in transition rounded'>
                <p key={i} className='font-semibold text-xl text-white whitespace-nowrap'>{nav.name}</p>
              </div>

              <div>
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

      </motion.div>
    </div>
  )
}

export default SideNav