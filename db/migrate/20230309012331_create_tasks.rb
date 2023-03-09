class CreateTasks < ActiveRecord::Migration[7.0]
  def change
    create_table :tasks do |t|
      t.belongs_to :project, null: false, foreign_key: true
      t.string :name
      t.string :description
      t.integer :difficulty
      t.boolean :completed, default: false

      t.timestamps
    end
  end
end
