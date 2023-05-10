class UpdateSentToSubscribers < ActiveRecord::Migration[7.0]
  def up
    Subscriber.where(sent_welcome_email: nil).update_all(sent_welcome_email: false)
  end
  
  def down
    # Define the inverse of the migration if needed
  end
end
