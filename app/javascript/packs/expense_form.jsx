import React from "react"
import ReactDOM from "react-dom"
import ExpenseTable from "./expense_table"

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "12/12/2018",
      amount: "500",
      comment: "lunch"
    };

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
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

  render() {
    return (
      <form className="content-table__thead" onSubmit={(event) => this.props.submit(event, this.state)}>
        <div className="content-table__tr">
          <div className="content-table__th">
            <label className="control-label">
              ID
            </label>
          </div>
          <div className="content-table__th">
            <label className="control-label" htmlFor="amount">
              Date:
            </label>
          </div>
          <div className="content-table__th">
            <label className="control-label" htmlFor="amount">
              Amount:
            </label>
          </div>
          <div className="content-table__th">
            <label className="control-label" htmlFor="comment">
              Comment:
            </label>
          </div>
          <div className="content-table__th">
          </div>
        </div>
        <div className="content-table__tr">
          <div className="content-table__th"></div>
          <div className="content-table__th">
            <input id="date" type="text" value={this.state.date} className="form-control" onChange={this.handleDateChange} />
          </div>
          <div className="content-table__th">
            <input id="amount" type="text" value={this.state.amount} className="form-control" onChange={this.handleAmountChange} />
          </div>
          <div className="content-table__th">
            <input id="comment" type="text" value={this.state.comment} className="form-control" onChange={this.handleCommentChange} />
          </div>
          <div className="content-table__th">
            <input type="submit" value="Submit" className="btn btn-primary" />
          </div>
        </div>
      </form>
    );
  }
}

// document.addEventListener("DOMContentLoaded", e => {
//   ReactDOM.render(<ExpenseForm />, document.getElementById("form"))
// })

export default ExpenseForm

