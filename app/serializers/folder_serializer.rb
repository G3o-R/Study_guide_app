class FolderSerializer < ActiveModel::Serializer
  attributes :id, :subject_name, :color, :user_id
end
