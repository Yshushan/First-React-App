import React from 'react'
import Product from './Product'

const ProductList = props => {
  return (
    <div>
      <h3 style={{ padding: '0px 10px' }}>Product lists</h3>
      <ul>
        {props.products.map(product => (
          <Product
            key={product.id}
            product={product}
            updateInventory={props.updateInventory}
            addToCart={props.addToCart}
          />
        ))}
      </ul>
    </div>
  )
}

export default ProductList
