require 'active_record'
require 'pry'
require 'faker'

require_relative './artist'
require_relative './album'
require_relative './track'
require_relative './tag'

ActiveRecord::Base.logger = ActiveSupport::Logger.new(STDOUT)

ActiveRecord::Base.establish_connection(
  adapter: 'postgresql',
  host: '127.0.0.1',
  username: 'vagrant',
  password: 'vagrant',
  database: 'w7d2'
)

ActiveRecord::Schema.define do
  create_table :artists, force: true do |t|
    t.string :name, null: false
    t.timestamps
  end

  create_table :albums, force: true do |t|
    t.string :title, null: false
    t.integer :year, null: false
    t.references :artist
    t.timestamps
  end

  create_table :tracks, force: true do |t|
    t.string :title, null: false
    t.integer :number, null: false
    t.references :album
    t.timestamps
  end

  create_table :tags, force: true do |t|
    t.string :name

    t.timestamps
  end

  create_join_table :artists, :tags, force: true

end

10.times do
  Artist.create! name: Faker::Simpsons.character
end

artist1 = Artist.first
artist2 = Artist.last

3.times do
  Album.create! title: Faker::Simpsons.location, year: rand(1990...2010), artist: artist1
end

4.times do
  Album.create! title: Faker::Music.album, year: rand(1950...2000), artist: artist2
end

Album.all.each do |album|
  rand(3...7).times do |i|
    Track.create! title: Faker::MichaelScott.quote, number: i, album: album
  end
end

10.times do
  Tag.create! name: Faker::GreekPhilosophers.name
end

all_artists = Artist.all
all_tags = Tag.all

20.times do
  artist = all_artists.sample
  tag = all_tags.sample

  artist.tags << tag
end

binding.pry
