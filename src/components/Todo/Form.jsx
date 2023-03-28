import React from 'react'
import { useState } from 'react'
import { v4 as fakeId } from 'uuid'
import Tags from './Tags'

const Form = ({ onSubmit }) => {
  const [title, setTitle] = useState('')

  const [activeTag, setActiveTag] = useState([])

  const onItemsClick = (text) => {
    console.log(text)
    setActiveTag(
      activeTag.indexOf(text) === -1
        ? [...activeTag, text]
        : [...activeTag.filter((value) => value !== text)]
    )
  }

  const handleSubmit = () => {
    event.preventDefault()

    if (!title && title.length == 0) {
      return
    }

    // console.log('submitted: ' + title)

    const item = {
      id: fakeId(),
      title: title,
      isChecked: false,
      tags: activeTag.join(' '),
    }

    onSubmit(item)
    setTitle('')
    setActiveTag([])
  }

  return (
    <form className='mb-8' onSubmit={handleSubmit}>
      <div className='flex items-end'>
        <div className='ui-input' style={{ width: '100%' }}>
          <label htmlFor='input-DqS1'>Enter Todo</label>
          <input
            id='input-DqS1'
            required
            type='text'
            value={title}
            placeholder='Enter Todo here'
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button className='ui-button isPrimary' type='submit'>
          Submit
        </button>
      </div>
      <Tags className='isActive' onItemsClick={onItemsClick} />
    </form>
  )
}

export default Form
