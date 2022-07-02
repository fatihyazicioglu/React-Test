import React from 'react'

function List({item}) {
  return (
    <div>
        <ul>
            {item.map(p=><li>{p}</li>)}
        </ul>
    </div>
  )
}

export default List