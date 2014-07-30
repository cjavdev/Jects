module Api
  class ProjectsController < ApplicationController
    def update
      @project = current_user.project

      if @project.update_attributes(project_params)
        render json: @project
      else
        render json: @project.errors.full_messages, status: 422
      end
    end

    def checklist
      current_user.project_repo.submit_issues!
      render json: { message: "Issues created!" }
    end

    private

    def project_params
      params.require(:project).permit(:title, :url, :gitrepo)
    end
  end
end
