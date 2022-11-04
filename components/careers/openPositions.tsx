import React from 'react'
import Image from 'next/image'
import Button from '../button'

const CareersOpenPositions = () => (
  <div className="flex flex-col pt-20 px-4 max-w-7xl mx-auto md:px-24 2xl:px-0 z-20">
    <div className="flex flex-col md:flex-row md:justify-between">
      <div className='flex flex-col'>
        <p className='font-pngme-helvetica text-3xl xl:text-4xl'>Open Positions</p>
        <span className="text-lg py-4 md:w-2/3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</span>
      </div>

      <div className='hidden md:flex items-center'>
        <span className="text-xl">Can&apos;t find your position?
          <span className="text-primary-pink"> Message Us </span>
        </span>
      </div>

    </div>

    {[1,2,3].map((item, index) => (
      <div key={index} className="flex flex-col md:flex-row py-4 my-4 bg-white rounded-xl md:justify-between">
        <div className="md:hidden flex pl-5 py-5">
          <Image src="/icons/atom-circle-yellow.svg" alt="Careers" width={60} height={60} />
        </div>


        <div className="hidden md:flex px-5 py-5">
          <Image src="/icons/atom-circle-yellow.svg" alt="Careers" width={90} height={90} />
        </div>

        <div className="px-6 md:flex md:pr-2 md:flex-col md:mr-auto">
          <p className="text-sm text-gray-500 pb-3">Data Science</p>
          <p className="text-xl font-bold">Data Scientist: Real-time Credit & Insights (Remote)</p>
          <div className="flex items-center py-5">
            <Image src="/icons/location.svg" alt="Location" width={20} height={20} />
            <span className="pl-2 pr-5">Nairobi, Kenya</span>
            <Image src="/icons/position-type.svg" alt="Location" width={20} height={20} />
            <span className="pl-2">Full Time</span>
          </div>
        </div>

        <div className="flex flex-col mx-8 sm:flex-row justify-center md:flex-col md:w-48 lg:flex-row lg:w-96 lg:items-center">
          <Button type="primary" label="Apply" additionalStyles="w-full py-4 px-2 mb-2 sm:mb-0 sm:mr-4 md:mb-2 md:mr-0 lg:mb-0 lg:mr-2"/>
          <Button type="outlined" label="View Details" additionalStyles="w-full py-4 px-2 mt-2 sm:mt-0 sm:ml-4 md:mt-2 md:ml-0 lg:mt-0 lg:ml-2" />
        </div>
      </div>
    ))}
  </div>
)

export default CareersOpenPositions
