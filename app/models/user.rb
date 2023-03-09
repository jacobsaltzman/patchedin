class User < ApplicationRecord
  #bcrypt password macro
  has_secure_password
  #user can create many projects directly
  has_many :projects
  #user can create many contributions, which is the join table for tasks
  has_many :contributions
  has_many :tasks, through: :contributions
  #validates a unique username and password existing between 4 and 15 characters
  validates :username, uniqueness: true, presence: true
  validates :password, length: {minimum: 4, maximum: 15}
  

end
