"use client"

import { selection } from '@/constants/constant'
import { motion } from 'framer-motion'
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import React, { useState } from 'react'

function Selection() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  const [select, setSelect] = useState('Popular')
  return (
    <div className='flex flex-col'>
      <h1 className='text-white text-3xl font-bold mt-5'>Movies</h1>
      <div className='flex flex-row gap-10'>
        {selection.map((data, i) =>

          <div className='flex flex-col items-center relative py-2 px-5 hover:cursor-pointer' key={i}
            onClick={() => {
              setSelect(data.name)
              params.set('query', data.type)
              replace(`${pathname}?${params.toString()}`)
            }}>
            <h1 className='text-white text-2xl font-bold'>{data.name}</h1>

            {/* <div className=' absolute bottom-0 h-3 bg-red-600 w-full'/> */}
              
            {select === data.name && (
              <motion.div
                layoutId='activepath'
                transition={{
                  type: 'spring',
                  stiffness: 350,
                  damping: 30,
                }}
                className={`absolute bottom-0 ${select === data.name ? 'w-full bg-yellow-400' : 'w-0'} h-[3px]`}>
              </motion.div>
            )}
          </div>


        )}
      </div>

    </div>

  )
}

export default Selection