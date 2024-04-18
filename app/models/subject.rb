class Subject < ApplicationRecord
    belongs_to :user
    before_create :generate_serial_number
    

    validates :subject_name, presence: true, uniqueness: { message: "Folders should be named differently" }
    validates :color, presence: true  
    
    private
  
    def generate_serial_number
      self.serial_number = generate_unique_serial_number
    end
  
    def generate_unique_serial_number
      loop do
        serial_number = SecureRandom.hex(4)
        break serial_number unless Folder.exists?(serial_number: serial_number)
      end
    end
  end