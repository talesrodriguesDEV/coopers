import React, { TouchEvent, useEffect, useState } from 'react'

import smallV from '../images/good-things/small-v.png'
import greenDot from '../images/good-things/green-dot.png'
import grayDot from '../images/good-things/gray-dot.png'

import { goodThings } from '../utils'

export default function GoodThings() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState<null | boolean>(null)
  const [x1, setX1] = useState(0)
  const [x2, setX2] = useState(0)

  const handleTouchStart = (e: TouchEvent) => {
    setIsDragging(true)
    setX1(e.changedTouches[0].pageX)
  }

  const handleTouchEnd = (e: TouchEvent) => {
    setIsDragging(false)
    setX2(e.changedTouches[0].pageX)
  }

  const nextSlide = () => {
    if (currentIndex === goodThings.length - 1) setCurrentIndex(0)
    else setCurrentIndex(prev => prev + 1)
  }

  const previousSlide = () => {
    if (currentIndex === 0) setCurrentIndex(goodThings.length - 1)
    else setCurrentIndex(prev => prev - 1)
  }

  useEffect(() => {
    if (isDragging === false) {
      if (x1 > x2) nextSlide()
      else if (x1 < x2) previousSlide()
    }
  }, [isDragging])

  return (
    <section className='flex flex-col items-center montserrat -mt-32'>
      <div className='bg-coopers-green px-36 py-28 sm:px-[35%] sm:py-32 lg:py-64 relative right-4 sm:right-10 rounded lg:px-[360px]' />
      <h1 className='text-white absolute left-12 sm:left-24 md:left-32 lg:left-1/4 xl:left-1/3 mt-2 font-extrabold text-lg lg:mt-6 lg:text-3xl'>good things</h1>
      <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} className='absolute w-3/4 max-w-[700px] mt-10 lg:mt-20 rounded-lg overflow-hidden drop-shadow-[8px_8px_24px_rgba(12,41,208,0.16)] bg-white'>
        <img className='w-[300px] sm:w-full max-w-[700px]' src={goodThings[currentIndex].picture} alt={goodThings[currentIndex].alt} />
        <img className='absolute bottom-[7.6rem] left-56 md:left-[30rem] md:bottom-[10.8rem] xl:bottom-[17rem]' src={smallV} alt="Small Coopers' logo" />
        <div className='h-[150px] md:h-[200px] xl:h-[300px] flex flex-col justify-between p-4'>
          <h2 className='text-coopers-gray border border-coopers-gray w-min py-1.5 px-2 rounded-full leading-none'>function</h2>
          <p className=''>{goodThings[currentIndex].text}</p>
          <a href='' className='text-coopers-green font-semibold'>read more</a>
        </div>
      </div>
      <div className='mt-40 sm:mt-64 md:mt-96 lg:mt-40 xl:mt-72 flex w-1/4 max-w-[264px] justify-around'>
        {goodThings.map((_thing, index) => {
          if (index === currentIndex) return <img className='cursor-pointer' key={index} src={greenDot} alt="Green Dot" />
          return <img className='cursor-pointer' key={index} src={grayDot} alt="Gray Dot" onClick={() => setCurrentIndex(index)} />
        })}
      </div>
    </section>
  )
}
