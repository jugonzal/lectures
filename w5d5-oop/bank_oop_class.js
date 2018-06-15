/* setup */

class Account {

  constructor(owner) {
    this.owner = owner;
    this._balance = 0;
    this.transactions = [];
    this.dontforget = true; // i did forget
  }

  deposit(amount) {
    this._balance += amount;
    this.transactions.push(`DEPOSIT+ ${amount}`)
  }

  withdraw(amount) {
    this._balance -= amount;
    this.transactions.push(`WIT- ${amount}`)
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
    if (this.dontforget)    
      console.log(`${this.owner}: $${this.balance}`);
    for(let transaction of this.transactions) {
      console.log("\t"+transaction);
    }
    console.log();
  }
}

class SavingsAccount extends Account {

  withdraw(amount) {
    if(this._balance - amount > 0) {
      super.withdraw(amount);
    } else {
      this.transactions.push(`W- ${amount} X`);
    }
  }
}

class ProAccount extends SavingsAccount {

  constructor(owner, kick) {
    super(owner)
    this.kick = kick
  }

  withdraw(amount) {
    super.withdraw(amount);
    if (this._balance >= 1000) {
      super.deposit(this.kick);
    }
  }

}

/* program */

let accountABC = new ProAccount("Juan", 20);

accountABC.deposit(1500);
accountABC.withdraw(100);
accountABC.withdraw(500);
accountABC.withdraw(1000);
// accountABC._balance = 1000000
accountABC.log();
console.log('From getter: ',accountABC.balance);
// accountABC._balance = 3000;``
// console.log('From attribute: ',accountABC._balance);



