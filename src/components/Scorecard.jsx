import React from 'react'


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
      ]
    ]  
  }

  componentDidMount() {
    console.log(this.state)
  }
  render() {
    return(
      <>
        <div id='holes'>
          <div id='frontNine'>
            <h2 className='header-two'>Front</h2>
          {this.state[0].map(hole => {
            return (
              <div id='hole'>
                <p className='hole-number'>{hole.number}</p>
                <p className='hole-par'>Par: {hole.par}</p>
              </div>
            )
          })}
          </div>
        </div>
      </>
    )
  }
}