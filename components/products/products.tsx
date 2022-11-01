import React, { useState } from "react";
import Image from 'next/image'
import ProductsList from "./list";

const Products = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  
  return (
    <>
      <div
        className="font-pngme-helvetica flex flex-col items-center relative pt-16 pb-12 px-4 max-w-7xl mx-auto"
        onClick={() => setShowModal(false)}
      >
        <span className="text-primary-pink font-bold text-s pb-4 uppercase md:text-base md:font-bold">Our products</span>
        <span className="text-2xl text-center lg:text-4xl m:px-16 xl:px-32">Learn how you can make the most of your financial data</span>
      </div>

      <div
        className="flex flex-col md:flex-row md:justify-evenly items-center max-w-7xl mx-auto"
        onClick={() => setShowModal(false)}  
      >
        <div className="flex flex-col px-14 pb-16">
          <Image
            src="/icons/products-hand.svg"
            alt="hand icon"
            height={70}
            width={60}
          />
          <p className="py-4 text-center text-lg"><b>Easy to use</b></p>
          <p className="text-center font-thin md:text-sm lg:text-base">Short text describing one of your product/service advantages.</p>
        </div>

        <div className="flex flex-col px-14 pb-16">
          <Image
            src="/icons/products-data.svg"
            alt="hand icon"
            height={70}
            width={60}
          />
          <p className="py-4 text-center text-lg"><b>Transparent</b></p>
          <p className="text-center font-thin md:text-sm lg:text-base">Short text describing one of your product/service advantages.</p>
        </div>

        <div className="flex flex-col px-14 pb-20">
          <Image
            src="/icons/products-lock.svg"
            alt="hand icon"
            height={70}
            width={60}
          />
          <p className="py-4 text-center text-lg"><b>Accessible</b></p>
          <p className="text-center font-thin md:text-sm lg:text-base">Short text describing one of your product/service advantages.</p>
        </div>
      </div>

      <ProductsList showModal={showModal} setShowModal={setShowModal}/>
    </>
  )
}

export default Products