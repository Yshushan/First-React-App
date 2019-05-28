import React, { Component } from 'react'
import uuidv1 from 'uuid/v1'
import Layout from '../Layout'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

export default class TodoApp extends Component {
  state = {
    todo: [
      { id: uuidv1(), title: 'Optimize Python Code', completed: true },
      { id: uuidv1(), title: 'Getting up', completed: true },
      { id: uuidv1(), title: 'Taking shower', completed: true },
      { id: uuidv1(), title: 'Out for lunch', completed: true },
      { id: uuidv1(), title: 'Shopping', completed: true },
      { id: uuidv1(), title: 'Napping', completed: true }
    ]
  }

  render() {
    return (
      <Layout name="Todo List">
        <AddTodo onAddTodo={this.addTodoHandler} />
        <TodoList
          todo={this.state.todo}
          onCheckedChange={this.checkedChangeHandler}
          onDelete={this.deleteHandler}
        />
      </Layout>
    )
  }

  checkedChangeHandler = id => {
    this.setState({
      todo: this.state.todo.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    })
  }

  deleteHandler = id => {
    this.setState({
      todo: this.state.todo.filter(item => item.id !== id)
    })
  }

  addTodoHandler = title => {
    const newItem = {
      id: uuidv1(),
      title,
      completed: false
    }
    this.setState({
      todo: [...this.state.todo, newItem],
      title: ''
    })
  }
}

// scoped style
