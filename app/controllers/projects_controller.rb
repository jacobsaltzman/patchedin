class ProjectsController < ApplicationController

  #GET /projects
  def index
    @projects = Project.all
    render json: @projects, status: :ok
  end


  #GET /projects/:id
  def show
    project = Project.find(params[:id])
    render json: project, status: :ok
  end


  #POST /projects
  def create
    project = Project.create!(project_params)
    render json: project, status: :created
  end


  #PATCH /projects/:id
  def update
    project = Project.find(params[:id])
    project.update!(project_params)
    render json: project, status: :accepted
  end


  #DELETE /projects/:id
  def destroy
    project = Project.find(params[:id])
    project.destroy
    head :no_content
  end



  private
  #strong params
  def project_params
    params.permit(:title, :description, :progress, :category, :user_id)
  end

end
