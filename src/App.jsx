import React from 'react'
import TodoApp from './components/todo/TodoApp'
import ShoppingCartApp from './components/shopping-cart/ShoppingCartApp'

export default () => {
  return (
    <div>
      <TodoApp />
      <p style={{ height: 20 }} />
      <ShoppingCartApp />
    </div>
  )
}
