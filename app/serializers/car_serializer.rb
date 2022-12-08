class CarSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :description, :rating
  belongs_to :user
end
