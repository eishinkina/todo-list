import React, { useState } from 'react'
import { Form, List, Tags } from '../../components/Todo/'
import { Container } from '../../layouts'
import todos from '../../seeders/todos.json'

const HomePage = () => {
  // data from localstorage
  const localItems = JSON.parse(localStorage.getItem('items')) || null
  //final output
  const items_ = localItems && localItems.length > 0 ? localItems : todos

  //state
  const [items, setItems] = useState(items_ || [])

  //store
  const handleSubmit = (item) => {
    const nextItems = [...items, item]
    setItems(nextItems)
  }

  //update
  const handleChangeItem = (id) => {
    const nextItems = items.map((el) =>
      el.id == id ? { ...el, isChecked: !el.isChecked } : el
    )
    setItems(nextItems)
  }

  const handleRemoveItem = (id) => {
    // console.log(`removed : ${id}` )
    const nextItems = [...items]
    const indexForRemove = nextItems.findIndex((el) => el.id === id)
    // console.log(indexForRemove)
    nextItems.splice(indexForRemove, 1)
    setItems(nextItems)
  }

  React.useEffect(() => {
    // console.log(items),
    localStorage.setItem('items', JSON.stringify(items))
  }, [items])

  return (
    <Container>
      <div className='view-wrapper'>
        <div className='view-content'>
          <Form onSubmit={handleSubmit} />
          <List
            items={items}
            onChangeItem={handleChangeItem}
            onRemoveItem={handleRemoveItem}
          />
        </div>
      </div>
    </Container>
  )
}

export default HomePage
