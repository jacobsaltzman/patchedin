class Contribution < ApplicationRecord

  after_create_commit { broadcast_message }

  belongs_to :user
  belongs_to :task
  
  private

  def broadcast_message
      ActionCable.server.broadcast("MessagesChannel", {
        id: id,
        report: report,
        user_id: user_id,
        task_id: task_id,
        username: user.username
      })
  end
end
