import {Component} from 'react'

class Welcome extends Component {
  render() {
    const {className, name} = this.props
    return <h1 className={className}>Hello {name}</h1>
  }
}
export default Welcome
