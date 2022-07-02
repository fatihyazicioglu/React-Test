import React from 'react'

function ListItem({item}) {
  return (
    <div>
        <ul>{item.map(p=><li>{p}</li>)}</ul>

    </div>
  )
}

export default ListItem