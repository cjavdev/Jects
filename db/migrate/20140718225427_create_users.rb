class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :provider, null: false
      t.string :uid, null: false
      t.string :login, null: false
      t.string :name, null: false
      t.string :email, null: false
      t.string :image, null: false
      t.string :session_token, null: false

      t.timestamps
    end
  end
end
