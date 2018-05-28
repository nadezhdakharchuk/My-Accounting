import React from "react"
import ReactDOM from "react-dom"

class ExpenseTable extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    let expensesData = null;

    $.ajax({
      url: "/api/v1/expenses",
      method: "GET",
      dataType: 'json',
      ContentType: 'application/json',
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
        error: function(jqXHR) {
      }.bind(this)
    });
  }

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          { this.state.data.map(function(item, key) {
              return (
                <tr key = {key}>
                  <td>{item.id}</td>
                  <td>{item.date}</td>
                  <td>{item.amount}</td>
                  <td>{item.comment}</td>
                </tr>
              )}
           )}
        </tbody>
      </table>
    );
  }
}

document.addEventListener("DOMContentLoaded", e => {
  ReactDOM.render(<ExpenseTable />, document.getElementById("table"))
})
