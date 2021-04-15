// golf club logo that will be a menu
import React from 'react'

class HoleMenuIcon extends React.Component{
  handleMenuClick = () => {
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