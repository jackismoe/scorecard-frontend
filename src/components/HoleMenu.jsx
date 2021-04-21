import React from 'react'

class HoleMenu extends React.Component {
  // jump to hole
  // filter by player
  handlePlayerChange = id => {
    console.log(id.target.value)
    // needs to change state to show only desired player
    // must work with the other sorting parameter 
  }
  handleHoleChange = id => {
    console.log(id.target.value)
    // needs to change state to only show desired hole
    // must work with the other sorting parameter 
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
            <div className='filter-player-container'>
              <p className='filter-player-link'>Filter by Player</p>
              <select onChange={this.handlePlayerChange}>
                <option value=''></option>
                <option value='1'>playerOne</option>
                <option value='2'>playerTwo</option>
                <option value='3'>playerThree</option>
                <option value='4'>playerFour</option>
              </select>
            </div>

            <div className='jump-hole-container'>
              <p className='jump-hole-link'>Jump to Hole</p>
              <select onChange={this.handleHoleChange}>
                <option value=''></option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='10'>10</option>
                <option value='11'>11</option>
                <option value='12'>12</option>
                <option value='13'>13</option>
                <option value='14'>14</option>
                <option value='15'>15</option>
                <option value='16'>16</option>
                <option value='17'>17</option>
                <option value='18'>18</option>
              </select>
            </div>
              <button className='reset-button' onClick={this.resetDropDowns}>Reset</button>

          </div>
        </div>
      </div>
    )
  }
}

export default HoleMenu