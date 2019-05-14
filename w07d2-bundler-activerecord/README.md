# Gems and Bundler

Bundler is used to manage the gems used in a Ruby project. It references a configuration file called `Gemfile`, which works similarly to the `dependencies` part of `package.json`.

Anytime you see a `Gemfile` in a project, you should run `bundle install`. Bundler will then auto-generate a `Gemfile.lock` file, which contains information on all gem dependencies (similar to the `node_modules` directory). You should **not** edit `Gemfile.lock` manually; it will be generated automatically every time `bundle install` or `bundle update` is executed.

Once this is in place, use the `bundle exec` command to run any ruby files that depend on the gems listed inside your `Gemfile`.

# Intro to ActiveRecord

_ActiveRecord_ is a Ruby gem that implements the _active record_ pattern, providing ways to talk to a database using object oriented programming. It's a very popular gem that's included by default in Ruby on Rails, and it's one of the main reasons for its success.

The documentation on ActiveRecord (the gem) is extensive and excellent. Be sure to check it out:

* Querying: http://guides.rubyonrails.org/active_record_querying.html
* Validations: http://guides.rubyonrails.org/active_record_validations.html
* Associations: http://guides.rubyonrails.org/association_basics.html

## Topics:

* Active Record as an ORM
    - Setting up models
        + `CREATE TABLE things...`
        + `class Thing < ActiveRecord::Base`
* CRUD Operations
    - CREATE
        + `instance = Model.new`
        + `instance.save`
        + `Model.create`
    - READ
        + `Model.find`
        + `Model.find_by`
        + `Model.where`
        + `Model.first` / `Model.last`
        + `find` vs `find_by` vs `where`
    - UPDATE
        + change object + `save`
        + `instance.update`
        + `Model.where(...).update_all(...)`
    - DELETE
        + `instance.destroy`
        + `Model.where(...).destroy_all`
    - Quick note on bangs - `save` vs. `save!`
        + Normal methods - `save`, `create` etc. - fail silently
        + "Banged" methods - `save!`, `create!` etc. - raise exceptions on failure
* Method Chaining
    - `Model.where(...).where.not(...).order(...)...`
* Brief intro to Validations
    - `validates :field, <conditions>`
* Associations
    - `has_many`
    - `belongs_to`

## Code

### [`setup.rb`](https://github.com/jugonzal/lectures/tree/master/w07d2-bundler-activerecord/setup.rb)

In the `setup.rb` file we load up all of our app dependencies (`pry`, `faker`, `active_record`) and setup the connection to the database. This file also sets up the schema used for our database using `ActiveRecord::Schema.define`.

### `artist.rb`, `album.rb`, `track.rb`, `tag.rb`

These files contain the model definitions for our `ActiveRecord` models. Each of these classes inherit from the `ActiveRecord::Base` class which provides all of the ActiveRecord tools such as `Model.all`, `Model.find`, `Model.where` among many others that help us fetch data from the database.

These classes also define the relationships between each other. For example, in the `Artist` class, we can define that our artists have a many-to-one relationship by using the `has_many :albums` in the `Artist` class and `belongs_to :artist` in the `Album` class.

## How to run the example

1.  Clone the git repo.
2.  `cd` into the folder
3.  Run `bundle install` to fetch all the gems
4.  Make sure you have the correct credentials to the database
5.  Make sure the database exists in postgres, if it doesn't you can create it in `psql` by using: `CREATE DATABASE w7d2;`
6.  Run `ruby setup.rb` to run the example.
