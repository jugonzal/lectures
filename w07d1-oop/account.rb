class Account

  attr_accessor :owner
  # attr_reader :balance

  def initialize(name)
    @owner = name
    @balance = 0
    @txn = []
  end

  def deposit(amount)
    @balance += amount
    @txn.push("+ $ #{amount} Thank you!")
  end

  def balance()
    @balance + 10
  end

  def withdraw(amount)
    if amount < @balance
      @balance -= amount
      @txn.push("- $ #{amount}")
    else
      puts "Insufficient funds!"
    end
  end

  def log
    "#{@owner} acount balance is $ #{@balance} \n details activity #{@txn}"
  end

end
