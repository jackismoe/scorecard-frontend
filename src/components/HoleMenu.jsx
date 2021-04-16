import React from 'react'

class HoleMenu extends React.Component {
  // jump to hole
  // filter by player
  showHoleLinks = () => {
    let holeLinks = document.querySelector('.hole-link-container')
    let holeMenu = document.querySelector('.hole-menu')
    if (holeLinks.style.visibility === 'visible') {
      holeLinks.style.visibility = 'hidden'
      holeMenu.style.height = '40%'
      holeMenu.style.borderBottomLeftRadius = '12% 5%'
      holeMenu.style.borderTopLeftRadius = '12% 5%'
    } else {
      holeLinks.style.visibility = 'visible'
      holeMenu.style.height = '90%'
      holeMenu.style.borderTopLeftRadius = '12% 2.5%'
      holeMenu.style.borderBottomLeftRadius = '12% 2.5%'
    }
  }
  
  render() {
    return(
      <div className='hole-menu-con-two'>
        <div className='hole-menu'>
          <div className='hole-menu-headers'>
            <h2 className='course-name'><i>Brasstown Valley & Resort</i></h2>
            <h4 className='avg-score'>Average Score: 82.5</h4>
            <h4 className='avg-handicap'>Average Handicap: 16</h4>
            <h4 className='previous-score'>Previous Score: 87</h4>
            <h4 className='current-handicap'>Current Handicap: 21</h4>
          </div>
          <div className='hole-menu-options'>
            <p className='filter-player-link'>Filter by Player</p>
              <div className='player-link-container'>
                <p className='player-link'>jackson</p>
                <p className='player-link'>ren</p>
                <p className='player-link'>ruby</p>
                <p className='player-link'>blue</p>
              </div>
            <p className='jump-hole-link' onClick={this.showHoleLinks}>Jump to Hole</p>
              <div className='hole-link-container'>
                <p className='hole-link'>1</p>
                <p className='hole-link'>2</p>
                <p className='hole-link'>3</p>
                <p className='hole-link'>4</p>
                <p className='hole-link'>5</p>
                <p className='hole-link'>6</p>
                <p className='hole-link'>7</p>
                <p className='hole-link'>8</p>
                <p className='hole-link'>9</p>
                <p className='hole-link'>10</p>
                <p className='hole-link'>11</p>
                <p className='hole-link'>12</p>
                <p className='hole-link'>13</p>
                <p className='hole-link'>14</p>
                <p className='hole-link'>15</p>
                <p className='hole-link'>16</p>
                <p className='hole-link'>17</p>
                  <p className='hole-link'>18</p>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HoleMenu