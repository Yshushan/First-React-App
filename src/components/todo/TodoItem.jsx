import React from 'react'

function TodoItem(props) {
  const { item } = props
  const titleStyle = {
    display: 'inline-block',
    padding: '5px 10px',
    textDecoration: item.completed ? 'line-through' : 'none'
  }
  return (
    <div style={itemStyle}>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => props.onCheckedChange(item.id)}
      />
      <span style={titleStyle}>{item.title}</span>
      <button style={btnStyle} onClick={() => props.onDelete(item.id)}>
        Delete
      </button>
    </div>
  )
}

export default TodoItem

const itemStyle = {
  padding: 8,
  backgroundColor: '#666666',
  color: '#ffffff',
  borderBottom: '1px solid #aaa'
}

const btnStyle = {
  float: 'right',
  backgroundColor: '#4caf50',
  color: 'white',
  fontSize: '1rem',
  borderRadius: 5,
  padding: '5px 10px'
}
