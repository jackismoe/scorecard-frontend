import React from 'react'

class MainMenuIcon extends React.Component{
  constructor() {
    super() 
    this.state = {
      isIn: true,
      isOut: false
    }
  }
  
  handleMenuClick = () => {
    const pushHolesOut = () => {
      let holes = document.querySelector('#holes')
      holes.style.left = '75%'
    }

    const pushHolesIn = () => {
      let holes = document.querySelector('#holes')
      holes.style.left = '0'
    }
    


  }

  render() {
    return (
      <div className='main-menu' onClick={this.handleMenuClick}>
        <br/>
        <br/>
        <br/>
      </div>
    )
  }
}

export default MainMenuIcon