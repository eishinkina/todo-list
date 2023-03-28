import React from 'react'

const List = ({ items, onChangeItem, onRemoveItem}) => {
  return (
    <div className='view-sm flex-col'>
      {items && items.length > 0
        ? items.map((item) => (
            <div
              key={item.id}
              className='flex justify-between items-center mb-2'
            >
              <div className='ui-checkbox'>
                <input
                  id={item.id}
                  type='checkbox'
                  checked={item.isChecked}
                  onChange={() => onChangeItem(item.id)}
                />
                <label htmlFor={item.id}>{item.title}
                <p className='mr-auto'>{item.tags}</p></label>
              </div>

              <span className='ui-link' onClick={() => onRemoveItem(item.id)}>
                Remove
              </span>
            </div>
          ))
        : 'items not found'}
    </div>
  )
}

export default List
