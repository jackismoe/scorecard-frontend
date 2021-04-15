import React from 'react'

class MainMenuIcon extends React.Component{
  handleMenuClick = () => {
    let holes = document.querySelector('#holes')

    if (holes.style.left == '0') {
      holes.style.left = '75%'
    } else if (holes.style.left == 0) {
      debugger
      holes.style.left = '75%'
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