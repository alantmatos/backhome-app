class CreateTags < ActiveRecord::Migration[7.0]
  def change
    create_table :tags do |t|
      t.string :owner_id
      t.string :dog_id

      t.timestamps
    end
  end
end
