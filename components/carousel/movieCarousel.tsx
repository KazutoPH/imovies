"use client"

import { AnimatePresence, motion, useAnimationControls, useDragControls, useTransform } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa6';
import { useEffect, useRef, useState } from "react";
import MovieCard from "../card/movieCard";

function MovieCarousel({ movies, title, type }: any) {
  const controls = useDragControls()
  const [isDragging, setIsDragging] = useState(false)
  const [isClick, setIsCLick] = useState(false)
  const [containerWidth, setContainerWidth] = useState(0);
  const [showLeftButton, setShowLeftButton] = useState(false)
  const [showRightButton, setShowRightButton] = useState(true)
  const ref = useRef<HTMLDivElement>(null)
  const dragControls = useDragControls();
  const animationControls = useAnimationControls();
  const [currentSlide, setCurrentSlide] = useState(0)


  useEffect(() => {
    function handleScreenResize() {
      if (ref.current) {
        const newWidth = ref.current.scrollWidth - ref.current.offsetWidth;
        setContainerWidth(newWidth)
        // console.log(newWidth)
        // console.log('screenwidth', ref.current.offsetWidth)
      }
    }
    handleScreenResize()
    window.addEventListener('resize', handleScreenResize);

    return () => {
      window.removeEventListener('resize', handleScreenResize);
    };

  }, [ref]);


  const SPRING_ANIMATION = {
    type: "spring",
    mass: 3,
    stiffness: 400,
    damping: 50,
  }

  const onLeftPress = () => {
    animationControls.stop()
    let total
    // console.log('left CurrentSlide', currentSlide)
    if (ref.current) {
      total = ref.current.offsetWidth + currentSlide

      if (total < 0) {
        animationControls.start({
          x: total,
          y: 0
        })
        setCurrentSlide(total)
      } else {
        animationControls.start({ x: 0 })
      }

    }

    setIsCLick(true)
  }

  const onRightPress = () => {
    animationControls.stop()
    let total

    if (ref.current) {
      total = currentSlide - ref.current.offsetWidth

      if (total > -containerWidth) {
        animationControls.start({
          x: total,
          y: 0
        })
        setCurrentSlide(total)
      } else {
        animationControls.start({ x: -containerWidth })
        setCurrentSlide(-containerWidth)
      }
    }
    setIsCLick(true)
  }

  const DRAGGING = (e: any) => {

    if (e.x < 0) {
      setShowLeftButton(true)
    } else {
      setShowLeftButton(false)
    }

    if (ref.current)
      if (e.x > -containerWidth) {
        setShowRightButton(true)

      } else {
        setShowRightButton(false)
      }

    if (!isClick)
      setCurrentSlide(e.x)

    // console.log("Drag", e.x)
  }


  return (
    <div className='content-container overflow-visible z-50'>

      {title ? (
        <h1 className='text-white text-3xl font-extrabold self-start border-l-yellow-400 border-l-[5px] pl-5'>{title}</h1>
      ) : null}

      <div className="relative sm:overflow-x-clip py-2 sm:p-5">

        <AnimatePresence>
          {showLeftButton &&
            <div className="hidden sm:flex absolute left-0 top-0 bottom-0 z-[70] overflow-hidden rounded-sm">
              <motion.button
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className='flex justify-center items-center h-full w-14 left-0 top-0 bottom-0 bg-gradient-to-r from-dark to-transparent'
                onClick={() => onLeftPress()}>
                <motion.div
                  whileTap={{ scale: 1.1 }}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.5 }}>
                  <FaChevronLeft color='white' size={40} />
                </motion.div>

              </motion.button>
            </div>
          }
        </AnimatePresence>

        <motion.div
          ref={ref}
          drag="x"
          animate={animationControls}
          transition={SPRING_ANIMATION}
          dragControls={dragControls}
          dragConstraints={{ left: -(containerWidth), right: 0 }}
          onDragStart={() => {
            setIsDragging(true)
            setIsCLick(false)
          }}
          onDragEnd={() => {
            setIsDragging(false)
          }}
          onUpdate={(e: any) => DRAGGING(e)}

          className='flex flex-row w-full gap-2 z-[60] relative'>
          {movies && movies?.results?.map((movie: any, i: any) =>
            <div className=" min-w-[130px] sm:min-w-[200px]" key={i}>
              <MovieCard movie={movie} i={i} type={type} isDragging={isDragging} />
            </div>

          )}
        </motion.div>

        <AnimatePresence>
          {showRightButton &&
            <div className="hidden sm:flex absolute right-0 top-0 bottom-0 z-[70] overflow-hidden rounded-sm">
              <motion.button

                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className='flex justify-center items-center h-full w-14 left-0 top-0 bottom-0 bg-gradient-to-l from-dark to-transparent'
                onClick={() => onRightPress()}>
                <motion.div
                  whileTap={{ scale: 1.1 }}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaChevronRight color='white' size={40} />
                </motion.div>
              </motion.button>
            </div>

          }
        </AnimatePresence>
      </div>
    </div>
  )
}

export default MovieCarousel