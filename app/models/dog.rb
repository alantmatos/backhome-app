class Dog < ApplicationRecord
    has_one :tag
    has_one :owner, through: :tag
end
