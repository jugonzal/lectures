require_relative("./megaaccount.rb")

juanAccount = MegaAccount.new("Juan")
joseAccount = MegaAccount.new("Jose")


juanAccount.deposit(500)
joseAccount.deposit(juanAccount.withdraw(300))

puts juanAccount.log

juanAccount.useReward(25)

puts juanAccount.rewards
