class SessionsController < ApplicationController

  #authorize before
  skip_before_action :authorize, only: :create


  #create method that builds session 
  def create
    #find user by username
    user = User.find_by(username: params[:username])
    #make sure user exists and use authenticate method from bcrypt to check the password
    if user && user.authenticate(params[:password])
      #if it passes, create session and render out the user info
      session[:user_id] = user.id
      render json: user, status: :created
    else
      #if failed, render errors
      render json: {error: "Invalid Username or Password"}, status: :unauthorized 
    end
  end

  #delete method for destroying current session

  def destroy
    session.delete :user_id
    head :no_content
  end

end
