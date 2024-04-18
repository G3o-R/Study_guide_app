class SubjectSerializer < ActiveModel::Serializer
  attributes :id, :subject_name, :color, :user_id, :serial_number
end
