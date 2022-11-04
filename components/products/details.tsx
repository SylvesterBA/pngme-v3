import Image from "next/image";
import { useRouter } from 'next/router'
import React from "react";
import { UNICODE_SYMBOLS } from "../../constants";

import Button from "../button";
import styles from "/styles/components/ProductDetails.module.css"

const ProductDetails = ({ selected, setShowModal, products }: { selected: any, setShowModal: (bool: boolean) => void, products: any[] }) => {
  const router = useRouter()
  const defaultProduct: any = products[0]
  
  const flButton = e => {
    e.preventDefault()
    router.push("/fl-features")
  }

  return (
    <>
      <div className="md:hidden" onClick={() => setShowModal(false)}>
        <Image src={`/images/products/${selected?.key?.toLowerCase() || defaultProduct.key}.svg`} alt={selected?.key || defaultProduct.key} width={200} height={150} layout="responsive" />
        <div className="px-5 flex flex-col">
          <p className="font-pngme-helvetica text-2xl pb-3">{selected?.title || defaultProduct.title}</p>
          <p className="font-thin pb-8">{selected?.description || defaultProduct.description}</p>
          <div className="flex flex-col xs:flex-row xs:pb-5 xs:justify-evenly">
            <Button type='secondary' label="Lorem ipsum" additionalStyles="px-4 py-4 mb-5 xs:mb-0 xs:px-10" />
            <Button type='outlined' label="Start exploring" additionalStyles="px-4 py-4 mb-20 xs:mb-0 xs:px-10" />
          </div>
        </div>
      </div>

      <div className="hidden md:flex flex-col w-4xl mx-auto relative my-12">
        <span className={styles.gradientCircle} />
        <div className={`w-full h-full relative child-block ${styles.productImageContainer}`} >
          <Image
            src={`/images/products/${selected?.key?.toLowerCase() || defaultProduct.key}.svg`}
            alt={selected?.key || defaultProduct.key}
            width={400}
            height={400}
            className="z-20"
          />
          {selected?.key === "FL" && (
            <div className="h-24 child-z-50 relative">
              <Image
                src="/images/products/additional-features.svg"
                alt="additional-features"
                width={800}
                height={100}
                className="cursor-pointer"
                onClick={flButton}
              />
              <span
                className="text-primary-pink absolute right-32 top-5 cursor-pointer"
                onClick={flButton}
              > Explore {UNICODE_SYMBOLS.rightArrow} </span>
            </div>
          )}
        </div>
        <div className="px-5 flex flex-col z-20 mt">
          <p className="font-pngme-helvetica text-2xl pb-3">{selected?.title || defaultProduct.title}</p>
          <p className="font-thin pb-8">{selected?.description || defaultProduct.description}</p>
          <div className="flex justify-center lg:justify-start">
            <Button type='primary' label="Request information" additionalStyles="py-4 px-6 mr-2" />
            <Button type='outlined' label="Start exploring" additionalStyles="py-4 px-6 ml-2" />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetails