import React from 'react'

import { Container } from 'layouts'


const Footer = ({ ...attrs }) => {
  return (
    <footer className='Footer' {...attrs}>
      <Container>
       <h1>React.js</h1>
      </Container>
    </footer>
  )
}

export default Footer
