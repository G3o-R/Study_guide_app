class AddTagToFolders < ActiveRecord::Migration[7.1]
  def change
    add_column :folders, :tag, :string
    add_index :folders, :tag, unique: true
  end
end
