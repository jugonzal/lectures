# require_relative("./account.rb")
require_relative("./megaaccount.rb")

juanAccount = MegaAccount.new("Juan")
# joseAccount = Account.new("Jose")

juanAccount.deposit(500)
juanAccount.withdraw(300)
# joseAccount.deposit(300)
# joseAccount.withdraw(250)
puts juanAccount.balance
puts juanAccount.log
# puts joseAccount.balance 

# puts joseAccount.log

# joseAccount.withdraw(100)
# puts joseAccount.log
