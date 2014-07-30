module Api
  class VotesController < ApplicationController
    def create
      @vote = current_user.votes.new(vote_params)

      if @vote.save
        render json: @vote
      else
        render json: @vote.errors.full_messages, status: 422
      end
    end

    def destroy_them_all
      @votes = current_user.votes
      @votes.destroy_all
      render json: { message: "destroyed all" }
    end

    private

    def vote_params
      params.require(:vote).permit(:project_id)
    end
  end
end
