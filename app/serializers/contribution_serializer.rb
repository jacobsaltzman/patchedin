class ContributionSerializer < ActiveModel::Serializer
  attributes :id, :report
  belongs_to :user
  belongs_to :task 

  # def creator
  #   creator = object.user
  #   creator.username
  # end 
end
