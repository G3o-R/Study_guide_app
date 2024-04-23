class SubjectSerializer < ActiveModel::Serializer
  attributes :id, :subject_name, :color, :user_id, :serial_number
  belongs_to :user
  has_many :documents
end
