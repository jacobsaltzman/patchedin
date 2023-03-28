class RemoveTypeFromContributions < ActiveRecord::Migration[7.0]
  def change
    remove_column :contributions, :type, :string
  end
end
