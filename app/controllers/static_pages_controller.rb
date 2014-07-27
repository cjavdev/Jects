class StaticPagesController < ApplicationController
  def root
    @project = current_user.project
  end
end
