class Project < ActiveRecord::Base
  validates :title, :url, :gitrepo, presence: true
  default_scope { order(created_at: :desc) }
  belongs_to :user

  has_many :votes
end
