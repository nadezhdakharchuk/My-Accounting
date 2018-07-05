import React from "react"
import ReactDOM from "react-dom"
import ExpenseForm from "./expense_form"
import ExpenseTable from "./expense_table"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount() {
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

  submit = (event, expense) => {
    event.preventDefault();
    $.ajax({
      url: "/api/v1/expenses",
      method: "POST",
      dataType: 'json',
      ContentType: 'application/json',
      data: {
        expense: expense
      },
      success: function(response) {
        this.setState({data: [response, ...this.state.data]});

      }.bind(this)
    });
  }

  render() {
    return(
      <div className="content-table">
        <ExpenseForm submit={this.submit} />
        <ExpenseTable data={this.state.data} />
      </div>
    )
  }
}

document.addEventListener("DOMContentLoaded", e => {
  ReactDOM.render(<App />, document.getElementById("app"))
})
