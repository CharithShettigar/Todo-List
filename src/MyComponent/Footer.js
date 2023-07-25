import React from 'react'

let footerstyle={
  position:"fixed",
  bottom:"0",
  width:"100%"
}

const Footer = () => {
  return (
    <footer className='bg-dark text-light py-2' style={footerstyle}>
      <p className='mb-0'>Copyrigth &copy; MyTodoList.com</p>
    </footer>
  )
}

export default Footer