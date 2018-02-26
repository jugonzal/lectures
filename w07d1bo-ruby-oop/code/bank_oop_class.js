/* setup */

class Account {
  constructor(owner) {
    this.owner = owner;
    this._balance = 0;
    this.transactions = [];
    this.dontforget = true;
  }

  deposit(amount) {
    this._balance += amount;
    this.transactions.push(`DEP+ ${amount}`)
  }

  withdraw(amount) {
    this._balance -= amount;
    this.transactions.push(`WIT- ${amount}`)
  }

  get balance() {
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
    if(this.balance - amount > 0) {
      super.withdraw(amount);
    } else {
      this.transactions.push(`W- ${amount} X`);
    }
  }
}

class RESPAccount extends SavingsAccount {
  constructor(owner, matching) {
    super(owner)
    this._matching = matching
  }

  // prize() {
  //   super.deposit(50)
  // }

  deposit(amount) {
    super.deposit(amount)
    super.deposit(amount<this._matching?amount:this._matching)
  }
}

/* program */

let accountABC = new RESPAccount("Juan",100);
// let accountDEF = new RESPAccount("Izzy",100);


accountABC.deposit(600);
accountABC.withdraw(100);
accountABC.withdraw(1000);
// // accountABC.prize();
accountABC.log();
accountABC.balance = 750;
accountABC._balance = 750
console.log('From getter: ',accountABC.balance);
// accountDEF.balance = 250;
// accountDEF.deposit(300)
// accountDEF.log();
// accountDEF.prize();
// console.log(accountDEF.balance)

// accountDEF._balance = 1350;
// accountDEF.log();

// console.log("Your fees ", accountABC.fees)
// accountABC.balance = 5000;
// accountABC.hacked = true;
// console.log(accountABC)
// accountABC._balance = 5000;
// console.log("Please confirm balance ",accountABC.balance);

// accountLuke.deposit(200)
// accountLuke.withdraw(80)
// accountLuke.log()



