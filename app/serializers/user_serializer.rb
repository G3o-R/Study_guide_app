class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :subjects
  has_many :subjects, serializer: SubjectSerializer

end
