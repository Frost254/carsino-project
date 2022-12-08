class CarSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :description
  belongs_to :user
end
