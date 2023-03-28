class RemoveTypeFromProjects < ActiveRecord::Migration[7.0]
  def change
    remove_column :projects, :type, :string
    add_column :projects, :category, :string
  end
end
