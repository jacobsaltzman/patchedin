class CreateContributions < ActiveRecord::Migration[7.0]
  def change
    create_table :contributions do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :task, null: false, foreign_key: true
      t.string :type
      t.string :report

      t.timestamps
    end
  end
end
