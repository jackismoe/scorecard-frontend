import React from 'react'
import HoleMenuIcon from './HoleMenuIcon'
import MainMenuIcon from './MainMenuIcon'


class Header extends React.Component {
  render() {
    return (
      <div className='header'>
          <MainMenuIcon/>
      </div>
    )
  }
}

export default Header