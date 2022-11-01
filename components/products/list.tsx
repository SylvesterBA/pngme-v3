import Image from "next/image"
import React, { useEffect, useState } from "react"

import ProductDetails from "./details"
import styles from "/styles/components/ProductList.module.css"

const ProductsList = (props) => {
  const data = [
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

  const [selected, setSelected] = useState<any>(data[0])
  const [firstRender, setFirstRender] = useState<boolean>(true)

  const _showSelected = () => firstRender ? (
    <span className="text-primary-purple pl-8 flex items-center cursor-default">Select from the list </span>
  ) : (
    <div className="uppercase flex items-center pl-4 cursor-default">
      <Image src={`/icons/products/${selected.key.toLowerCase()}.svg`} alt={selected.title} width={60} height={60} />
      <span className="px-4 text-primary-purple pt-1"><b>{selected.title}</b></span>
    </div>
  )

  return (
    <>
      <div className="px-5 pb-4 md:hidden relative w-full">
        <label htmlFor="products" className="uppercase text-xs"><b>Products</b></label>
        <div
          className={styles.select_div}
          onClick={() => props.setShowModal(!props.showModal)}
        >
          <div className="flex justify-between h-16">
            {_showSelected()}
            <Image src="/icons/arrow.svg" alt="arrow-down" width={20} height={20} className="self-end"/>
          </div>
        </div>

        {props.showModal && (
          <ul className="flex flex-col bg-white absolute boxshadow z-20 top-28 rounded-lg py-5 left-5 right-5 px-8 cursor-default">
            {data.map(el => (
              <li
                key={el.key}
                className={`uppercase justify-start rounded-full px-6 py-2 my-1 flex items-center ${selected?.key === el.key && !firstRender ? "border bg-primary-yellow" : "border border-transparent"}`}
                onClick={() => {
                  setSelected(el)
                  setFirstRender(false)
                  props.setShowModal(false)
                }}
              >
                <Image src={`/icons/products/${el.key.toLowerCase()}.svg`} alt={el.title} width={40} height={40} />
                <span className="px-4"><b>{el.title}</b></span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="hidden md:block lg:hidden pb-4">
        <ul className="grid grid-cols-2 px-24">
          {data.map((el, i) => (
            <li
              key={el.key}
              className={`uppercase rounded-full px-6 py-2 my-1 flex items-center ${i + 1 % 2 === 0 ? "justify-end" : ""}${selected?.key === el.key ? "border bg-primary-yellow" : "border border-transparent"}`}
              onClick={() => setSelected(el)}
            >
              <Image src={`/icons/products/${el.key.toLowerCase()}.svg`} alt={el.title} width={40} height={40} />
              <span className="px-4"><b>{el.title}</b></span>
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:flex lg:px-12 max-w-7xl mx-auto">
        <div className="hidden lg:flex">
          <ul className="flex flex-col lg:pt-12">
            {data.map((el, i) => (
              <li
                key={el.key}
                className={`uppercase rounded-full px-6 py-2 my-1 flex items-center ${selected?.key === el.key ? "border bg-primary-yellow" : "border border-transparent"}`}
                onClick={() => setSelected(el)}
              >
                <Image src={`/icons/products/${el.key.toLowerCase()}.svg`} alt={el.title} width={40} height={40} />
                <span className="px-4"><b>{el.title}</b></span>
              </li>
            ))}
          </ul>
        </div>

        <ProductDetails selected={selected} setShowModal={props.setShowModal} products={data} />
      </div>
    </>
  )
}

export default ProductsList