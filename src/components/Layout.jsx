import React from 'react'

const Layout = props => {
  return (
    <div>
      <header style={headerStyle}>{props.name}</header>
      {props.children}
    </div>
  )
}

export default Layout

const headerStyle = {
  fontSize: '2rem',
  color: 'white',
  backgroundColor: '#666',
  textAlign: 'center',
  padding: 20
}
