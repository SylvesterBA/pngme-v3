import React, { useEffect } from "react"
import ProductDetails from "./details"

const ProductsList = () => {
  const [selected, setSelected] = React.useState<string>("ECR")

  return (
    <>
      <div className="px-3 pb-4">
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

      <ProductDetails selected={selected} />

    </>
  )
}

export default ProductsList