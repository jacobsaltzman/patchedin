class ContributionSerializer < ActiveModel::Serializer
  attributes :id, :report, :username
  belongs_to :user
  belongs_to :task 

  def username
  object.user.username
  end
end
