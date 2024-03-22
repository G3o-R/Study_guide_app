class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :folders
  has_many :folders
end
