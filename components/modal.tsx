import React from 'react';
import Image from 'next/image'
import { useModal } from '../hooks/useModal/useModal';
import styles from '/styles/components/Modal.module.css';

export const Modal = () => {
  const { visible, setVisible, title, description } = useModal();

  return (
    <>
      <div className={`${!visible && "hidden"} ${styles.modal}`} />
      <div className={`${visible ? "flex" : "hidden"} absolute top-40 left-0 right-0 mx-auto z-40 bg-white w-40 md:w-2xl rounded-lg`}>
        <div className='hidden md:flex absolute z-40 -right-3 -top-6'>
          <Image
            src="/images/pink-triangle.svg"
            alt="pink-triangle-icon"
            className={`${styles.flipHorizontally}`}
            width={205}
            height={210}
          />
        </div>
        <div className="hidden md:flex absolute z-40 -left-5 -bottom-8">
          <Image
            src="/images/half-circle.svg"
            alt="half-circle-icon"
            width={110}
            height={230}
          />
        </div>

        <div className="absolute flex z-60 top-2 right-2 px-3 py-3">
          <Image
            src="/icons/x.svg"
            alt="close-icon"
            width={20}
            height={20}
          />
        </div>

        <div className={`
          flex
          flex-col 
          px-20 
          py-14 
          text-center
          relative
          z-50
          bg-white
        `}>
          <>      
            <p className="text-3xl font-pngme-helvetica pb-4">{title}</p>
            {description}
          </>
        </div> 
      </div>
    </>
  )
}