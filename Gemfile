source "https://rubygems.org"

ruby "2.7.4"

# Bundle edge Rails instead: gem "rails", github: "rails/rails", branch: "main"
gem "rails", "~> 7.1.3", ">= 7.1.3.2"

# Use postgresql as the database for Active Record
gem "pg", "~> 1.1"

#use Active Model has_secure_password
gem 'bcrypt', '~> 3.1.7'

gem 'poppler', '~> 3.0', '>= 3.0.7'

gem 'cairo-gobject', '~> 3.5', '>= 3.5.1'

# Use the Puma web server [https://github.com/puma/puma]
gem "puma", ">= 6.0"

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: %i[ mswin mswin64 mingw x64_mingw jruby ]

# Use Rack CORS for handling Cross-Origin Resource Sharing (CORS), making cross-origin Ajax possible
# gem "rack-cors"

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  # Speed up commands on slow machines / big apps [https://github.com/rails/spring]
  # gem "spring"
end

gem "active_model_serializers", "~> 0.10.12"