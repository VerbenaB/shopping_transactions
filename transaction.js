class Transaction {
    constructor(amount, date, merchant) {
        this.amount = amount;
        this.date = date;
        this.merchant = merchant;
    }

    formatted() {
        return this.amount.toLocaleString('gb-GB', {
          style: 'currency',
          currency: 'GBP',
        });
      }

    }

    
module.exports = Transaction;


