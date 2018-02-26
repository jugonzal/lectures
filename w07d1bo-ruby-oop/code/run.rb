# require_relative("./strictaccount.rb")
require_relative("./megaaccount.rb")

juanAccount = MegaAccount.new("Juan")

# joseAccount = MegaAccount.new("Jose")




juanAccount.deposit(500)
juanAccount.withdraw(300)
juanAccount.withdraw(400)
# joseAccount.deposit(300)
# joseAccount.withdraw(250)
puts juanAccount.log
puts juanAccount.balance
# puts joseAccount.balance 

# puts joseAccount.log

# joseAccount.withdraw(100)
# puts joseAccount.log
