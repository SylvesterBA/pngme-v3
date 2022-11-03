import type { NextPage } from 'next'
import Image from 'next/image'
import Button from '../components/button'
import CareersMission from '../components/careers/mission'
import CareersOpenPositions from '../components/careers/openPositions'

const Careers: NextPage = () => (
  <>
    <div className="flex flex-col justify-start relative pt-20 px-5 pb-10 md:flex-row max-w-7xl mx-auto md:px-24 2xl:px-0">
      <div className="flex flex-col w-full md:justify-center">
        <span className="text-primary-pink font-pngme-inter font-bold uppercase text-s md:text-xl pb-4">Join Us</span>
        <span className="font-pngme-helvetica text-3xl 2xl:text-4lg pb-5 md:pr-14 xl:text-4xl">We want people to always be in a state of flow</span>
        <span className="text-base 2xl:text-lg font-pngme-inter font-thin md:pr-24">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</span>
        <Button type='primary' label="Check available positions" additionalStyles="my-6 py-4 px-8 w-fit text-sm" />
      </div>

      <div className="md:hidden mx-auto">
        <Image src="/images/careersHeader.svg" alt="Careers" width={400} height={400} />
      </div>
      <div className="hidden md:block">
        <Image src="/images/careersHeader.svg" alt="Careers" width={800} height={800} />
      </div>
    </div>

    <CareersMission />
    <CareersOpenPositions />

    <div className='flex flex-col px-4 py-6 max-w-7xl mx-auto md:px-24 2xl:px-0 md:pb-16'>
      <Button type="secondary" label="See more" additionalStyles="w-48 md:w-56 py-4" />
      <span className="py-8 text-xl md:hidden">Can't find your position?
        <span className="text-primary-pink"> Message Us </span>
      </span>
    </div>
  </>
)

export default Careers
