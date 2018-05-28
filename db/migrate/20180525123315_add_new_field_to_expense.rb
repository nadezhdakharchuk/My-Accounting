class AddNewFieldToExpense < ActiveRecord::Migration[5.2]
  def change
    add_column :expenses, :created_at, :datetime
    add_column :expenses, :updated_at, :datetime
  end
end
