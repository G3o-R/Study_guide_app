class RenameTagToSerialNumberInFolders < ActiveRecord::Migration[7.1]
  def change
    rename_column :folders, :tag, :serial_number
  end
end
