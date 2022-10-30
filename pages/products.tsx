import type { NextPage } from 'next'
import ProductsHeader from '../components/products/header'
import ProductsList from '../components/products/list'

const Products: NextPage = () => {
  return (
    <>
      <ProductsHeader />
      <ProductsList />
    </>
  )
}

export default Products