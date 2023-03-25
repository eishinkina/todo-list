import React, { useState } from 'react'

import { Container } from '../../layouts'

const Form = () => {
  const [title, setTitle] = useState('')

  const handleSubmit = () => {
    event.preventDefault()

    if (!title && title.length == 0) {
      return
    }

    console.log('submitted: ' + title)

    ///reset
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type='submit'>Submit</button>
    </form>
  )
}

const HomePage = () => {
  return (
    <Container>
      <Form />
    </Container>
  )
}

export default HomePage
