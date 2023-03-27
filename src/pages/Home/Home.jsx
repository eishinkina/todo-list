import React, { useState } from 'react'
import { Form, List } from '../../components/Todo/'
import { Container } from '../../layouts'

const HomePage = () => {
  const localItem = JSON.parse(localStorage.getItem('items'))
  const [items, setItems] = useState(localItem || [])
  const handleSubmit = (item) => {
    const nextItems = [...items, item]
    setItems(nextItems)
  }

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
      <Form onSubmit={handleSubmit} />
      <List
        items={items}
        onChangeItem={handleChangeItem}
        onRemoveItem={handleRemoveItem}
      />
    </Container>
  )
}

export default HomePage
