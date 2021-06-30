const Account = function (name) {
  this.name = name;
  this.transactions = [];
}

Account.prototype.addTransaction = function (transaction) {
  this.transactions.push(transaction);
}

Account.prototype.transactionsByMerchantName = function (merchantName) {
  const results = [];
  for (const transaction of this.transactions) {
    if (transaction.merchant.name === merchantName) {
      results.push(transaction);
    }
  }
  return results;
}

Account.prototype.transactionsByTagName = function (tagName) {
  const results = [];
  for (const transaction of this.transactions) {
    if (transaction.merchant.tag.name === tagName) {
      results.push(transaction);
    }
  }
  return results;
}

Account.prototype.transactionsBetween = function (lower, upper) {
  const results = [];
  for (const transaction of this.transactions) {
    if (transaction.amount >= lower
        && transaction.amount <= upper) {
      results.push(transaction);
    }
  }
  return results;
}

// EXTENSION

Account.prototype.transactionsThisMonth = function () {
  const results = [];

  const now = Date.now();
  const today = new Date(now);
  const thisMonth = today.getMonth();

  for (const transaction of this.transactions) {
    if (transaction.date.getMonth() === thisMonth) {
      results.push(transaction);
    }
  }
  return results;
}

module.exports = Account;
