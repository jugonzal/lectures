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

class SparkAccount extends SavingsAccount {

  constructor(owner) {
    super(owner);
    super.deposit(100);
    // this.deposit(100); // this will call the new version of deposit
  }

  deposit(amount) {
    super.deposit(amount);
    super.deposit(amount * 0.1);
  }

  endOfMonth () {
    if (super.balance > 0) {
      super.deposit(5);
    }
  }
}

/* program */

let accountABC = new SparkAccount("Bobby");
accountABC.log();

accountABC.deposit(20);
accountABC.withdraw(12);
accountABC.deposit(10);
accountABC.withdraw(399);
accountABC.endOfMonth();
accountABC.log();

console.log("Show me the balance? ",++accountABC._balance);



