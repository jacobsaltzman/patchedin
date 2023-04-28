class AddSentToSubscribers < ActiveRecord::Migration[7.0]
  def change
    add_column :subscribers, :sent_welcome_email, :boolean
  end
end
