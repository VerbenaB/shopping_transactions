const Pet = require('./pet');
const Person = require('./person');

const scrappy = new Pet("Scrappy Doo", "dog");
const shaggy = new Person("Shaggy", 27, scrappy);
const velma = new Person("Velma", 18, scrappy);


shaggy.feedPet('banana');