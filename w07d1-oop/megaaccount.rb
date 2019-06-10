require_relative("./account.rb")

class MegaAccount < Account 

  attr_reader :rewards

  def initialize(name)
    super(name)
    @rewards = 0
  end

  def withdraw(amount)
    super(amount)
    @rewards += amount * 0.1
  end

  def useReward(amount)
    if amount < @rewards
      @rewards -= amount
      puts "Used #{amount} in rewards"
    end
  end
end

