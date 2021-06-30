const Tag = require('./tag.js');
const Merchant = require('./merchant.js');
const Transaction = require('./transaction.js');
const Account = require('./account.js');

const groceries = new Tag('Groceries', 250);
const clothes = new Tag('Clothes', 100);
const eatingOut = new Tag('Eating Out', 50);

const tesco = new Merchant('Tesco', groceries);
const sainsburys = new Merchant('Sainsbury\'s', groceries);
const asos = new Merchant('ASOS', clothes);
const breadMeatsBread = new Merchant('Bread Meats Bread', eatingOut);
const nandos = new Merchant('Nando\'s', eatingOut);

// This is only necessary so that our solution is always current
const today = new Date(Date.now());

const yesterday = new Date(Date.now());
yesterday.setDate(today.getDate() - 1);

const lastWeek = new Date(Date.now());
lastWeek.setDate(today.getDate() - 7);

const lastMonth = new Date(Date.now());
lastMonth.setDate(today.getDate() - 31);

const transaction1 = new Transaction(10.21, today, tesco);
const transaction2 = new Transaction(5.03, yesterday, sainsburys);
const transaction3 = new Transaction(20.5, lastWeek, nandos);
const transaction4 = new Transaction(50, lastWeek, asos);
const transaction5 = new Transaction(119.99, lastMonth, asos);
const transaction6 = new Transaction(40.73, lastWeek, tesco);
const transaction7 = new Transaction(16.41, lastMonth, breadMeatsBread);
const transaction8 = new Transaction(7.50, yesterday, sainsburys);
const transaction9 = new Transaction(54.27, lastWeek, tesco);
const transaction10 = new Transaction(63.01, lastMonth, sainsburys);

// Check formatted amount
const transactions = [
  transaction1,
  transaction2,
  transaction3,
  transaction4,
  transaction5,
  transaction6,
  transaction7,
  transaction8,
  transaction9,
  transaction10,
]

for (const transaction of transactions) {
  console.log(transaction.formatted());
}

const account = new Account('CodeClan');

account.addTransaction(transaction1);
account.addTransaction(transaction2);
account.addTransaction(transaction3);
account.addTransaction(transaction4);
account.addTransaction(transaction5);
account.addTransaction(transaction6);
account.addTransaction(transaction7);
account.addTransaction(transaction8);
account.addTransaction(transaction9);
account.addTransaction(transaction10);



// Check accounts were added correctly
console.log('account', account);

// Check transactions by merchant name
const tescoTransactions = account.transactionsByMerchantName('Tesco');
console.log('tescoTransactions', tescoTransactions);

// Check transactions by tag name
const groceryTransactions = account.transactionsByTagName('Groceries');
console.log('groceryTransactions', groceryTransactions);

// Check transactions between amounts
const transactionsBetween5and10 = account.transactionsBetween(5, 10);
console.log('transactionsBetween5and10', transactionsBetween5and10);

// Check transactions this month
const transactionsThisMonth = account.transactionsThisMonth();
console.log('transactionsThisMonth', transactionsThisMonth);
