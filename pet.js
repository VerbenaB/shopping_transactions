// 1. Create a new file - pet.js
// 2. Create a Pet constructor
// 3. Assign values to the following properties in your Pet constructor via parameters:
// name
// species
// 4. Add an eat method to your Pet's prototype. This method should accept a food parameter and output a string containing the name property and the food that was eaten. For example: 'Scooby Doo ate a Scooby Snack'.


const Pet = function(name, species) {
    this.name = name;
    this.species = species;
}

Pet.prototype.eat = function(food) {
    console.log(`${this.name} ate a ${food}.`);
}

module.exports = Pet;


