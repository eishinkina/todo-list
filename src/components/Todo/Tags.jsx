import React from 'react'

const Tags = ({ items, onItemsClick, classNames, ...attrs }) => {
  return (
    <div className='ui-button-group'>
      <p>
        Choice tags:{' '}
        <span onClick={() => onItemsClick('#worcking')} className='ui-tag'>
          worcking
        </span>
        <span onClick={() => onItemsClick('#learning')} className='ui-tag'>
          learning
        </span>
        <span onClick={() => onItemsClick('#holiday')} className='ui-tag'>
          holiday
        </span>
      </p>
    </div>
  )
}

export default Tags
