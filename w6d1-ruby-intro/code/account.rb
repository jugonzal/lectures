class Account

  # attr_accessor :owner

  def initialize(name)
    @owner = name
    @balance = 0
    @txn = []
  end

  def deposit(amount)
    if @txn == []
      @balance += amount * 0.9
    else
      @balance += amount
    end
    @txn.push("+ $ #{amount}")
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
