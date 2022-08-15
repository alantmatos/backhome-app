class OwnerSerializer < ActiveModel::Serializer
  attributes :id, :name, :phone, :e_mail, :city_state, :img_url

  has_many :dogs
end
