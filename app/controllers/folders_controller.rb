class FoldersController < ApplicationController

    def create
        new_folder = @current_user.folders.create!(folder_params)
        render json: post, status: :created
    end
end
