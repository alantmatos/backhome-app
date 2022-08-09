class CreateDogs < ActiveRecord::Migration[7.0]
  def change
    create_table :dogs do |t|
      t.string :name
      t.string :favorite_food
      t.integer :age
      t.string :color
      t.string :breed
      t.integer :tag_number
      t.integer :safe_tag_number

      t.timestamps
    end
  end
end
