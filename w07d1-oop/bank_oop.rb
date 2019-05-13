require_relative("./megaaccount.rb")

juanAccount = SuperDuperMegaAccount.new("Juan")

juanAccount.deposit(500)
juanAccount.withdraw(300)

puts juanAccount.log

