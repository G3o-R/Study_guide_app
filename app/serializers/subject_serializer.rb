class SubjectSerializer < ActiveModel::Serializer
  attributes :id, :subject_name, :color, :user_id, :serial_number, :documents
  belongs_to :user
  has_many :documents, serializer: DocumentSerializer

end
