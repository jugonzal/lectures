## About OOP

Hi all, today we took a "big picture" approach to understand Object Oriented Programming.

We did this by comparing how we would implement a typical problem using Javascript vs Ruby. If all you want is the code
you can find the code for the [Bank in JS](https://github.com/jugonzal/lectures/blob/master/w07d1-oop/bank_functional.js) vs [Bank in Ruby](https://github.com/jugonzal/lectures/blob/master/w07d1-oop/bank_oop.rb)

During our exploration of how these two paradigms differ from each other these are the important things we learned:

- When writing in Javascript, "the functional way", data is free and typically moving through a funnel of many functions that will modify that data.
- In Ruby, which uses a proper OOP approach, data is always locked in classes, with each class having full and exclusive control of its data.
- The other big discovery we made while exploring OOP, is that _inheritance_ is the built-in software reuse mechanism. So planning how to distribute code among classes has more to do with how you plan that code to be reused at a later time.

It was nice to work on Ruby and discover its general properties:

- Classes are templates that need to be instantiated (`new`)
- Each instance of a class will have its own *state*, typically all the variables with a `@` prefix
- Methods are the only way you can interact with an object, and doing so can be thought as *sending a message to an object*.
- The objective of methods is to manage the lifecycle of *state*. 
- You can reuse a class by inheriting from another.  Look at the [MegaAccount](https://github.com/jugonzal/lectures/blob/master/w07d1-oop/megaaccount.rb) for an example
- Software maintenance becomes a lot more organized when each class is responsible for its methods.
 

## Some details about RUBY 

### Classes

we can define a new class just by doing:

```ruby
    class Foo
    end
```

we can create "instances" of a class by doing:

```ruby
    f = Foo.new
```

an empty class is not useful, we want to use it to define methods and variables that all "instances" of that class have

a special method "initialize" is called whenever we create a instance

```ruby
    ie. Foo.new()
```

it is optional (but we almost always use it)

initialize can take arguments (which we pass to .new)

we use initialize most often to set the starting values of instance variables

instance variables are variables that belong to each instance

instance variables can be accessed by other methods but CANNOT be directly access from "outside" the object

```ruby
  class BankAccount
    def initialize(start_balance)
      @balance = start_balance
    end

    def balance
      @balance
    end
  end
```

### Attributes

it's annoying to have to write the following for every instance variable we want to by able to "read" or "write" from the outside:

```ruby
   # reader
   def foo
    @foo
   end

   # writer
   def foo= (foo)
    @foo = foo
   end
```

ruby has shortcuts:

     attr_reader :foo    # creates the .foo 'reader' method above

     attr_writer :foo    # creates the .foo= 'writer' method above

     attr_accessor :foo   # creates both methods


it becomes very useful when you need to do it for many methods:
    
```ruby
       attr_accessor :name, :id, :email, :address
```

### Inheritance

its useful to be able to create new classes that "inherit" all the methods from another class, and make some small changes
    ex. BankAccount and SavingsAccount

we do this with the following syntax:

```ruby
    class SavingsAccount < BankAccount
    end
```

when we do this, it's useful for the new class to be able to overwrite the methods in its "superclass"/"parent"

if we define a method in the "subclass"/"child" it will overwrite the parent's methods

```ruby     
    class BankAccount
      def some_method
        5
      end
    end

    class SavingsAccount < BankAccount
       def some_method
         10
       end
     end
```

...but it's also useful to be able to refer to the method we're overwriting, and ruby let's us do that by the magic method "super"


### Class Variables

```ruby
  class Foo

     @@bar = 0

     # instance methods can access class variables
     # but there only one class variable!
     # whereas instance variables exist for EACH instance

     def some_instance_method()
       @@bar += 1
     end

  end
```

### Class Methods

```ruby
  class Foo

     def self.foobar
       # ....
     end

  end

  Foo.foobar()
```

### Private Instance methods

instance methods are "public" by default
      ie. they can be accessed "outside" the object

it is possible to make instance methods private
      (so they cannot be accessed outside the instance)

this is useful in indicating that certain methods are "implementation details" only

you do it by putting "private" above a method, ex.

```ruby
        def Foo
            def some_public_method
              some_private_method(5)
            end

            private

            def some_private_method(n)
              # ...
            end
        end

        f = Foo.new

        f.some_public_method    # works

        f.some_private_method(10)  # not allowed, b/c private!
```

once you use "private" all methods below it become private


### Namespaces

problem:

    - projects often use many libraries (which include multiple classes defined by someone else)
    - classes are globals
    -> may run into a situation where two libraries define the same class
         (one will overwrite or randomly extend the other ====> bad)

solution:

    - when defining classes, can "nest" them inside of a module

    instead of just:

```ruby    
      class Account
       ...
      end

      a = Account.new
```

    we write:

```ruby
      module Bank
        class Account
          ...
        end
      end

      a = Bank::Account.new
```

### Multi-Inheritance

inheritance is sometimes not a good food for your problem  
  
     ex. bank has various types of account types it offers, and each can have a combination of "aspects", like: gives interest or not, charges per transaction or not, waves fees when a certain minimum is hit, etc.

may not be able to create an inheritance tree that works
       (end up having classes like AccountInterestGivingAndPerTransaction  AccountWaveFeesAndInterestGiving ...)

alternative: modules

    modules can have instance variables and methods, and they can be "included" by classes, but, they themselves cannot be instantiated

```ruby
     module Foo
       def bar(value)
         @xyz = value
       end
     end

     class Something
       include Foo
     end

    # or for example
      class BusinessAccount
        include InterestGiving
        include OverdraftProtected
        include TransactionFeeCharing
        include TransactionFeeWaivingWithMinimumBalance
      end
```
