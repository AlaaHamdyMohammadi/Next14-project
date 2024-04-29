import React from 'react'

const ProductDetails = ({params}: {params: {productID: string}}) => {
  return (
    <div>ProductDetails for id : {params.productID}</div>
  )
}

export default ProductDetails