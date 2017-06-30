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

// Every time money is involved the customer WINS.
class YouWinAccount extends Account {
  constructor(amount, kick) {
    super(amount);
    this._kick = kick;
  }

  deposit(amount) {
    super.deposit (amount);
    // super.deposit (amount*0.1);
    this._balance += amount * this._kick;
    this.transactions.push(`D+ ${amount * this._kick} You Win.  Go buy something nice today.`)

  }

}

/* program */

let accountABC = new YouWinAccount("Juan",0.2);
accountABC.deposit(100);
// accountABC.withdraw(12);
accountABC.log();
// accountABC.balance += 20;
accountABC._balance += 20;
console.log("Please confirm balance ",accountABC.balance);




