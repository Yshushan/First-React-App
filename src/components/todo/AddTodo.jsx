import React, { Component } from 'react'

export default class AddTodo extends Component {
  state = {
    title: ''
  }
  render() {
    return (
      <div style={{ display: 'flex' }}>
        <input
          type="text"
          placeholder="Add todo..."
          style={{ flex: '10', padding: 10 }}
          onChange={this.onChangeHandler}
          value={this.state.title}
        />
        <button style={{ flex: '1' }} onClick={this.onClickHandler}>
          Add
        </button>
      </div>
    )
  }
  onClickHandler = () => {
    if (this.state.title) {
      this.props.onAddTodo(this.state.title)
      this.setState({ title: '' })
    }
  }

  onChangeHandler = e => {
    this.setState({ title: e.target.value })
  }
}
