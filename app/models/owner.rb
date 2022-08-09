class Owner < ApplicationRecord
    has_secure_password

    #validates :name, :e_mail, :password, presence: true
    #validates :e_mail, uniqueness: true

    has_many :tags
    has_many :dogs, through: :tags
end
