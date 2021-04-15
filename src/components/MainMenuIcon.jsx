import React from 'react'

class MainMenuIcon extends React.Component{
  handleMenuClick = () => {
    let holes = document.querySelector('#holes')
    if ((holes.style.left == '') || (holes.style.left == '0px') || holes.style.left == '0%') {
      holes.style.left = '60%'
    } else if ((holes.style.left !== '') || (holes.style.left !== '0px')) {
      holes.style.left = '0%'
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