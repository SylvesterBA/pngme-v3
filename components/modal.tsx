import React from 'react';
import Image from 'next/image'
import { useModal } from '../hooks/useModal/useModal';
import styles from '/styles/components/Modal.module.css';

export const Modal = () => {
  const { visible, setVisible, title, description } = useModal();

  return (
    <>
      <div className={`${visible ? styles.modal : "hidden"}`} onClick={() => setVisible(false)} />
      <div
        className={`${visible ? "flex" : "hidden"} absolute top-1/5 left-0 right-0 mx-auto z-40 bg-white w-11/12 sm:w-2xl rounded-lg`}
        onClick={() => console.log(1)}
      >
        <div className='hidden sm:flex absolute z-40 -right-3 -top-6'>
          <Image
            src="/images/pink-triangle.svg"
            alt="pink-triangle-icon"
            className={`${styles.flipHorizontally}`}
            width={205}
            height={210}
          />
        </div>
        <div className="hidden sm:flex absolute z-40 -left-5 -bottom-8">
          <Image
            src="/images/half-circle.svg"
            alt="half-circle-icon"
            width={110}
            height={230}
          />
        </div>

        <div 
          className="absolute flex z-60 top-2 right-2 px-2 py-2 sm:px-3 sm:py-3" 
          onClick={() => setVisible(false)}
        >
          <Image
            src="/icons/x.svg"
            alt="close-icon"
            width={20}
            height={20}
          />
        </div>

        <div 
          className={`
            flex
            flex-col
            pt-10
            pb-10
            px-14
            sm:px-20 
            sm:py-14 
            text-center
            relative
            z-50
            bg-white
            rounded-lg
          `}
        >
          <>      
            <p className="text-3xl font-pngme-helvetica pb-4">{title}</p>
            {description}
          </>
        </div> 
      </div>
    </>
  )
}