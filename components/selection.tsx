"use client"

import { selection } from '@/constants/constant'
import { motion, useDragControls } from 'framer-motion'
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
import { navList } from '@/constants/constant';

function Selection() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);
  const [select, setSelect] = useState<any>(params.get('query'))
  const [containerWidth, setContainerWidth] = useState(0);
  let movietype = params.get('type')
  let query = params.get('query')
  const ref = useRef<HTMLDivElement>(null)
  const dragControls = useDragControls();
  
  const selectionList = navList.find(( list => list.type === params.get('type') ))

  useEffect(()=> {
    handleScreenResize()
    let query = params.get('query')
    setSelect(query)
  },[movietype, query])
  

  function handleScreenResize() {
    if (ref.current) {
      const newWidth = ref.current.scrollWidth - ref.current.offsetWidth;
      setContainerWidth(newWidth)
      // console.log(newWidth)
      // console.log('screenwidth', ref.current.offsetWidth)
    }
  }

  return (
    <div className='flex flex-col'>
      <h1 className='text-white text-3xl font-bold mt-5 border-l-yellow-400 border-l-[5px] pl-5'>{selectionList?.name}</h1>
      <motion.div 
      ref={ref}
      drag="x"
      dragControls={dragControls}
      dragConstraints={{ left: -(containerWidth), right: 0 }}
      className='flex flex-row gap-5'>
        {selectionList?.category.map((data, i) =>

          <motion.div 
          whileHover={{ scale: 1.1 }}
          transition={{ ease: 'easeIn', duration: 0.1 }}
          className='flex flex-col items-center relative py-2 px-5 hover:cursor-pointer' key={i}
            onClick={() => {
              setSelect(data.filter)
              params.set('query', data.filter)
              replace(`${pathname}?${params.toString()}`)
            }}>
            <h1 className='text-white text-2xl font-bold whitespace-nowrap'>{data.name}</h1>

            {/* <div className=' absolute bottom-0 h-3 bg-red-600 w-full'/> */}
              
            {select === data.filter && (
              <motion.div
                layoutId='activepath'
                transition={{
                  type: 'spring',
                  stiffness: 350,
                  damping: 30,
                }}
                className={`absolute bottom-0 ${select === data.filter ? 'w-full bg-yellow-400' : 'w-0'} h-[3px]`}>
                  
              </motion.div>
            )}
          </motion.div>


        )}
      </motion.div>

    </div>

  )
}

export default Selection