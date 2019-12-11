/* setup */

class Account {

  constructor(owner) {
    this.owner = owner;
    this._balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    this._balance += amount;
    this.transactions.push(`DEPOSIT+ ${amount}`)
  }

  withdraw(amount) {
    this._balance -= amount;
    this.transactions.push(`WITHDRAW- ${amount}`)
  }

  get balance() {
    this.transactions.push(`BALANCE ${this._balance} `);
    return this._balance;
  }

  // set balance(value) {
  //   this._balance = value ;
  //   this.transactions.push(`RESET ${value}`)
  //   // this.hacked = true
  // }

  log() {
    console.log(`${this.owner}: `);
    for(let transaction of this.transactions) {
      console.log("\t"+transaction);
    }
    console.log("\t"+`$${this.balance}`);
  }
}

class SavingsAccount extends Account {

  withdraw(amount) {
    if(this._balance - amount > 0) {
      super.withdraw(amount);
    } else {
      this.transactions.push(`NOT- ${amount} X`);
    }
  }
}

class ChequingAccount extends SavingsAccount {

  constructor(owner, fee) {
    super(owner)
    this._fee = fee
  }

  withdraw(amount) {
    if (this._balance >= amount+this._fee) {
      super.withdraw(amount);
      super.withdraw(this._fee);
    }
  }

}

/* program */

let accountABC = new ChequingAccount("Bob",3.5);
let accountDEF = new Account("Alice");

accountABC.deposit(1500);
accountABC.withdraw(100);
accountABC.withdraw(500);
accountABC.withdraw(1000);
accountABC.log();
// console.log("getter: ",accountABC.balance)
// console.log("_balance: ",++accountABC._balance)












