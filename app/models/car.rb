class Car < ApplicationRecord
  belongs_to :user
  validates :name, presence: true
  validates :rating, presence: true
  validates :description, presence: true
  validates :description, length: { minimum:50 }
end
