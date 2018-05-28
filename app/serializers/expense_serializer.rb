class ExpenseSerializer < ActiveModel::Serializer
  attributes :id, :date, :amount, :comment, :errors

  def date
    object.date ? object.date.strftime("%m/%d/%Y") : ""
  end

end
