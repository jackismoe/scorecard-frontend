import React from 'react'
import uuid from 'react-uuid'

export default class Scorecard extends React.Component {
  constructor() {
    super()
    this.state = [
      [
        {
          number: 'One',
          par: 3,
          playerOneScore: 0,
          playerTwoScore: 0,
          playerThreeScore: 0,
          playerFourScore: 0,
        },
        {
          number: 'Two',
          par: 3,
          playerOneScore: 0,
          playerTwoScore: 0,
          playerThreeScore: 0,
          playerFourScore: 0,
        },
        {
          number: 'Three',
          par: 4,
          playerOneScore: 0,
          playerTwoScore: 0,
          playerThreeScore: 0,
          playerFourScore: 0,
        },
        {
          number: 'Four',
          par: 5,
          playerOneScore: 0,
          playerTwoScore: 0,
          playerThreeScore: 0,
          playerFourScore: 0,
        },
        {
          number: 'Five',
          par: 4,
          playerOneScore: 0,
          playerTwoScore: 0,
          playerThreeScore: 0,
          playerFourScore: 0,
        },
        {
          number: 'Six',
          par: 2,
          playerOneScore: 0,
          playerTwoScore: 0,
          playerThreeScore: 0,
          playerFourScore: 0,
        },
        {
          number: 'Seven',
          par: 4,
          playerOneScore: 0,
          playerTwoScore: 0,
          playerThreeScore: 0,
          playerFourScore: 0,
        },
        {
          number: 'Eight',
          par: 3,
          playerOneScore: 0,
          playerTwoScore: 0,
          playerThreeScore: 0,
          playerFourScore: 0,
        },
        {
          number: 'Nine',
          par: 4,
          playerOneScore: 0,
          playerTwoScore: 0,
          playerThreeScore: 0,
          playerFourScore: 0,
        }     
      ],
      [
        {
          number: 'Ten',
          par: 3,
          playerOneScore: 0,
          playerTwoScore: 0,
          playerThreeScore: 0,
          playerFourScore: 0,
        },
        {
          number: 'Eleven',
          par: 3,
          playerOneScore: 0,
          playerTwoScore: 0,
          playerThreeScore: 0,
          playerFourScore: 0,
        },
        {
          number: 'Twelve',
          par: 4,
          playerOneScore: 0,
          playerTwoScore: 0,
          playerThreeScore: 0,
          playerFourScore: 0,
        },
        {
          number: 'Thirteen',
          par: 5,
          playerOneScore: 0,
          playerTwoScore: 0,
          playerThreeScore: 0,
          playerFourScore: 0,
        },
        {
          number: 'Fourteen',
          par: 4,
          playerOneScore: 0,
          playerTwoScore: 0,
          playerThreeScore: 0,
          playerFourScore: 0,
        },
        {
          number: 'Fifteen',
          par: 2,
          playerOneScore: 0,
          playerTwoScore: 0,
          playerThreeScore: 0,
          playerFourScore: 0,
        },
        {
          number: 'Sixteen',
          par: 4,
          playerOneScore: 0,
          playerTwoScore: 0,
          playerThreeScore: 0,
          playerFourScore: 0,
        },
        {
          number: 'Seventeen',
          par: 3,
          playerOneScore: 0,
          playerTwoScore: 0,
          playerThreeScore: 0,
          playerFourScore: 0,
        },
        {
          number: 'Eighteen',
          par: 4,
          playerOneScore: 0,
          playerTwoScore: 0,
          playerThreeScore: 0,
          playerFourScore: 0,
        }     
      ],
      [
        {
          name: 'playerOne',
          totalScore: 0
        },
        {
          name: 'playerTwo',
          totalScore: 0
        },
        {
          name: 'playerThree',
          totalScore: 0
        },
        {
          name: 'playerFour',
          totalScore: 0
        },
      ]
    ]  
  }

  updateScore = (player) => {
    console.log(player)
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
                            <p id='player-name'>{player.name}: {player.score}</p>
                            <button>+</button>
                            <form>

                            </form>
                            <button>-</button>
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
                            <button>+</button>
                            <form>

                            </form>
                            <button>-</button>
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