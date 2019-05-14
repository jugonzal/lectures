class Artist < ActiveRecord::Base
  has_many :albums
  has_and_belongs_to_many :tags
end
