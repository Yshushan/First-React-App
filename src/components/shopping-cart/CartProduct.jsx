import React from 'react'

const CartProduct = props => {
  const { id, name, price, count, checked } = props.product

  return (
    <li style={{ padding: 10, backgroundColor: '#ccc' }}>
      <input
        type="checkbox"
        style={{ marginRight: 10 }}
        checked={checked}
        onChange={e => props.productSelect(id, e.target.checked)}
      />
      <span style={{ marginRight: 30 }}>{name}</span>
      <span>${price}</span>
      <div style={{ float: 'right' }}>
        <button
          style={{ cursor: 'pointer' }}
          onClick={() => props.updateCartProductCount(id, -1)}
        >
          -
        </button>
        <span style={{ padding: '0px 4px' }}>{count}</span>
        <button
          style={{ cursor: 'pointer' }}
          onClick={() => props.updateCartProductCount(id, 1)}
        >
          +
        </button>
      </div>
    </li>
  )
}

export default CartProduct
