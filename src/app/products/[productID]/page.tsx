import React from 'react'

interface ProductDetailsProps{
  params: {productID: string}
}

export const generateMetadata = ({params}: ProductDetailsProps) => {
  return {
    title: `Product ${params.productID}`
  }
}

const ProductDetails = ({params}: ProductDetailsProps) => {
  return (
    <div>ProductDetails for id : {params.productID}</div>
  )
}

export default ProductDetails