import React from 'react'


interface Props {
    params: {
        slug: string[]
    };
    searchParams: {
        sortOrder: string
    }
}
const ProductsPage = ({params: {slug}, searchParams:{sortOrder}}:Props) => {
  return (
    <div>Products Page {slug} {sortOrder}</div>
  )
}

export default ProductsPage