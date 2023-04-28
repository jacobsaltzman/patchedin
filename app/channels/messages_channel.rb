class MessagesChannel < ApplicationCable::Channel
  include ActionController::Helpers

  def subscribed
    # stream_from "some_channel"
    stream_from "MessagesChannel"
 
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def receive(data)
    ActionCable.server.broadcast("MessagesChannel")
    
  end

end
