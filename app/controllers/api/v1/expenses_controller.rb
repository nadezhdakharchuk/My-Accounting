class Api::V1::ExpensesController < ActionController::API

  def index
    render json: Expense.all.order(created_at: :desc)
  end

  def create
    expense = Expense.create expense_params
    render json: expense
  end

  def expense_params
    params.require(:expense).permit(:date, :amount, :comment)
  end
end
