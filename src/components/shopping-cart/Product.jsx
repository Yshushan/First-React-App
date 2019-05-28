import React, { Component } from 'react'

class Product extends Component {
  state = {
    count: 1
  }
  render() {
    const { id, name, inventory, price } = this.props.product
    return (
      <li style={itemStyle}>
        <div style={{ marginBottom: 10 }}>
          <span>{name}</span>
          <div style={{ float: 'right' }}>
            <span style={{ marginRight: 12 }}>inventory: {inventory}</span>
            <button style={{ cursor: 'pointer' }} onClick={this.minusOne}>
              -
            </button>
            <span style={{ padding: '0px 4px' }}>{this.state.count}</span>
            <button style={{ cursor: 'pointer' }} onClick={this.plusOne}>
              +
            </button>
          </div>
        </div>
        <div>
          <span>$</span>
          <span style={{ fontSize: 25, color: 'red' }}>{price}</span>
          <button
            style={{ float: 'right' }}
            onClick={() => this.props.addToCart(id, this.state.count)}
          >
            Add to cart
          </button>
        </div>
      </li>
    )
  }

  plusOne = () => {
    if (this.state.count < this.props.product.inventory) {
      this.setState({ count: this.state.count + 1 })
      // this.props.updateInventory(this.props.product.id, -1)
    } else {
      window.alert('亲，不能再买了。。。')
    }
  }
  minusOne = () => {
    if (this.state.count > 1) {
      this.setState({ count: this.state.count - 1 })
      // this.props.updateInventory(this.props.product.id, 1)
    } else {
      window.alert('亲，不能再少了。。。')
    }
  }
}

export default Product

const itemStyle = {
  padding: 10,
  borderBottom: '1px solid #ccc'
}
