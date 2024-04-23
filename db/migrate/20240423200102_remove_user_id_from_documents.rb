class RemoveUserIdFromDocuments < ActiveRecord::Migration[7.1]
  def change
    remove_reference :documents, :user, null: false, foreign_key: true
  end
end
