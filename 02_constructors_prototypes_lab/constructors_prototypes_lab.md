# Constructors & Prototypes Lab

**Lab Duration: 90 minutes**

## Brief

In this lab you will practice using constructors and prototypes by creating a spending tracker program. Unfortunately, we haven't learned how to TDD in JavaScript yet, so we'll have to make do with `console.log()` to test whether things are working or not.

Your spending tracker should have the following classes:

- Account
- Transaction
- Merchant
- Tag

We recommend that you also use a `runner.js` file to create objects and test that your code works.

A `Tag` should have a name and a monthly budget. `Tag`s are used for grouping similar transactions.

A `Merchant` should have a name and a `Tag`. Tesco and Sainsbury's might belong to the "groceries" tag, for example.

A `Transaction` should have an amount, a date and a `Merchant`. You can use either a simple string or a `Date` object for the date. The extension will require you to use a `Date` object.

An `Account` should have an array of `Transaction`s.

## Task

### MVP

1. Create a constructor function for the `Tag` class. A `Tag` should have a `name` and a `monthlyBudget`.

2. Create a constructor for the `Merchant` class. A `Merchant` should have a name and a `Tag`.

3. Create a constructor for the `Transaction` class. A `Transaction` should have an amount, a date and a merchant. You can use either a simple string or a `Date` object for the date. The extension will require you to use a `Date` object.

4. A `Transaction` should have a method to output the amount formatted as currency. For example, the amount 500 would be output as "£500.00". JavaScript has a built-in method that may help with this, or you may wish to do it manually.

5. Create a constructor for the `Account` class. An `Account` should have a name and an array of transactions that is initially empty.

6. An `Account` should be able to add a new transaction to its array of `Transaction` objects.

7. An `Account` should be able to output an array of `Transaction`s that match a particular `Merchant` name.

8. An `Account` should be able to output an array of `Transaction`s that match a particular `Tag` name.

9. An `Account` should be able to output an array of `Transaction`s that are between a minimum and maximum amount. `account.transactionsBetween(5, 10)` would return all `Transaction`s with a value between 5 and 10, for example.

### Extension

10. An `Account` should be able to output an array of all `Transaction`s which took place this month. You will need to use a `Date` object for the date property of `Transaction`s.
