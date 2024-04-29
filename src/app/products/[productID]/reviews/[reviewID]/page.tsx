import { notFound } from 'next/navigation'
import React from 'react'

const ReviewDetails = ({params} : {params: {reviewID: string, productID: string}}) => {
  if(parseInt(params.reviewID) > 100) {
    notFound(); // catch nearest not-found file
  }
  
    return (
    <div>ReviewDetails for product ID : {params.productID} for review ID : {params.reviewID}</div>
  )
}

export default ReviewDetails