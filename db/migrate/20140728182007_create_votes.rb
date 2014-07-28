class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.integer :project_id
      t.integer :user_id

      t.timestamps
    end

    add_index :votes, [:project_id, :user_id], unique: true
  end
end
