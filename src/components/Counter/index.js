import {Component} from 'react'
import './index.css'
class Counter extends Component {
  onIncrement = () => {
    this.setState(prevState => {
      console.log(`incrementing the value prv value is ${prevState.count}`)
      return {count: prevState.count + 1}
    })
  }
  reset = () => {
    this.setState(prevState => {
      console.log(`reseting the counter to Zero from ${prevState.count}`)
      return {count: (prevState.count = 0)}
    })
  }
  decrement = () => {
    this.setState(prevState => {
      console.log(`decrementing the counter prev value is ${prevState.count}`)
      return {count: prevState.count - 1}
    })
  }
  state = {count: 0}
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">Counter</h1>
        <p className="count">{count}</p>
        <div>
          <button onClick={this.onIncrement} className="button">
            Increment
          </button>
          <button onClick={this.reset} className="button">
            Reset
          </button>
          <button onClick={this.decrement} className="button">
            Decrement
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
