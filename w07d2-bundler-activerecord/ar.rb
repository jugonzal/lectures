require 'active_record'

ActiveRecord::Base.logger = ActiveSupport::Logger.new(STDOUT)

ActiveRecord::Base.establish_connection(
  adapter: 'postgresql',
  host: '127.0.0.1',
  username: 'vagrant',
  password: 'vagrant',
  database: 'w7d2'
)


class Album < ActiveRecord::Base

end

a1 = Album.first
a2 = Album.find_by(year: 2005)
a3 = Album.new
a3.title = "Never heard of this before"
a3.year = 2019
a3.save

puts a1.title
a1.update(title: 'Some amazing album name')
a1.title = "and another changed title"
a1.year = 2019
a1.save
a3.title = a1.title
a3.save
puts a1.inspect
