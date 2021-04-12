// golf club logo that will be a menu
import React from 'react'

const HoleMenu = () => {
  const handleMenuClick = () => {
    console.log('click')
  }
  return (
    <div className='hole-menu-container'>
      <div className='hole-menu' onClick={handleMenuClick}>
        <br/>
        <br/>
        <br/>
      </div>
    </div>
  )
}

export default HoleMenu