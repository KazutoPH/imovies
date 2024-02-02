"use client"

import { carouselMovies } from "@/constants/constant"
import Image from "next/image"
import { AnimatePresence, motion, useAnimationControls, useDragControls, useTransform } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa6';
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import MovieCard from "./movieCard";

function MovieCarousel({ movies, title, type }: any) {
  const controls = useDragControls()
  const [isDragging, setIsDragging] = useState(false)
  const [currentSlide, setCurrentSlide] = useState<any>()
  const [containerWidth, setContainerWidth] = useState(0);
  const [isReset, setIsReset] = useState(false);
  const [showLeftButton, setShowLeftButton] = useState(false)

  const ref = useRef<HTMLDivElement>(null)
  const dragControls = useDragControls();
  const animationControls = useAnimationControls();

  // useEffect(()=> {
  //   console.log(ref.current?.outerWidth)
  // },[containerWidth])

  

  useEffect(() => {
    function handleScreenResize(){
      if (ref.current) {
        const newWidth = ref.current.scrollWidth - ref.current.offsetWidth;
        setContainerWidth(newWidth)
        console.log(newWidth)
        console.log('screenwidth', ref.current.offsetWidth)
      }
    }

    handleScreenResize()

    window.addEventListener('resize', handleScreenResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleScreenResize);
    };

  }, [ref]);
  // const onDragStart = (event:any, info:any) => {
  //   setIsDragging(true)
    
  //   // if (!event.target.classList.contains("drag-handle")) {
  //   //   controls.start(event);
  //   // } else {
  //   //   (controls as any).componentControls.forEach((entry:any) => {
  //   //     entry.stop(event, info);
  //   //   });
  //   // }
  // };

  // console.log(movies)

  const SPRING_ANIMATION = {
    type:"spring",
    mass: 3,
    stiffness:400,
    damping: 50,
  }

  const onLeftPress = () => {
    if(ref.current){
    let total = currentSlide+ref.current.offsetWidth
    if(total <= 0){
    animationControls.set({
      x: currentSlide+ref.current.offsetWidth,
      y:0
    })
  } else {
    animationControls.set({
      x: 0,
      y:0
    })   
  }
  }
  }

  const DRAGGING = (e:any) => {
    if(e.x < 0 ) {
      setShowLeftButton(true)
    } else {
      setShowLeftButton(false)
    }
    setCurrentSlide(e.x)

    console.log(e.x)
  }

  
  return (
    <div className='content-container py-10 overflow-hidden '>

      {title ? (
        <h1 className='text-white text-3xl font-extrabold self-start'>{title}</h1>
      ) : null}

      <div className="relative sm:overflow-x-clip">

      <AnimatePresence>
      {showLeftButton && 
      <div className="absolute left-0 top-0 bottom-0 z-[100] overflow-hidden rounded-sm">
            <motion.button
            whileTap={{ scale: 1.1 }}
            whileHover={{ scale: 1.2 }}
            className='flex justify-center items-center h-full w-14 left-0 top-0 bottom-0 bg-gradient-to-r from-yellow-400 to-transparent'
            onClick={() => {
              onLeftPress()
            }}>
            <FaChevronLeft color='white' size={40} />
          </motion.button>
      </div>

      }
      </AnimatePresence>
 
      <motion.div 
      ref={ref}
      drag="x"
      animate={animationControls}
      dragControls={dragControls}
      transition={SPRING_ANIMATION}
      dragConstraints={{ left: -(containerWidth), right: 0}}
      onDragStart={(e)=> {
        // console.log(e)
        setIsDragging(true)
      }}
      onDrag={(e)=> setIsDragging(true) }
      onDragEnd={(e)=> console.log(e)}
      onUpdate={(e:any)=> DRAGGING(e) }
      className='flex flex-row w-full gap-2 z-[60] relative overflow-visible'>
        {movies && movies?.results?.map((movie: any, i: any) =>
        <div className=" min-w-[130px] sm:min-w-[200px]"  key={i}>
          <MovieCard movie={movie} i={i} type={type} isDragging={isDragging}/>
        </div>  
          
        )}
      </motion.div>
     </div> 
    </div>
  )
}

export default MovieCarousel