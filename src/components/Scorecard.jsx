import React from 'react'
import uuid from 'react-uuid'

export default class Scorecard extends React.Component {
  constructor() {
    super()
    this.state = [
      [
        {
          number: 'One',
          par: 3
        },
        {
          number: 'Two',
          par: 3
        },
        {
          number: 'Three',
          par: 4
        },
        {
          number: 'Four',
          par: 5
        },
        {
          number: 'Five',
          par: 4
        },
        {
          number: 'Six',
          par: 2
        },
        {
          number: 'Seven',
          par: 4
        },
        {
          number: 'Eight',
          par: 3
        },
        {
          number: 'Nine',
          par: 4
        }     
      ],
      [
        {
          number: 'Ten',
          par: 3
        },
        {
          number: 'Eleven',
          par: 3
        },
        {
          number: 'Twelve',
          par: 4
        },
        {
          number: 'Thirteen',
          par: 5
        },
        {
          number: 'Fourteen',
          par: 4
        },
        {
          number: 'Fifteen',
          par: 2
        },
        {
          number: 'Sixteen',
          par: 4
        },
        {
          number: 'Seventeen',
          par: 3
        },
        {
          number: 'Eighteen',
          par: 4
        }     
      ],
      [
        {
          name: 'playerOne',
          score: 0
        },
        {
          name: 'playerTwo',
          score: 0
        },
        {
          name: 'playerThree',
          score: 0
        },
        {
          name: 'playerFour',
          score: 0
        },
      ]
    ]  
  }

  componentDidMount() {
    console.log(this.state[0])
  }
  render() {
    return(
      <>
        <div id='holes'>
          <div id='frontNine'>
            <h2 className='header-two'>Front</h2>
            {this.state[0].map(hole => {
              return (
                <div key={uuid()} id='hole'>
                  <p className='hole-number'>{hole.number}</p>
                  <p className='hole-par'>Par: {hole.par}</p>
                    <div id='player-block'>
                      {this.state[2].map(player => {
                        return(
                          <>
                            <p id='player-name'>{player.name}:</p>
                            <select id='hole-score'>
                              <option value=''></option>
                              <option value='-3'>-3</option>
                              <option value='-2'>-2</option>
                              <option value='-1'>-1</option>
                              <option value='Par'>Par</option>
                              <option value='+1'>+1</option>
                              <option value='+2'>+2</option>
                              <option value='+3'>+3</option>
                            </select>
                          </>
                        )                      
                      })}
                    </div>
                </div>
              )
            })}
          </div>
          <div id='backNine'>
            <h2 className='header-two'>Back</h2>
            {this.state[1].map(hole => {
              return (
                <div key={uuid()} id='hole'>
                  <p className='hole-number'>{hole.number}</p>
                  <p className='hole-par'>Par: {hole.par}</p>
                    <div id='player-block'>
                      {this.state[2].map(player => {
                        return(
                          <>
                            <p id='player-name'>{player.name}:</p>
                            <select id='hole-score'>
                              <option value=''></option>
                              <option value='-3'>-3</option>
                              <option value='-2'>-2</option>
                              <option value='-1'>-1</option>
                              <option value='Par'>Par</option>
                              <option value='+1'>+1</option>
                              <option value='+2'>+2</option>
                              <option value='+3'>+3</option>
                            </select>
                          </>
                        )
                      })}
                    </div>
                </div>
              )
            })}
          </div>
        </div>
      </>
    )
  }
}