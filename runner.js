const Tag = require('./tag');
const Merchant = require('./merchant');
const Transaction = require('./transaction');
const Account = require('./account');

const food = new Tag("Food", 30);
const clothing = new Tag("clothing", 100);
const medicine = new Tag("medicine", 5);

const tesco = new Merchant("Tesco", food);
const waitrose = new Merchant("Waitrose", food);
const newlook = new Merchant("New Look", clothing);
const primark = new Merchant("Primark", clothing);
const superdrug = new Merchant("Superdrug", medicine);
const boots = new Merchant("Boots", medicine);

const today = new Date(Date.now());
const yesterday = new Date(Date.now());
yesterday.setDate(today.getDate() - 1);
const lastWeek = new Date(Date.now());
lastWeek.setDate(today.getDate() - 7);
const lastMonth = new Date(Date.now());
lastMonth.setDate(today.getDate() - 31);

const transaction1 = new Transaction(20, today, waitrose);
const transaction2 = new Transaction(10, today, tesco);
const transaction3 = new Transaction(25, yesterday, primark);
const transaction4 = new Transaction(25, today, newlook);
const transaction5 = new Transaction(50, lastMonth, primark);
const transaction6 = new Transaction(2, lastWeek, boots);
const transaction7 = new Transaction(3, lastMonth, superdrug);

const transactions = [
    transaction1,
    transaction2,
    transaction3,
    transaction4,
    transaction5,
    transaction6,
    transaction7,
  ]
  for (const transaction of transactions) {
    console.log(transaction.formatted());
  }

const account = new Account('TeamBanana');

account.addTransaction(transaction1);
account.addTransaction(transaction2);
account.addTransaction(transaction3);
account.addTransaction(transaction4);
account.addTransaction(transaction5);
account.addTransaction(transaction6);
account.addTransaction(transaction7);

const primarkTransactions = account.filteredByMerchantName("Primark");
console.log("These are your Pimark transactions", primarkTransactions);

