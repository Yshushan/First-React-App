import React from 'react'
import CartProduct from './CartProduct'
const Cart = props => {
  return (
    <div>
      <h3>
        Shopping cart{' '}
        <span style={{ float: 'right', marginRight: 30 }}>
          total: ${props.total}
        </span>
      </h3>

      <ul>
        {props.carts.map(p => (
          <CartProduct
            key={p.id}
            product={p}
            updateCartProductCount={props.updateCartProductCount}
            productSelect={props.productSelect}
          />
        ))}
      </ul>
    </div>
  )
}

export default Cart
