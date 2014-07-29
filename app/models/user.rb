# == Schema Information
#
# Table name: users
#
#  id            :integer          not null, primary key
#  provider      :string(255)      not null
#  uid           :string(255)      not null
#  login         :string(255)      not null
#  name          :string(255)      not null
#  email         :string(255)      not null
#  image         :string(255)      not null
#  session_token :string(255)      not null
#  created_at    :datetime
#  updated_at    :datetime
#  votes_count   :integer          default(0)
#

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

  default_scope { where(admin: false) }

  has_one :project
  has_many :votes, inverse_of: :user

  before_validation :ensure_session_token, :ensure_project

  def self.find_by_omniauth(omniauth_params)
    self.find_by(
      provider: omniauth_params[:provider],
      uid: omniauth_params[:uid]
    )
  end

  def votes_left
    3 - votes_count
  end

  def omniauth=(omniauth_params)
    self.provider = omniauth_params[:provider]
    self.uid = omniauth_params[:uid]
    self.login = omniauth_params[:extra][:raw_info][:login]
    self.name = omniauth_params[:info][:name]
    self.email = omniauth_params[:info][:email]
    self.image = omniauth_params[:info][:image]
    self.token = omniauth_params[:credentials][:token]
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
