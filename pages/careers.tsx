import type { NextPage } from 'next'
import Image from 'next/image'
import Button from '../components/button'

const Careers: NextPage = () => {
  return (
    <>
      <div className="flex flex-col justify-start relative pt-20 px-5 pb-20 md:flex-row max-w-7xl mx-auto">
        <div className="flex flex-col w-full">
          <span className="text-primary-pink font-pngme-inter font-bold uppercase text-s md:text-xl pb-4">Join Us</span>
          <span className="font-pngme-helvetica text-3xl 2xl:text-4lg pb-5 md:pr-14">We want people to always be in a state of flow</span>
          <span className="text-base 2xl:text-lg font-pngme-inter font-thin md:pr-24">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</span>
          <Button type='primary' label="Check available positions" additionalStyles="my-6 py-4 px-8 w-fit text-sm" />
        </div>

        <Image src="/images/careersHeader.svg" alt="Careers" width={500} height={500} /> 
      </div>
    </>
)
}

export default Careers
