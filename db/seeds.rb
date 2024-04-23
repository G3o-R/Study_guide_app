# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
puts "------------------seeding"

g3or = User.create!({
  username: 'G3o-R',
  password_digest: BCrypt::Password.create('P4ssw0rd!'), 
  email: 'fakeemail@gmail.com',
  })
  
  g3or.subjects.create!([
    {
      subject_name: "Math",
      color: "red"
    },
    {
      subject_name: "ELA",
      color: "blue"
    },
    {
      subject_name: "Science",
      color: "green"
    }
    ])
    
    g3or = User.find_by(username: 'G3o-R')
    # puts g3or.folders.pluck(:subject_name, :color, :serial_number)
    

puts "------------------ done seeding"
