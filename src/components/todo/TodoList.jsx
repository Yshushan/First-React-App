import React from 'react'
import TodoItem from './TodoItem'

const TodoList = props => {
  return (
    <div>
      {props.todo.map(item => (
        <TodoItem
          key={item.id}
          item={item}
          onCheckedChange={props.onCheckedChange}
          onDelete={props.onDelete}
        />
      ))}
    </div>
  )
}

export default TodoList
