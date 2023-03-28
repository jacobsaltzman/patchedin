class ContributionsController < ApplicationController

  #GET /contributions
  def index
    @contribs = Contribution.all 
    render json: @contribs, status: :ok
  end

  #GET /contributions/:id
  def show
    contrib = Contribution.find(params[:id])
    render json: contrib, status: :ok
  end

  #POST /contributions
  def create
    contrib = Contribution.create!(contribution_params)
    render json: contrib, status: :created
  end

  #PATCH /contributions/:id
  def update
    contrib = Contribution.find(params[:id])
    contrib.update!(contribution_params)
    render json: contrib, status: :accepted
  end


  #DELETE /contributions/:id
  def destroy
    contrib = Contribution.find(params[:id])
    contrib.destroy
    head :no_content
  end

  private

  def contribution_params
    params.permit(:user_id, :task_id, :report)
  end
end
