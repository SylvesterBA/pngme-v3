import React from 'react'
import Image from 'next/image'

const CareersMission = () => (
  <div className="bg-white flex flex-col relative">
    <div className="absolute right-0 -top-2 md:hidden">
      <Image
        src="/images/quarter-circle.svg"
        alt="Quarter circle image"
        className="flipVertically"
        width={100}
        height={100}
      />
    </div>

    <div className="hidden absolute right-0 -top-2 md:block">
      <Image
        src="/images/quarter-circle.svg"
        alt="Quarter circle image"
        className="flipVertically"
        width={125}
        height={125}
      />
    </div>

    <div className="flex flex-col justify-start relative pt-20 px-5 pb-10 md:flex-row max-w-7xl mx-auto md:px-24 2xl:px-0">
      <div className="hidden xl:flex absolute left-0 -bottom-2 z-10 2xl:-left-28">
        <div className="relative w-full">
          <Image src="/images/career-pink-circle.svg" alt="Pink circle image" width={400} height={110} />

          <div className="absolute -top-10 right-5">
            <Image src="/images/career-purple-circle.svg" alt="Purple circle image" width={75} height={75} />
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full">
        <span className="text-primary-pink font-pngme-inter font-bold uppercase text-base md:text-xl pb-4">Our mission</span>
        <span className="font-pngme-helvetica text-xl pb-5 md:pr-14 lg:text-3xl">Pngme is democratizing access to mission-critical data infrastructure and machine learning models.</span>

        <div className="hidden md:flex px-3 pt-10 flex-col w-3/5">
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt abedo</span>
          <span className="text-primary-pink pt-5 underline underline-offset-4">Check available positions</span>
        </div>
      </div>

      <div className='flex justify-evenly mt-64 relative max-w-md'>
        <div className="flex bg-dark-yellow pt-28 pb-8 px-4 w-3/4 rounded-lg max-h-60">
          <span>These components are the building blocks for anyone to create innovative products and customized user experiences.</span>
          
          <div className="flex flex-col absolute h-88 left-16 -top-64 px-6 pt-10 pb-5 bg-white rounded boxshadow">
            <Image src="/images/careerCard.png" alt="Career Card Image" width={300} height={200} />
            <div className="absolute top-4 right-2">
              <Image src="/icons/atom-circle.svg" alt="Career Card Atom" width={60} height={60} />
            </div>

            <span className='text-sm pt-4'>
              We provide 
              <span className="text-primary-pink"> developer-friendly </span>
              data infrastructure,
              <span className="text-primary-pink"> out-of-the-box </span>
              machine learning models, 
              <span className="text-primary-pink"> insights </span>
              , and 
              <span className="text-primary-pink"> data science tools </span>
              through our technology.
            </span>
          </div>

        </div>
        <Image src="/icons/twisted-arrow.svg" alt="twisted-arrow" width={60} height={60} className="top-10! right-10!"/>
      </div>

      <div className="px-3 pt-10 flex flex-col md:hidden">
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt abedo</span>
        <span className="text-primary-pink pt-5 underline underline-offset-4">Check available positions</span>
      </div>
    </div>
  </div>
)

export default CareersMission
