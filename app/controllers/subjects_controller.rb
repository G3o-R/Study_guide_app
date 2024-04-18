class SubjectsController < ApplicationController
    def create
      new_subject = @current_user.subjects.create!(subject_params)
      render json: new_subject, status: :created
    end
  
    private
  
    def subject_params 
      params.permit(:subject_name, :color)
    end
  end
  
