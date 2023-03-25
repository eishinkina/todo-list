import React from 'react'

import { Container } from 'layouts'

const Footer = ({ ...attrs }) => {
  return (
    <footer className='Footer' {...attrs}>
      <Container>
        <div className=' py-2 mt-6'>
          <p className='text-center text-xs' style={{ opacity: 0.6 }}>
            Сделано на курсе
            <a
              target='_blank'
              href='https://tocode.ru/courses/react-s-nulya-do-rezultata/'
              className='ui-link ml-1'
            >
              React.js - с нуля до результата
            </a>
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
