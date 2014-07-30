class ApplicationController < ActionController::Base
  unless Rails.env.development?
    protect_from_forgery with: :null_session
  end

  before_filter :require_user!
  helper_method :current_user

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def require_user!
    redirect_to "/welcome" unless current_user
  end
end
