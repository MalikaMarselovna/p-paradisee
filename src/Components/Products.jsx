import React from 'react'
import { ApiTopPropducts, ApiTopProducts} from '../apiFolder/TopProductsApi'
import Product from './Product'
import ProductList from './ProductList/ProductList'

function Products() {
  return (
    <div className='flex flex-wrap p-5 items-center justify-center'>
        {
            ApiTopProducts.map((product, index)=>(
                <ProductList item={product} key={index}/>
            ))

        }
    </div>
  )
}

export default Products