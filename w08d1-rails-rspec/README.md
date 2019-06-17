# Testing Rails applications using RSpec

We took a quick tour on using RSpec with Rails, taking tips from [this excellent article](https://www.sitepoint.com/learn-the-first-best-practices-for-rails-and-rspec/). Sadly the article is a bit old, so here's a quick summary of what you need to do:

Add `rspec-rails` gem to `:test` and `:development` groups on your `Gemfile`:

```ruby
group :development, :test do
  # ...more stuff here
  gem 'rspec-rails', '~> 3.7'
end
```

Add `factory_bot_rails`, `faker`, `shoulda-matchers` and `database_cleaner` to the `:test` group:

```ruby
group :test do
  # ...more stuff here
  gem 'factory_bot_rails'
  gem 'shoulda-matchers'
  gem 'database_cleaner'
  gem 'faker'
end
```

You should run `bundle install` at this point!

Next we'll use the Rspec generator to create the basic config files:

```sh
bin/rails generate rspec:install
```

This adds the following files which are used for configuration:

* `.rspec`
* `spec/spec_helper.rb`
* `spec/rails_helper.rb`

Optionally, you can also run this to add a `bin/rspec` command to your Rails app. If you don't do this, you'll have to run rspec with `bundle exec rspec`:

```sh
bundle binstubs rspec-core
```

Now we'll configure `shoulda-matchers`. Add this at the end of  `/spec/rails_helper.rb`:

```ruby
require 'shoulda/matchers'

Shoulda::Matchers.configure do |config|
  config.integrate do |with|
    with.test_framework :rspec
    with.library :rails
  end
end
```

Configure `factory_bot_rails` and `database_cleaner`. Make sure the top of your `/spec/spec_helper.rb` file includes the following lines:

```ruby
require 'database_cleaner'
require 'factory_bot_rails'

RSpec.configure do |config|

  config.before(:suite) do
    DatabaseCleaner.strategy = :transaction
    DatabaseCleaner.clean_with(:truncation)
  end

  config.around(:each) do |example|
    DatabaseCleaner.cleaning do
      example.run
    end
  end

  config.include FactoryBot::Syntax::Methods

  # ... lots of stuff here
end
```

These steps are necessary because RSpec is **not** a default Rails component, even though it's the most popular testing solution for Rails (more on this below).

## Code discussed in class

The app we've used in class (more of a skeleton, really) can be found inside the [`/code`](https://github.com/jugonzal/lectures/tree/master/w08d1-rails-rspec/code) folder. Be sure to check `/code/spec/models` in particular.

## Test steps
In general a test case will have the following steps:

* Set up: Create an environment that allows you to test a condition in the program
* Perform checks: Check that the results came up as expected
* Clean up: Each test case must clean up all the data created in the setup phase. This is so that test cases don't interfere with each other.

Try running one of the tests with the following command:

```shell
rspec spec/models/bicycle_spec.rb
```

## What to test
Writing good unit tests is an art. You want to make sure that your tests cover most of your public methods - especially the ones that have tricky logic.

Tips for testing:

* Test edge cases. pick values that are right at the boundary.
* Test are supposed to be easy to read. be careful how you DRY up your code. you need to strike a good balance between readability and DRY.
* Don't use random data in your setup stage. tests need to be reproducible, meaning if you run the test twice without changing your application code, you should get the same result.
* Test are supposed to be easy to maintain, meaning easy to update when your requirements change.
* don't over test. when unit testing you want to test that a specific method works. no need to check that another method used by your method under test works.

## RSpec

RSpec is a popular test framework in Ruby. MiniTest is the second most popular framework and is included in the Ruby standard library (i.e. comes with ruby. no need to install a gem.)

The reason RSpec is so popular is that the data validators are quite expressive. Here is an example.

```ruby
# With MiniTest

student = Student.new
assert student.student_number != nil

# With RSpec

student = Student.new
expect(student.student_number).not_to eql nil
```

We also talked about how to use:
* `describe` blocks to group test cases.
  * `context` does the exact same thing.
* `before` / `before :each` blocks to write code that needs to be used to create the necessary test conditions.

## FactoryBot

[FactoryBot](http://www.rubydoc.info/gems/factory_bot/file/GETTING_STARTED.md) is a gem that allows you to create customizable test assets with different traits. Be sure to check out [`/code/spec/factories`](https://github.com/jugonzal/lectures/tree/master/w08d1-rails-rspec/code/spec/factories) to see how to define them and [`bicycle_spec.rb`](https://github.com/jugonzal/lectures/tree/master/w08d1-rails-rspec/code/spec/models/bicycle_spec.rb) to see it in use.
