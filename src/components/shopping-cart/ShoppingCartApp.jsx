import React, { Component } from 'react'
import uuidv1 from 'uuid/v1'
import Layout from '../Layout'
import ProductList from './ProductList'
import Cart from './Cart'

export default class ShoppingCartApp extends Component {
  state = {
    products: [
      { id: uuidv1(), name: 'OnePlus 7', inventory: 10, price: 499 },
      { id: uuidv1(), name: 'iPhone X plus', inventory: 8, price: 899 },
      { id: uuidv1(), name: 'XiaoMi 9', inventory: 12, price: 599 }
    ],
    carts: []
  }
  render() {
    return (
      <Layout name="Shopping Cart">
        <ProductList
          products={this.state.products}
          updateInventory={this.updateInventory}
          addToCart={this.addToCart}
        />
        <Cart
          carts={this.state.carts}
          updateCartProductCount={this.updateCartProductCount}
          total={this.getTotalMoney()}
          productSelect={this.productSelectHandler}
        />
      </Layout>
    )
  }

  getTotalMoney() {
    return this.state.carts.reduce((pre, cur) => {
      return pre + (cur.checked ? cur.price * cur.count : 0)
    }, 0)
  }

  productSelectHandler = (id, checked) => {
    this.setState({
      carts: this.state.carts.map(p => (p.id === id ? { ...p, checked } : p))
    })
  }

  updateInventory = (id, n) => {
    this.setState({
      products: this.state.products.map(p =>
        p.id === id ? { ...p, inventory: p.inventory + n } : p
      )
    })
  }

  updateCartProductCount = (id, n) => {
    const inventory = this.state.products.find(p => p.id === id).inventory
    if (inventory > 0 || (inventory === 0 && n < 0)) {
      const count = this.state.carts.find(p => p.id === id).count
      if (count === 1 && n < 0) {
        window.alert('亲，至少添加一件。。。')
      } else {
        this.updateInventory(id, -n)
        this.setState({
          carts: this.state.carts.map(p =>
            p.id === id ? { ...p, count: p.count + n } : p
          )
        })
      }
    } else {
      window.alert('亲，不能再买了。。。')
    }
  }

  addToCart = (id, count) => {
    const inventory = this.state.products.find(p => p.id === id).inventory
    if (inventory - count < 0) {
      window.alert(`亲，库存不足。。。当前剩余 ${inventory} 件`)
    } else {
      this.updateInventory(id, -count)
      const cart_p = this.state.carts.find(p => p.id === id)
      if (cart_p) {
        this.setState({
          carts: this.state.carts.map(p =>
            p.id === id ? { ...p, count: p.count + count } : p
          )
        })
      } else {
        const product = this.state.products.find(p => p.id === id)
        this.setState({
          carts: [
            ...this.state.carts,
            {
              id: product.id,
              name: product.name,
              price: product.price,
              count,
              checked: false
            }
          ]
        })
      }
    }
  }
}
