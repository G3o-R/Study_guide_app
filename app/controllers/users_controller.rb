class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]

    def create 
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def index 
        render json: User.all
    end

    def showMe
        render json: @current_user
    end
    private

    def user_params
        params.permit(:username, :email, :password, :password_confirmation)
    end

end
