import React from 'react'
import Friends from './Friends/Friends'

const Sidebar = ({ friends }) => {
  return (
    <div>
      <Friends friends={friends}/>
    </div>
  )
}

export default Sidebar