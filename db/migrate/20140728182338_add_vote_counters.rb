class AddVoteCounters < ActiveRecord::Migration
  def change
    add_column :users, :vote_count, :integer, default: 0
    add_column :projects, :vote_count, :integer, default: 0
  end
end
