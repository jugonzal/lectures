require_relative("./strictaccount.rb")

class MegaAccount < StrictAccount 
  def deposit(amount)
    super(amount)
    super(amount*0.1)
    @transactions.push("Your reward")
  end
end
