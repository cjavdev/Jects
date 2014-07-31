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

  has_one :project
  has_many :votes, inverse_of: :user
  has_many :repos

  before_validation :ensure_session_token, :ensure_project

  def self.find_by_omniauth(omniauth_params)
    self.find_by(
      provider: omniauth_params[:provider],
      uid: omniauth_params[:uid]
    )
  end

  def email
    "thejamaicandave@gmail.com" || super
  end

  def github_user
    github.user
  end

  def project_repo
    repos.where(name: project.gitrepo).first
  end

  def github
    @_github ||= Octokit::Client.new(access_token: token)
  end

  def _repos
    github_user.rels[:repos].get.data
  end

  def omniauth=(omniauth_params)
    self.provider = omniauth_params[:provider]
    self.uid = omniauth_params[:uid]
    self.login = omniauth_params[:extra][:raw_info][:login]
    self.name = omniauth_params[:info][:name]
    self.email = omniauth_params[:info][:email]
    self.image = omniauth_params[:info][:image]
    self.token = omniauth_params[:credentials][:token]
    cache_repos
  end

  def cache_repos
    _repos.map(&:name).each do |name|
      repo_name = "#{ github.login }/#{ name }"
      next if self.repos.exists?(name: repo_name)
      self.repos.build(name: repo_name)
    end
    self.repos
  end

  def reset_session_token!
    reset_session_token && save!
    session_token
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64
  end

  def votes_left
    3 - votes_count
  end

  protected

  def ensure_session_token
    self.session_token ||= reset_session_token
  end

  def ensure_project
    self.project ||= Project.create(
      title: "#{ self.login }'s project",
      url: 'exampleproject.herokuapp.com',
      gitrepo: "#{ self.login }/my_final_project"
    )
  end
end
