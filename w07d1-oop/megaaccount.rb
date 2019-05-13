require_relative("./account.rb")

class MegaAccount < Account 

  def initialize(name)
  	super(name)
  	@miles = 0
  end

  def deposit(amount)
    super(amount)
    @miles += amount * 0.1
    @txn.push("You have #{@miles} miles and #{@balance}!")
  end
end

class SuperDuperMegaAccount < MegaAccount

	def initialize(name)
		super(name)
	end

	def log
		super() + "Yes I am super duper"
	end
end