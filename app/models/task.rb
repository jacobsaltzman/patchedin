class Task < ApplicationRecord

  belongs_to :project
  has_many :contributions, dependent: :destroy


end
