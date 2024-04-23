class Document < ApplicationRecord
  belongs_to :subject
  has_one_attached :pdf_file
  
  def extract_text_from_pdf
    if pdf_file.attached?
      pdf_path = Rails.application.routes.url_helpers.rails_blob_path(pdf_file, only_path: true)
      
      text = `pdftotext #{pdf_path} -`
      return text
    else
      return nil
    end
  end
end
