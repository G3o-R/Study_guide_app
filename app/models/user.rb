class User < ApplicationRecord
    has_secure_password

    validates :password, length: { minimum: 8, message: "must be at least 8 characters long" }
    validates :email, presence: true, uniqueness: { message: "An account with this email already exists" }, format: { with: /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/ }
    validates :username, presence: true, uniqueness: true
end
