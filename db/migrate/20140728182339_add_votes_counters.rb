class AddVotesCounters < ActiveRecord::Migration
  def change
    remove_column :users, :vote_count, :integer, default: 0
    remove_column :projects, :vote_count, :integer, default: 0
    add_column :users, :votes_count, :integer, default: 0
    add_column :projects, :votes_count, :integer, default: 0
  end
end
