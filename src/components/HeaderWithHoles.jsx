import React from 'react'
import MainMenu from './MainMenu'
import HoleMenu from './HoleMenu'

const HeaderWithHoles = () => {
  return (
    <div className='header-with-holes'>
      <MainMenu/>
      <HoleMenu/>
    </div>
  )
}

export default HeaderWithHoles