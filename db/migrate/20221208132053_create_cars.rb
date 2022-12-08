class CreateCars < ActiveRecord::Migration[7.0]
  def change
    create_table :cars do |t|
      t.string :name
      t.string :image_url
      t.text :description
      t.integer :user_id
      t.timestamps
    end
  end
end
