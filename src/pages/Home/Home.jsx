import React, { useState } from 'react'
import { Form } from  '../../components/Todo'
import { Container } from '../../layouts'


const List = ({ items }) => {
  return (
    <>
      {items && items.length > 0
        ? items.map((item) => <p key={item.id}>{item.title}</p>)
        : 'items not found'}
    </>
  )
}

const HomePage = () => {
  const [items, setItems] = useState([])
  const handleSubmit = (item) => {
    const nextItems = [...items, item]
    setItems(nextItems)
  }

  React.useEffect(() => console.log(items), [items])

  return (
    <Container>
      <Form onSubmit={handleSubmit} />
      <List items={items} />
    </Container>
  )
}

export default HomePage
