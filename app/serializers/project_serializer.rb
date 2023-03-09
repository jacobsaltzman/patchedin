class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :progress, :type
end
