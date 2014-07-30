module Api
  class ReposController < ApplicationController
    def update
      current_user.cache_repos
      current_user.save!
      render json: current_user.repos.pluck(:name)
    end
  end
end
