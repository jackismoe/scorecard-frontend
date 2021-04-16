import React from 'react'
import MainMenu from './MainMenu'

class MainMenuIcon extends React.Component{
  handleMenuClick = () => {
    let holes = document.querySelector('#holes')
    let mainMenu = document.querySelector('.main-menu')
    if ((holes.style.left === '') || (holes.style.left === '0px') || holes.style.left === '0%') {
      holes.style.left = '60%'
      mainMenu.style.visibility = 'visible'
    } else if ((holes.style.left !== '') || (holes.style.left !== '0px')) {
      holes.style.left = '0%'
      mainMenu.style.visibility = 'hidden'
    }
  }

  render() {
    return (
      <div className='main-menu-container'>
        <div className='main-menu-icon' onClick={this.handleMenuClick}>
          <br/>
          <br/>
          <br/>
        </div>
        <MainMenu/>
      </div>
    )
  }
}

export default MainMenuIcon