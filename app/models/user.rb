class User < ActiveRecord::Base
  validates(
    :provider,
    :uid,
    :login,
    :name,
    :email,
    :image,
    :session_token,
    presence: true
  )

  has_one :project
  has_many :votes

  before_validation :ensure_session_token, :ensure_project



  def self.find_by_omniauth(omniauth_params)
    self.find_by(
      provider: omniauth_params[:provider],
      uid: omniauth_params[:uid]
    )
  end

  def omniauth=(omniauth_params)
    self.provider = omniauth_params[:provider]
    self.uid = omniauth_params[:uid]
    self.login = omniauth_params[:extra][:raw_info][:login]
    self.name = omniauth_params[:info][:name]
    self.email = omniauth_params[:info][:email]
    self.image = omniauth_params[:info][:image]
  end

  def email
    "thejamaicandave@gmail.com" || super
  end

  def reset_session_token!
    reset_session_token && save!
    session_token
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64
  end

  protected

  def ensure_session_token
    self.session_token ||= reset_session_token
  end

  def ensure_project
    self.project ||= Project.create(
      title: "#{ self.login }'s project",
      url: 'http://bp.io/',
      gitrepo: 'bp/bp'
    )
  end
end
