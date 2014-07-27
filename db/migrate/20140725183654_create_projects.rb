class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.integer :user_id
      t.string :title
      t.string :url
      t.string :gitrepo

      t.timestamps
    end
  end
end
