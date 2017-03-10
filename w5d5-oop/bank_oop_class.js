/* setup */

class Account {
  constructor(owner) {
    this.owner = owner;
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    this.balance += amount;
    this.transactions.push(`D${amount}`)
  }

  withdraw(amount) {
    this.balance -= amount;
    this.transactions.push(`Withdraw ${amount}`)
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
      this.transactions.push(`W${amount}X`);
    }
  }
}

class AllFeesBankAccount extends SavingsAccount {
  constructor(owner, fees) {
    super(owner);
    this.fees = fees;
  }

  deposit(amount) {
    super.deposit(amount);
    this.balance -= amount * this.fees;
    this.transactions.push(`F${amount * this.fees}`)
  }

  withdraw(amount) {
    super.withdraw(amount + amount * this.fees);
  }

}


/* program */

let accountABC = new SavingsAccount("Bob");

accountABC.deposit(500);
accountABC.withdraw(100);
accountABC.withdraw(1000);

accountABC.log();


let accountAB = new AllFeesBankAccount("Juan", 0.05);

accountAB.deposit(500);
accountAB.withdraw(100);
accountAB.withdraw(1000);

accountAB.log();

