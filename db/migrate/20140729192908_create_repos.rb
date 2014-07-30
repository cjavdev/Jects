class CreateRepos < ActiveRecord::Migration
  def change
    create_table :repos do |t|
      t.string :name
      t.integer :user_id

      t.timestamps
    end
  end
end
