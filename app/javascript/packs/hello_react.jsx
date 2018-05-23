import React from 'react'
import ReactDOM from 'react-dom'

class Hello extends React.Component {
  render() {
    return <h2>Hello {this.props.name}!</h2>
  }
}

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form className="col-sm-6 col-sm-offset-3" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label className="control-label">
            Name:
          </label>
          <input type="text" value={this.state.value} className="form-control" onChange={this.handleChange} />
        </div>
        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
    );
  }
}

document.addEventListener("DOMContentLoaded", e => {
  ReactDOM.render(<Hello name="React" />, document.getElementById("hello"))
  ReactDOM.render(<NameForm />, document.getElementById("form"))
})
