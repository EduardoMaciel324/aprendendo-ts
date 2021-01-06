"use strict";
exports.__esModule = true;
var message = 'Hello Word';
console.log(message);
var isBeginner = false;
var name = "Eduardo";
//name = true => this code result in error because variable name is typed as string and not boolean
var sentence = "Hello My name is " + name + ", i am a beginner in Typescript but i am better in English ";
var multiType;
multiType = 10;
multiType = "Eduardo";
multiType = true;
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
        this.date = new Date();
    }
    Person.prototype.displayInfo = function () {
        console.log(this.id + " " + this.name + " " + this.date);
    };
    return Person;
}());
function hasValue(man) {
    man = new Person(1, 'Eduardo');
    man.displayInfo();
}
var man;
hasValue(man);
