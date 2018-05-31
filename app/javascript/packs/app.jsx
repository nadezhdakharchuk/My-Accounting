import React from "react"
import ReactDOM from "react-dom"
import ExpenseForm from "./expense_form"
import ExpenseTable from "./expense_table"

class App extends React.Component {
  render() {
    return(
      <div className="content-table">
        <ExpenseForm submit={this.submit} />
        <ExpenseTable />
      </div>
    )
  }

  submit = (event, expense) => {
    event.preventDefault();
    $.ajax({
      url: "/api/v1/expenses",
      method: "POST",
      dataType: 'json',
      ContentType: 'application/json',
      data: {
        expense: expense
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", e => {
  ReactDOM.render(<App />, document.getElementById("app"))
})
