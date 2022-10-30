import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "../button";

const productsData = [
  {
    key: 'ECR',
    title: 'Enhanced Credit Report',
    description: `Call a single API endpoint to get a consolidated credit report using Pngme's enhanced data. The alternative credit report can be used alongside Pngme's credit bureau API to view unreported lending data and increase coverage of thin-file customers.`
  }
]

const ProductDetails = ({ selected }: { selected: string }) => {
  const [product, setProduct] = useState(productsData[0])

  useEffect(() => {
    const _product = productsData.find(el => el.key === selected)

    if (_product) {
      setProduct(_product)
    }
  }, [selected])

  return (
    <div className="md:hidden">
      <Image src="/images/products/mobile-ecr.svg" alt="ECR" width={200} height={200} layout="responsive" />
      <div className="px-5 flex flex-col">
        <p className="font-pngme-helvetica text-2xl pb-3">{product.title}</p>
        <p className="font-thin pb-8">{product.description}</p>
        <div className="flex flex-col xs:flex-row xs:pb-5 xs:justify-evenly">
          <Button type='secondary' label="Lorem ipsum" additionalStyles="px-4 py-4 mb-5 xs:mb-0 xs:px-10" />
          <Button type='outlined' label="Start exploring" additionalStyles="px-4 py-4 mb-20 xs:mb-0 xs:px-10" />
        </div>
      </div>
    </div>
  )
}

export default ProductDetails