class AddColumnToCars < ActiveRecord::Migration[7.0]
  def change
    add_column :cars, :rating, :integer
  end
end
