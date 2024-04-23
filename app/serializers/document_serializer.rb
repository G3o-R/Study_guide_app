class DocumentSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :pdf_file
  has_one :subject
end
