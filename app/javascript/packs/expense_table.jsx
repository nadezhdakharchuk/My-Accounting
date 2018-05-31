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
      <div className="content-table__tbody">
        { this.state.data.map(function(item, key) {
            return (
              <div className="content-table__tr" id = {item.id}>
                <div className="content-table__td">{item.id}</div>
                <div className="content-table__td">{item.date}</div>
                <div className="content-table__td">{item.amount}</div>
                <div className="content-table__td">{item.comment}</div>
                <div className="content-table__td">
                  <a href="#">Edit</a>
                </div>
              </div>
            )}
         )}
      </div>
    );
  }
}

export default ExpenseTable
