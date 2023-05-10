class UpdateSentToSubscribersDefault < ActiveRecord::Migration[7.0]
  def up
    change_column :subscribers, :sent_welcome_email, :boolean, default: false
  end

  def down
    change_column :subscribers, :sent_welcome_email, :boolean, default: nil
  end
end
