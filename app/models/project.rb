# == Schema Information
#
# Table name: projects
#
#  id          :integer          not null, primary key
#  user_id     :integer
#  title       :string(255)
#  url         :string(255)
#  gitrepo     :string(255)
#  created_at  :datetime
#  updated_at  :datetime
#  votes_count :integer          default(0)
#

class Project < ActiveRecord::Base
  validates :title, :url, :gitrepo, presence: true

  default_scope { order(votes_count: :desc) }

  belongs_to :user
  has_many :votes
end
