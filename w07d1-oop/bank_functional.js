const immutable = require('./immutable');

function createAccount(owner) {
  return { owner: owner,
           balance: 0,
           transactions: [] };
}

function deposit(account, amount) {
  // account.balance += amount;
  return immutable.set(account,
            { balance: account.balance + amount,
              transactions: immutable.conj(account.transactions, `D${amount}`) });
}

function withdraw(account, amount) {
  // if (account.balance > amount)
    return immutable.set(account,
      { balance: account.balance - amount,
        transactions: immutable.conj(account.transactions, `W${amount}`) });
}

function toString(account) {
  let out = `${account.owner}: $${account.balance}`;
  return out + "\n\t"+account.transactions.join("\n\t") + "\n";
}

/* program */

let accountABC = createAccount("Juan");

accountABC = deposit(accountABC, 1500);

accountABC = withdraw(accountABC, 2000);

// accountABC.balance =100000
console.log(accountABC.balance)

console.log(toString(accountABC));


/* or... */

console.log(
  toString(
    withdraw(
      withdraw(
        deposit(
          createAccount("Bob"), 
          1500), 
        400), 
      200)
    )
  )

// console.log(toString(bobsAccount))


/* or... */

// thread(createSavingsAccount("Bob"),
//        [deposit, 500],
//        [withdraw, 100],
//        [withdraw, 1000],
//        [toString],
//        [console.log])
