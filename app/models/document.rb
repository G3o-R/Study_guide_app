class Document < ApplicationRecord
  belongs_to :user
  # has_many :document_attachments
  has_one_attached :pdf_file

  # validates :name, presence: true

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
