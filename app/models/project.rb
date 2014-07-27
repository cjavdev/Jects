class Project < ActiveRecord::Base
  validates :title, :url, :gitrepo, presence: true

  belongs_to :user
end
