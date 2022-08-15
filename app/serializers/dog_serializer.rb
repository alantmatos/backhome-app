class DogSerializer < ActiveModel::Serializer
  attributes :id, :name, :favorite_food, :age, :color, :breed, :tag_number, :safe_tag_number, :img_url

  has_one :owner
end
