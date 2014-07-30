class AddGeneratedToRepos < ActiveRecord::Migration
  def change
    add_column :repos, :generated, :boolean, default: false
  end
end
