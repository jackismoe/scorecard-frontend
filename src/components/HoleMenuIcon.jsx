// golf club logo that will be a menu
import React from 'react'

const HoleMenu = () => {
  const handleMenuClick = () => {
    console.log('hole click')
    let holes = document.querySelector('#holes')
    if (holes.style.right == '75%') {
      holes.style.right = '0%'
    } else {
      holes.style.right = '75%'
    }
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