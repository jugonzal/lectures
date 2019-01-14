
## How does it compare with JS ?

- OOP vs. (mostly) functional
  - Everything is an object and every is based on a class
  - Classes can inherit code from other classes

- Methods & blocks vs. functions & callbacks
  - Methods are the same as functions, but Ruby doesn't allow you to store methods in variables
  - Every time you write the name of a method **you're actually calling it and getting its return value**. In other words, there's no difference between `do_something` and `do_something()` like in Javascript - the method always executes!
  - Whenever you need to pass code to a method, you use **blocks**, which are distant cousins to callbacks.

- Concurrency Model
  - I/O blocking and general lack of callbacks
  - Javascript doesn't wait, but Ruby does.
  - You can actually write something like `body = HTTP.get('http://wikipedia.org/kittens')` and it will work.

- Scoping
  - Block-scoping vs. function scoping: local variables in ruby are scoped to each **block** instead of each **method**.
  - You also have instance variables (identified by an `@` symbol at the beginning), class variables (`@@`, accessible to all instances of a class) and global variables (`$` at the beginning).
  - All variables without _sygils_ (the symbols at the beginning) are **local by default**.

- Ruby gems vs. npm packages (a.k.a. There's a gem for that™)

## Basic techniques

```ruby
list = [1, 2, 3, 4, 5];

list.each do |num|
  puts num * 2
end

# filter
new_list = list.select do |num|
  num > 3
end

puts new_list

# find first that matches(evals to true)
just_one = list.detect do |num|
  num > 3
end

puts just_one
```
