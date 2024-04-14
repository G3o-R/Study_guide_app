class ChangeFoldersToSubjects < ActiveRecord::Migration[7.1]
  def change
    rename_table :folders, :subjects
  end
end
