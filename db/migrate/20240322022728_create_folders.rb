class CreateFolders < ActiveRecord::Migration[7.1]
  def change
    create_table :folders do |t|
      t.string :subject_name
      t.string :color, default: "grey"

      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end