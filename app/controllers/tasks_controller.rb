class TasksController < ApplicationController

  #GET /tasks
  def index
    @tasks = Task.all
    render json: @tasks, status: :ok
  end

  #GET /tasks/:id
  def show
    task = Task.find(params[:id])
    render json: task, status: :ok
  end

  #POST /tasks
  def create
    task = Task.create!(task_params)
    render json: task, status: :created
  end

  #PATCH /tasks/:id
  def update
    task = Task.find(params[:id])
    task.update!(task_params)
    render json: task, status: :accepted
  end

  #DELETE /tasks/:id
  def destroy
    task = Task.find(params[:id])
    task.destroy
    head :no_content
  end

  private

  def task_params
    params.permit(:project_id, :name, :description, :completed, :difficulty)
  end


end
