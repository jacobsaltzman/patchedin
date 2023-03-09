class TaskSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :difficulty
  belongs_to :project
  has_many :contributions

  
end
