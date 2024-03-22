class Folder < ApplicationRecord
    belongs_to :user
    
    validates :subject_name, presence: true, uniqueness: { message: "Folders should be named differently" }
    validates :color, presence: true 
end
