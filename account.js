class Account {
    constructor(name) {
        this.name = name;
        this.transactions = [];
    }
    addTransaction(transaction) {
        this.transactions.push(transaction);
    }

    filteredByMerchantName(merchantName) {
        for (let transaction of this.transactions) {
            if (this.merchant.name === merchantName) {
                this.transaction.push;
                console.log(`These are the transactions filtered by ${merchantName}`);
             
            }
    
        }
    }

}

module.exports = Account;