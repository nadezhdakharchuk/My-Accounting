class CreateExpenses < ActiveRecord::Migration[5.2]
  def change
    create_table :expenses do |t|

    t.datetime :date, null: false
    t.integer :amount, null: false
    t.string :comment, null: false

    end
  end
end
