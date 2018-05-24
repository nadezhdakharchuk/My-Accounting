import React from "react"
import ReactDOM from "react-dom"

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "12/12/18",
      amount: "500",
      comment: "lunch"
    };

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDateChange(event) {
    this.setState({ date: event.target.value });
  }

  handleAmountChange(event) {
    this.setState({ amount: event.target.value });
  }

  handleCommentChange(event) {
    this.setState({ comment: event.target.value });
  }

  handleSubmit(event) {
    alert("Date: " + this.state.date + ",\nAmount: " + this.state.amount + ",\nComment: " + this.state.comment);
  }

  render() {
    return (
      <form className="form-row" onSubmit={this.handleSubmit} action="/expenses" method="post">
        <h2 className="form-group">Expense</h2>
        <div className="row">
          <div className="col-md-4 form-group">
            <label className="control-label" htmlFor="date">
              Date:
            </label>
            <input id="date" type="text" value={this.state.date} className="form-control" onChange={this.handleDateChange} />
          </div>
          <div className="col-md-4 form-group">
            <label className="control-label" htmlFor="amount">
              Amount:
            </label>
            <input id="amount" type="text" value={this.state.amount} className="form-control" onChange={this.handleAmountChange} />
          </div>
          <div className="col-md-4 form-group">
            <label className="control-label" htmlFor="comment">
              Comment:
            </label>
            <input id="comment" type="text" value={this.state.comment} className="form-control" onChange={this.handleCommentChange} />
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
  ReactDOM.render(<ExpenseForm />, document.getElementById("form"))
})
