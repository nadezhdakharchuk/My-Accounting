import React from "react"
import ReactDOM from "react-dom"

class ExpenseTable extends React.Component {



  render() {
    console.log(this.props)
    return (
      <div className="content-table__tbody">
        { this.props.data.map(function(item, key) {
            return (
              <div className="content-table__tr" key={item.id}>
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
