class OwnerSerializer < ActiveModel::Serializer
  attributes :id, :name, :phone, :e_mail, :city_state

  has_many :dogs
end
