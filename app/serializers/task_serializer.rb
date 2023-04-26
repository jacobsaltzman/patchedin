class TaskSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :difficulty, :messages
  belongs_to :project
  has_many :contributions

  def messages
    object.contributions.map(&:report)
  end
  
end
