import Image from "next/image";
import React, { useEffect, useState } from "react";

import Button from "../button";
import styles from "/styles/components/ProductDetails.module.css"

const productsData = [
  {
    key: 'ECR',
    title: 'Enhanced Credit Report',
    description: `Call a single API endpoint to get a consolidated credit report using Pngme's enhanced data. The alternative credit report can be used alongside Pngme's credit bureau API to view unreported lending data and increase coverage of thin-file customers.`
  },
  {
    key: 'CBA',
    title: 'Credit Bureau API',
    description: `Use a single Pngme API call to access consumer credit reports and credit scores in Nigeria and Kenya.`
  },
  {
    key: 'B&T',
    title: 'Balance & Transactions',
    description: `View customer balance and transactional data across connected accounts. Make lending decisions quickly with a comprehensive view of your customer's financial health.`
  },
  {
    key: 'FL',
    title: 'Feature Library',
    description: `Easy to use code snippets that empower developers to extract insights quickly. Access over 20 features including DTI, opened loans, betting and gambling.`
  },
  {
    key: 'DD',
    title: 'Data Dashboard',
    description: `A holistic view of your customer's  financial data in a single dashboard. Developers can quickly and easily access sandbox data and start building with API and SDK keys.`
  },
  {
    key: 'FDM',
    title: 'Financial Data Modelling',
    description: "Process and analyze customer data with Pngme's machine learning models. Simply provide raw data and Pngme's data team will provide actionable insights without the need for SDK integration."
  },
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
    <>
      <div className="md:hidden">
        <Image src={`/images/products/mobile-${selected.toLowerCase()}.svg`} alt="ECR" width={200} height={200} layout="responsive" />
        <div className="px-5 flex flex-col">
          <p className="font-pngme-helvetica text-2xl pb-3">{product.title}</p>
          <p className="font-thin pb-8">{product.description}</p>
          <div className="flex flex-col xs:flex-row xs:pb-5 xs:justify-evenly">
            <Button type='secondary' label="Lorem ipsum" additionalStyles="px-4 py-4 mb-5 xs:mb-0 xs:px-10" />
            <Button type='outlined' label="Start exploring" additionalStyles="px-4 py-4 mb-20 xs:mb-0 xs:px-10" />
          </div>
        </div>
      </div>

      <div className="hidden md:flex flex-col w-4xl mx-auto relative my-12">
        <span className={styles.gradientCircle} />
        <Image src={`/images/products/${selected.toLowerCase()}.svg`} alt="ECR" width={400} height={400} className="z-20"/>
        <div className="px-5 flex flex-col z-20 mt-10">
          <p className="font-pngme-helvetica text-2xl pb-3">{product.title}</p>
          <p className="font-thin pb-8">{product.description}</p>
          <div className="flex justify-center">
            <Button type='primary' label="Request information" additionalStyles="py-4 px-6 mr-2" />
            <Button type='outlined' label="Start exploring" additionalStyles="py-4 px-6 ml-2" />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetails