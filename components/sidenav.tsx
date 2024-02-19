import { navList } from '@/constants/constant';
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
      className='absolute right-0 h-full bg-dark'>
        <div className='flex flex-col px-[5vw] md:px-2'>
          <div
          onClick={ ()=> setSideNavPress(false) }
          className='flex self-end my-[15px] hover:cursor-pointer'>
            <FaX
            size={30}
            color="white"
            />
          </div>
        
        <div className='flex flex-col gap-5'>
          {navList.map((nav, i) =>
            <div>
              <div className='flex flex-row items-center p-2 -my-2 hover:bg-grey ease-in transition rounded'>
                <div>
                {nav.icon}
                </div>  

                <p key={i} className='font-semibold text-xl text-white whitespace-nowrap ml-2'>{nav.name}</p>
              </div>
              <div>
                {nav.category.map((category, x) =>
                  <div
                  onClick={()=> setSideNavPress(false) }
                  className='hover:bg-grey ease-in transition hover:cursor-pointer py-2 pl-7' key={x}>
                    <Link href={`/list?type=${nav.type}&query=${category.filter}`}>
                      <p key={x} className=' font-medium text-base text-white whitespace-nowrap'>{category.name}</p>
                    </Link>

                  </div>
                )}
              </div>
            </div>
          )}
          </div>
        </div>

      </motion.div>
    </motion.div>
  )
}

export default SideNav