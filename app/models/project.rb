class Project < ApplicationRecord

  #is created and owned by one user only
  belongs_to :user
  #can contain many tasks, and deletes them all once the project is deleted itself
  has_many :tasks, dependent: :destroy


  validates :title, presence: true

end
