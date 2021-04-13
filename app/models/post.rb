class Post < ApplicationRecord
  belongs_to :user
  has_one_attached :image
  has_and_belongs_to_many :tags

  validates_presence_of :title
  validates_presence_of :description
end
