class Project < ApplicationRecord

  #is created and owned by one user only
  belongs_to :user
  #can contain many tasks
  has_many :tasks


  validates :title, presence: true

end
