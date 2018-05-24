import React from "react"
import ReactDOM from "react-dom"

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert("Date: " + this.props.date + ",\nAmount: " + this.props.amount + "\nComment: " + this.props.comment);
  }

  render() {
    return (
      <form className="form-row" onSubmit={this.handleSubmit} action="/expenses" method="POST">
        <h2 className="form-group">Expense</h2>
        <div className="row">
          <div className="col-md-4 form-group">
            <label className="control-label" htmlFor="date">
              Date:
            </label>
            <input id="date" type="text" value={this.props.date} className="form-control" onChange={this.handleChange} />
          </div>
          <div className="col-md-4 form-group">
            <label className="control-label" htmlFor="amount">
              Amount:
            </label>
            <input id="amount" type="text" value={this.props.amount} className="form-control" onChange={this.handleChange} />
          </div>
          <div className="col-md-4 form-group">
            <label className="control-label" htmlFor="comment">
              Comment:
            </label>
            <input id="comment" type="text" value={this.props.comment} className="form-control" onChange={this.handleChange} />
          </div>
          <div className="col-md-12 form-group">
            <input type="submit" value="Submit" className="btn btn-primary" />
          </div>
        </div>
      </form>
    );
  }
}

document.addEventListener("DOMContentLoaded", e => {
  ReactDOM.render(<ExpenseForm date="12/03/18" amount="500" comment="lunch" />, document.getElementById("form"))
})
