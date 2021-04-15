// golf club logo that will be a menu
import React from 'react'

class HoleMenuIcon extends React.Component{
  handleMenuClick = () => {
    let holes = document.querySelector('#holes')
    if ((holes.style.left == '') || (holes.style.left == '0px') || holes.style.left == '0%') {
      holes.style.left = '-40%'
    } else if ((holes.style.left !== '') || (holes.style.left !== '0px')) {
      holes.style.left = '0%'
    }
  }
  render() {
    return (
      <div className='hole-menu-container'>
        <div className='hole-menu' onClick={this.handleMenuClick}>
          <br/>
          <br/>
          <br/>
        </div>
      </div>
    )
  }
}

export default HoleMenuIcon