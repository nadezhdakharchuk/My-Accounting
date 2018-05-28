class Expense < ApplicationRecord
  validates :date, presence: true
end
