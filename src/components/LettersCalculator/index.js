// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  changeCount = event => {
    const result = event.target.value.length
    this.setState({count: result})
  }

  render() {
    const {count} = this.state

    return (
      <div className="main-container">
        <div className="second-container">
          <div>
            <h1>Calculate the letters you enter</h1>
            <label className="label" htmlFor="fname">
              Enter the phrase
            </label>
            <br />
            <input
              onChange={this.changeCount}
              id="fname"
              className="text-bar"
              type="text"
            />
            <div className="count-container">
              <p>No.of Letters: {count}</p>
            </div>
          </div>
          <img
            className="img-edit"
            alt="letters calculator"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
