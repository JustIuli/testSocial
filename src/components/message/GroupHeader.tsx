import { Avatar } from '@nextui-org/react'
import React from 'react'

const GroupHeader = () => {
  return (
    <div className='flex justify-between px-12 mt-2'>
    <div className='flex items-center space-x-2'>
        <Avatar size='sm' src='https://placehold.co/30'/>
      <p>Group Name</p>
    </div>
      <div className='flex space-x-[-10px]'>
        <Avatar size='sm' src='https://i.pravatar.cc/150?img=67'/>
        <Avatar size='sm' src='https://i.pravatar.cc/150?img=63'/>
        <Avatar size='sm' src='https://i.pravatar.cc/150?img=57'/>
        <Avatar size='sm' src='https://i.pravatar.cc/150?img=54'/>
        <Avatar size='sm' src='https://i.pravatar.cc/150?img=40'/>
      </div>
  </div>
    )
}

export default GroupHeader