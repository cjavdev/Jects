module Api
  class ProjectsController < ApplicationController
    def update
      @project = current_user.project

      if @project.update_attributes(project_params)
        render json: @project
      else
        render json: @project.errors.full_messages, status: :unprocessable_entity
      end
    end

    private

    def project_params
      params.require(:project).permit(:title, :url, :gitrepo)
    end
  end
end
