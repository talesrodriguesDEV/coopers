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
    <section className='border flex flex-col items-center'>
      <div className='bg-coopers-green px-36 py-20 relative right-4 rounded' />
      <h1 className='text-white absolute left-10'>good things</h1>
      <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} className='border absolute'>
        <img className='w-[300px]' src={goodThings[currentIndex].picture} alt={goodThings[currentIndex].alt} />
        <img className='' src={smallV} alt="Small Coopers logo' logo" />
        <div className=''>
          <h2 className=''>function</h2>
          <p className=''>{goodThings[currentIndex].text}</p>
          <a href='' className=''>read more</a>
        </div>
      </div>
      <div className=''>
        {goodThings.map((_thing, index) => {
          if (index === currentIndex) return <img key={index} src={greenDot} alt="Green Dot" />
          return <img key={index} src={grayDot} alt="Gray Dot" onClick={() => setCurrentIndex(index)} />
        })}
      </div>
    </section>
  )
}
