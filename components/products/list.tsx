import Image from "next/image"
import React, { useEffect } from "react"
import ProductDetails from "./details"

const ProductsList = () => {
  const [selected, setSelected] = React.useState<string>("ECR")

  return (
    <>
      <div className="px-3 pb-4 md:hidden">
        <label htmlFor="products" className="uppercase text-xs"><b>Products</b></label>
        <select id="products" className="border border-gray-300 bg-secondary-beige mt-2 py-4 pl-4 text-sm rounded-lg block w-full text-gray-500" onChange={({ target: { value }}) => setSelected(value === 'Select' ? "ECR" : value)}>
          <option value="Select" selected>Select from the list</option>
          <option value="ECR">Enhanced Credit Report</option>
          <option value="CBA">Credit Bureau API</option>
          <option value="B&T">Balance & Transactions</option>
          <option value="FL">Feature Library</option>
          <option value="DD">Data Dashboard</option>
          <option value="FDM">Financial Data Modelling</option>
        </select>
      </div>

      <div className="hidden md:block lg:hidden pb-4">
        <ul className="grid grid-cols-2 px-24">
          <li
            className={`uppercase rounded-full px-6 py-2 my-1 flex items-center ${selected === 'ECR' ? "border bg-primary-yellow" : "border border-transparent"}`}
            onClick={() => setSelected("ECR")}
          >
            <Image src="/icons/products/ecr.svg" alt="Enhanced Credit Report" width={40} height={40} />
            <span className="px-4"><b>Enhanced Credit Report</b></span>
          </li>
          <li
            className={`uppercase rounded-full px-6 py-2 my-1 flex items-center justify-end ${selected === 'CBA' ? "border bg-primary-yellow" : "border border-transparent"}`}
            onClick={() => setSelected("CBA")}          
          >
            <Image src="/icons/products/cba.svg" alt="Credit Bureau API" width={40} height={40} />
            <span className="px-4"><b>Credit Bureau API</b></span>
          </li>
          <li
            className={`uppercase rounded-full px-6 py-2 my-1 flex items-center ${selected === 'B&T' ? "border bg-primary-yellow" : "border border-transparent"}`}
            onClick={() => setSelected("B&T")}          
          >
            <Image src="/icons/products/b&t.svg" alt="Balance & Transactions" width={40} height={40} />
            <span className="px-4"><b>Balance & Transactions</b></span>
          </li>
          <li
            className={`uppercase rounded-full px-6 py-2 my-1 flex items-center justify-end ${selected === 'FL' ? "border bg-primary-yellow" : "border border-transparent"}`}
            onClick={() => setSelected("FL")}          
          >
            <Image src="/icons/products/fl.svg" alt="Feature Library" width={40} height={40} />
            <span className="px-4"><b>Feature Library</b></span>
          </li>
          <li
            className={`uppercase rounded-full px-6 py-2 my-1 flex items-center ${selected === 'DD' ? "border bg-primary-yellow" : "border border-transparent"}`}
            onClick={() => setSelected("DD")}          
          >
            <Image src="/icons/products/dd.svg" alt="Data dashboard" width={40} height={40} />
            <span className="px-4"><b>Data dashboard</b></span>
          </li>
          <li
            className={`uppercase rounded-full px-6 py-2 my-1 flex items-center justify-end ${selected === 'FDM' ? "border bg-primary-yellow" : "border border-transparent"}`}
            onClick={() => setSelected("FDM")}          
          >
            <Image src="/icons/products/fdm.svg" alt="Financial Data Modelling" width={40} height={40} />
            <span className="px-4"><b>Financial Data Modelling</b></span>
          </li>
        </ul>
      </div>

      <div className="lg:flex lg:px-12 max-w-7xl mx-auto">
        <div className="hidden lg:flex">
          <ul className="flex flex-col lg:pt-12">
            <li
              className={`uppercase rounded-full px-6 py-2 my-1 flex items-center ${selected === 'ECR' ? "border bg-primary-yellow" : "border border-transparent"}`}
              onClick={() => setSelected("ECR")}
            >
              <Image src="/icons/products/ecr.svg" alt="Enhanced Credit Report" width={40} height={40} />
              <span className="px-4"><b>Enhanced Credit Report</b></span>
            </li>
            <li
              className={`uppercase rounded-full px-6 py-2 my-1 flex items-center ${selected === 'CBA' ? "border bg-primary-yellow" : "border border-transparent"}`}
              onClick={() => setSelected("CBA")}
            >
              <Image src="/icons/products/cba.svg" alt="Credit Bureau API" width={40} height={40} />
              <span className="px-4"><b>Credit Bureau API</b></span>
            </li>
            <li
              className={`uppercase rounded-full px-6 py-2 my-1 flex items-center ${selected === 'B&T' ? "border bg-primary-yellow" : "border border-transparent"}`}
              onClick={() => setSelected("B&T")}
            >
              <Image src="/icons/products/b&t.svg" alt="Balance & Transactions" width={40} height={40} />
              <span className="px-4"><b>Balance & Transactions</b></span>
            </li>
            <li
              className={`uppercase rounded-full px-6 py-2 my-1 flex items-center ${selected === 'FL' ? "border bg-primary-yellow" : "border border-transparent"}`}
              onClick={() => setSelected("FL")}
            >
              <Image src="/icons/products/fl.svg" alt="Feature Library" width={40} height={40} />
              <span className="px-4"><b>Feature Library</b></span>
            </li>
            <li
              className={`uppercase rounded-full px-6 py-2 my-1 flex items-center ${selected === 'DD' ? "border bg-primary-yellow" : "border border-transparent"}`}
              onClick={() => setSelected("DD")}
            >
              <Image src="/icons/products/dd.svg" alt="Data dashboard" width={40} height={40} />
              <span className="px-4"><b>Data dashboard</b></span>
            </li>
            <li
              className={`uppercase rounded-full px-6 py-2 my-1 flex items-center ${selected === 'FDM' ? "border bg-primary-yellow" : "border border-transparent"}`}
              onClick={() => setSelected("FDM")}
            >
              <Image src="/icons/products/fdm.svg" alt="Financial Data Modelling" width={40} height={40} />
              <span className="px-4"><b>Financial Data Modelling</b></span>
            </li>
          </ul>
        </div>

        <ProductDetails selected={selected} />
      </div>
    </>
  )
}

export default ProductsList