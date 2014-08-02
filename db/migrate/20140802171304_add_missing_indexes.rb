class AddMissingIndexes < ActiveRecord::Migration
  def change
    add_index :repos, :user_id
    add_index :projects, :user_id
  end
end
