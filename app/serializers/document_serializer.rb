class DocumentSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :subject_id

  attribute :pdf_file do
    if object.pdf_file.attached?
      {
        url: Rails.application.routes.url_helpers.rails_blob_path(object.pdf_file, only_path: true)
      }
    else
      nil
    end
  end
end
