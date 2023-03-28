class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :creationDate
  has_many :projects
  has_many :contributions

  def creationDate
    object.created_at.strftime("%Y-%m-%d")
  end
  
end
