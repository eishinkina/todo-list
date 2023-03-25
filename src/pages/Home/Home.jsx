import React, { useState } from 'react'

import { Container } from '../../layouts'

import { v4 as fakeId } from 'uuid'

const Form = ({onSubmit}) => {
  const [title, setTitle] = useState('')

  const handleSubmit = () => {
    event.preventDefault()

    if (!title && title.length == 0) {
      return
    }

    // console.log('submitted: ' + title)

    const item = {
      id: fakeId(),
      title: title,

    }

    onSubmit(item)
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

  const array = [];

  const handleSubmit = (item) =>{
    // console.log('submitted: ' + item);
    array.push(item);
    console.log(array);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} />
    </Container>
  )
}

export default HomePage
