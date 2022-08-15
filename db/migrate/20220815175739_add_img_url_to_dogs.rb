class AddImgUrlToDogs < ActiveRecord::Migration[7.0]
  def change
    add_column :dogs, :img_url, :string
  end
end
