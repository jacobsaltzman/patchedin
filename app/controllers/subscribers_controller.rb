class SubscribersController < ApplicationController
  
  def create
    subscriber = Subscriber.create!(subscriber_params)
    render json: subscriber, status: :created
  end

  def subscriber_params
    params.permit(:email)
  end
end
