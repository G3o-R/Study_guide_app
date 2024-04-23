class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :subjects
  has_many :subjects
  has_many :documents, through: :subjects
end
