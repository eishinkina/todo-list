import React, { useState } from 'react'
import { Form, List } from  '../../components/Todo/'
import { Container } from '../../layouts'

const HomePage = () => {
  const [items, setItems] = useState([])
  const handleSubmit = (item) => {
    const nextItems = [...items, item]
    setItems(nextItems)
  }

  const handleChangeItem = (id) => {
    const nextItems = items.map((el) => el.id == id ? {...el, isChecked: !el.isChecked} : el)
    setItems(nextItems)

  }

  React.useEffect(() => console.log(items), [items])

  return (
    <Container>
      <Form onSubmit={handleSubmit} />
      <List items={items} onChangeItem={handleChangeItem}/>
    </Container>
  )
}

export default HomePage
