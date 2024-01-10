import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import Breakedcrum from '../component/breakedcrums/Breakedcrum'
import ProductDisplay from '../component/productdisplay/ProductDisplay'
import DescriptionBox from '../component/descriptionbox/DescriptionBox'
import RelatedProduct from '../component/relatedproduct/RelatedProduct'

const Product = () => {
  const {all_product}=useContext(ShopContext)
  const {productId}=useParams()
  const product=all_product.find((e)=>e.id===Number(productId))
  return (
    <div>
       <Breakedcrum product={product}/>
       <ProductDisplay product={product}/>
       <DescriptionBox/>
       <RelatedProduct/>
    </div>
  )
}

export default Product