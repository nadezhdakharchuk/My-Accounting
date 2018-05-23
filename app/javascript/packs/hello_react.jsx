import React from 'react'
import ReactDOM from 'react-dom'
class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.name}!</div>
  }
}
document.addEventListener("DOMContentLoaded", e => {
  ReactDOM.render(<Hello name="React" />, document.body.appendChild(document.createElement('div')))
})
