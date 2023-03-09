class ApplicationController < ActionController::API
  before_action :authorize
  #cookie functionality on the top level
  include ActionController::Cookies
  #catch the error and then process it with custom private method below
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity



  private

  def authorize
    #make an instance variable to hold session user
    @current_user = User.find_by(id: session[:user_id])
    #if no current user, then render error message
    render json: {errors: ["Not Authorized"]}, status: unauthorized unless @current_user
  end

  #method to render error messages from the rescue_from error catch
  def render_unprocessable_entity(invalid)
    render json: {errors: invalid.record.errors}, status: :unprocessable_entity
  end 


end
