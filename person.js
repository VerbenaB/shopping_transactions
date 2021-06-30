// Creating objects in JS

// const person = {};
// person.name = "Velma";
// person.age = 27;
// person.sayHello = function() {
//     console.log("Hello")
// }

// const person = {
//     isHuman: false,
//     printIntroduction: function() {
//         console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`)
//     }
// }
// person.printIntroduction();

// const me = Object.create(person);
// me.name = "Matt";
// me.isHuman = true;
// me.printIntroduction();

// Constructor function
// const Person = function (name, age, pet) {
//  this.name = name;
//  this.age = age;
//  this.pet = pet;
// }

// Person.prototype.greet = function() {
//     console.log(`My name is ${this.name}. I am ${this.age} years old`);
// }

// Person.prototype.feedPet = function(food) {
//    console.log(`${this.name} fed ${this.pet.name}`)
//    this.pet.eat(food);
// }

class Person {

    constructor(name, age, pet) {
        this.name = name;
        this.age = age;
        this.pet =pet;
    }

    greet() {
        console.log(`My name is ${this.name}. I am ${this.age} years old`);
    }

    feedPet(food) {
        console.log(`${this.name} fed ${this.pet.name}`)
        this.pet.eat(food);
    }

}

module.exports = Person;