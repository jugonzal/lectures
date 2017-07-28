/* setup */

class Account {
  constructor(owner) {
    this.owner = owner;
    this._balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    this._balance += amount;
    this.transactions.push(`D+ ${amount}`)
  }

  withdraw(amount) {
    this._balance -= amount;
    this.transactions.push(`W- ${amount}`)
  }

  get balance() {
    return this._balance;
  }

  log() {
    console.log(`${this.owner}: $${this.balance}`);
    for(let transaction of this.transactions) {
      console.log("\t"+transaction);
    }
    console.log();
  }
}

class SavingsAccount extends Account {

  withdraw(amount) {
    if(this.balance - amount > 0) {
      super.withdraw(amount);
    } else {
      this.transactions.push(`W- ${amount} X`);
    }
  }
}

class CoolAccount extends SavingsAccount {

  constructor (owner, kick) {
    super(owner)
    this.kick = kick
  }

  deposit(amount) {
    super.deposit(amount)
    super.deposit(this.kick)
  }

}



/* program */

let accountABC = new CoolAccount("Juan",5);
accountABC.deposit(500);
accountABC.withdraw(100);
accountABC.withdraw(1000);
accountABC.log();
// accountABC.balance = 5000;
// accountABC._balance = 5000;
console.log("Please confirm balance ",accountABC.balance);




