class Account

  attr_reader :balance

  def initialize(person)
    @owner = person
    @balance = 0
    @transactions = []
  end

  def deposit(amount)
    @balance = @balance + amount
    @transactions.push("D $ #{amount}")
  end

  def withdraw(amount)
    @balance = @balance - amount
    @transactions.push("W $ #{amount}")
  end

  def log
    "#{@owner} acount balance is $ #{@balance} \n details activity #{@transactions}"
  end

end
