class AddSubjectIdToDocuments < ActiveRecord::Migration[7.1]
  def change
    add_reference :documents, :subject, null: false, foreign_key: true
  end
end
