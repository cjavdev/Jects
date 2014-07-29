# == Schema Information
#
# Table name: votes
#
#  id         :integer          not null, primary key
#  project_id :integer
#  user_id    :integer
#  created_at :datetime
#  updated_at :datetime
#

class Vote < ActiveRecord::Base
  validates :user_id, uniqueness: { scope: :project_id }
  validate :user_max_votes

  belongs_to :project, counter_cache: true
  belongs_to :user, counter_cache: true

  def user_max_votes
    unless user.votes.count < 3
      errors.add(:vote_count, "exceeded! You can't vote more than thrice.")
    end
  end
end
