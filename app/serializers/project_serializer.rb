class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :progress, :type
  belongs_to :user
  has_many :TaskSerializer

  # def creator
  #   object.user.username
  # end


end
