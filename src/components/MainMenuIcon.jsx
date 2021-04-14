import React from 'react'

const MainMenuIcon = () => {
  const handleMenuClick = () => {
    console.log('main click')
    let holes = document.querySelector('#holes')
    if (holes.style.left == '75%') {
      holes.style.left = '0%'
    } else if (holes.style.left == 0) {
      holes.style.left = '75%'
    } else if (holes.style.right == '75%') {
      holes.style.right = '0'
      handleMenuClick()
    } else if (holes.style.right == '0') {
      holes.style.right = '75%'
    }
  }

  return (
    <div className='main-menu' onClick={handleMenuClick}>
      <br/>
      <br/>
      <br/>
    </div>
  )
}

export default MainMenuIcon