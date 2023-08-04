import React from 'react'
import {Bmwm6Canvas, BugattiEB110Canvas, RossaCanvas, MBG900Canvas, MBMaybachCanvas} from './canvas'

const Hero = () => {
  return (
    <section className='relative w-screen h-screen mx-auto'>
        <h1 className='text-4xl font-bold text-center text-white'>Online Car Showcase</h1>
      <div>
        <h2 className='text-2xl font-bold text-center text-white'>BMW M6</h2>
        <Bmwm6Canvas />
      </div>
      <div>
        <h2 className='text-2xl font-bold text-center text-white'>Rossa</h2>
        <RossaCanvas />
      </div>
      <div>
        <h2 className='text-2xl font-bold text-center text-white'>Bugatti EB110 Super Sport 1992</h2>
        <BugattiEB110Canvas />
      </div>
      <div>
        <h2 className='text-2xl font-bold text-center text-white'>Mercedes-Benz G900</h2>
        <MBG900Canvas />
      </div>
      <div>
        <h2 className='text-2xl font-bold text-center text-white'>Mercedes-Benz Maybach 2022</h2>
        <MBMaybachCanvas />
      </div>
    </section>
  )
}

export default Hero