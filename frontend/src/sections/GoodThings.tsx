import React, { TouchEvent, useEffect, useState } from 'react'

import rect from '../images/good-things/green-bg.png'
import smallV from '../images/good-things/small-v.png'
import greenDot from '../images/good-things/green-dot.png'
import grayDot from '../images/good-things/gray-dot.png'

import goodThings from '../utils/goodThings'

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
    <section className='mt-20 h-96'>
      <img className='absolute z-0 px-10 h-60' src={rect} alt="Background Decorantion" />
      <h1 className='absolute z-10 left-16 mt-2 text-white montserrat font-bold text-xl'>good things</h1>
      <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} className='w-3/4 h-[350px] absolute z-10 mt-12 left-16 bg-white rounded-xl overflow-hidden drop-shadow-[8px_8px_24px_rgba(12,41,208,0.16)]'>
        <img src={goodThings[currentIndex].picture} alt={goodThings[currentIndex].alt} />
        <img className='absolute right-3 -mt-7' src={smallV} alt="Coopers' logo" />
        <div className='p-3 flex flex-col'>
          <h2 className='text-[#9499B3] border border-[#9499B3] py-0.5 px-2 rounded-xl w-min text-sm'>function</h2>
          <p className='montserrat text-[#312F4F] mt-4 h-24'>{goodThings[currentIndex].text}</p>
          <a href='' className='text-[#42D76B] font-bold justify-end'>read more</a>
        </div>
      </div>
      <div className='absolute flex right-1/3 mt-[25.5rem] w-1/4 justify-between'>
        {goodThings.map((_thing, index) => {
          if (index === currentIndex) return <img key={index} src={greenDot} alt="Green Dot" />
          return <img key={index} src={grayDot} alt="Gray Dot" onClick={() => setCurrentIndex(index)} />
        })}
      </div>
    </section>
  )
}
