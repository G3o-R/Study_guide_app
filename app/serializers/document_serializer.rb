class DocumentSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :pdf_file
  belongs_to :subject
end
