class FoldersController < ApplicationController
    def create
      new_folder = @current_user.folders.create!(folder_params)
      render json: new_folder, status: :created
    end
  
    private
  
    def folder_params 
      params.permit(:subject_name, :color)
    end
  end
  
