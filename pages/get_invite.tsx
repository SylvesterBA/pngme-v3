import Image from 'next/image';
import type { NextPage } from 'next'

import styles from '../styles/pages/GetInvite.module.css'
import { InviteForm } from '../components/get-invite/InviteForm';

const GetInvite: NextPage = () => (
  <div className={`flex flex-col relative ${styles.image_wrapper} lg:flex-row`}>
    <Image
      src="/images/bg-pattern-full.svg"
      alt="bg-image"
      width="100"
      height="500"
      className="absolute b-0 z-0"
      objectFit="cover"
    />
    
    <div className="flex flex-col md:flex-row lg:mx-12 md:justify-evenly md:w-full">
      <div className="flex flex-col pt-20 pb-6 px-4 z-10 md:w-96 lg:w-lg 2xl:w-3xl">
        <span className="font-pngme-helvetica text-4xl pb-8">Get Invite</span>
        <span className="pngme-inter font-thin text-xl pb-4">We give lenders and fintechs easy access to capital</span>
        <span className="pngme-inter font-thin text-base leading-6">Pngme partners with vetted financial institutions to offer debt facilities to lenders and fintechs in Kenya, Nigeria, and South Africa</span>
      </div>

      <div className="mb-24 z-10 md:px-4 md:w-lg lg:px-0 lg:w-xl lg:min-w-lg">
        <InviteForm />
      </div>
    </div>
  </div>
)

export default GetInvite
