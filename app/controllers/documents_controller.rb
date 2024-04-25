class DocumentsController < ApplicationController

    def create
      subject = @current_user.subjects.find_by(serial_number: params[:serial_number])
      if subject.nil?
        render json: { error: "Subject not found" }, status: :not_found
        return
      end
    
      new_doc = subject.documents.create!(doc_params)

      render json: new_doc, status: :created
    end

    def index 
      all_documents = Document.all
      render json: all_documents
    end

    private

    def doc_params
        params.permit( :name, :description, :pdf_file )
    end
end
