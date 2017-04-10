require_relative("./account.rb")

class MegaAccount < Account 
  def deposit(amount)
    super(amount)
    super(amount*0.2)
    @txn.push("Your reward")
  end
end
