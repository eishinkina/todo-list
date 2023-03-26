import React from 'react'

const List = ({ items, onChangeItem }) => {
  return (
    <div className='view-sm flex-col'>
      {items && items.length > 0
        ? items.map((item, index) => (
            <div key={item.id} className='ui-checkbox'>
              <input
                id={item.id}
                type='checkbox'
                checked={item.isChecked}
                onChange={() => onChangeItem(item.id)}
              />
              <label htmlFor={item.id}>{item.title}</label>
            </div>
          ))
        : 'items not found'}
    </div>
  )
}

export default List
