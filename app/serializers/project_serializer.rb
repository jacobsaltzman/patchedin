class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :progress, :category
  belongs_to :user
  has_many :tasks

  # def creator
  #   object.user.username
  # end


end
