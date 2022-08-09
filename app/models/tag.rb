class Tag < ApplicationRecord
    belongs_to :owner
    belongs_to :dog
end
