class AddImgUrlToOwners < ActiveRecord::Migration[7.0]
  def change
    add_column :owners, :img_url, :string
  end
end
