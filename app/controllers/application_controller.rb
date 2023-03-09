class ApplicationController < ActionController::API
  #cookie functionality on the top level
  include ActionController::Cookies
  #catch the error and then process it with custom private method below
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity



  private

  def authorize
    #see if user exists via session
  end

  #method to render error messages from the rescue_from error catch
  def render_unprocessable_entity(invalid)
    render json: {errors: invalid.record.errors}, status: :unprocessable_entity
  end 


end
