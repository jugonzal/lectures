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
    return this._balance - 2;
  }
  set balance(value) {
    this._balance = value ;
    // this.hacked = true
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

class RRSPAccount extends SavingsAccount {
  constructor(owner, matching) {
    super(owner)
    this._matching = matching
  }

  deposit(amount) {
    super.deposit(amount)
    super.deposit(amount<this._matching?amount:this._matching)
  }
}

/* program */

let accountABC = new RRSPAccount("Juan",500);
let accountLuke = new RRSPAccount("Luke",50);

accountABC.deposit(600);
accountABC.withdraw(100);
accountABC.withdraw(1000);
accountABC.log();
// console.log("Your fees ", accountABC.fees)
// accountABC.balance = 5000;
// accountABC.hacked = true;
console.log(accountABC)
// accountABC._balance = 5000;
console.log("Please confirm balance ",accountABC.balance);

accountLuke.deposit(200)
accountLuke.withdraw(80)
accountLuke.log()



