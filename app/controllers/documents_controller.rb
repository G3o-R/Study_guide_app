class DocumentsController < ApplicationController

    def create
        byebug
        new_doc = @current_user.subject.find_by(serial_number: serial_number).create!(doc_params)
        render json: new_doc, status: :created
    end

    private

    def doc_params
        params.require(:document).permit( :name, :description, :pdf_file )
    end
end
