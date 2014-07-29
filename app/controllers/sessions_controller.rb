class SessionsController < ApplicationController
  skip_before_filter :require_user!, :only => [:create, :new]

  def create
    omniauth_params = request.env["omniauth.auth"]
    user = User.find_by_omniauth(omniauth_params)

    if user.nil?
      fail
      user = User.new(omniauth: omniauth_params)
    else
      # Update params, issue new session token.
      user.omniauth = omniauth_params
      user.reset_session_token!
    end

    if user.save
      session[:session_token] = user.session_token
      redirect_to '/'
    else
      render json: {
        errors: user.errors,
        params: params,
        'omniauth.auth' => request.env["omniauth.auth"]
      }, status: 422
    end
  end

  def destroy
    current_user.reset_session_token!
    session.delete(:session_token)
    redirect_to "/session/new"
  end

  def new
    if current_user
      redirect_to "/"
    else
      render "new"
    end
  end
end
