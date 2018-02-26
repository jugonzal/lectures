require_relative("./bank.rb")

class StrictAccount < Account 
  def withdraw(amount)
    if amount < @balance
      super(amount)
    else
      puts "Insufficient funds!"
    end
  end
end
