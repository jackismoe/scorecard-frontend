// golf club logo that will be a menu
import React from 'react'

class HoleMenuIcon extends React.Component{
  handleMenuClick = () => {
    let holes = document.querySelector('#holes')
    let holeMenu = document.querySelector('.hole-menu')
    if ((holes.style.left === '') || (holes.style.left === '0px') || holes.style.left === '0%') {
      holes.style.left = '-40%'
      holeMenu.style.visibility = 'visible'
    } else if ((holes.style.left !== '') || (holes.style.left !== '0px')) {
      holes.style.left = '0%'
      holeMenu.style.visibility = 'hidden'
    }
  }
  render() {
    return (
      <div className='hole-menu-container'>
        <div className='hole-menu-icon' onClick={this.handleMenuClick}>
          <br/>
          <br/>
          <br/>
        </div>
      </div>
    )
  }
}

export default HoleMenuIcon