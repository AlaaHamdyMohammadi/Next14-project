import React from 'react'

const ReviewDetails = ({params} : {params: {reviewID: string, productID: string}}) => {
  return (
    <div>ReviewDetails for product ID : {params.productID} for review ID : {params.reviewID}</div>
  )
}

export default ReviewDetails