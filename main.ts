export {}
let message :string = 'Hello Word'
console.log(message);

let isBeginner : boolean = false;
let name : string = "Eduardo";
//name = true => this code result in error because variable name is typed as string and not boolean
let sentence : string = `Hello My name is ${name}, i am a beginner in Typescript but i am better in English `;

let multiType : number | boolean | string;
multiType = 10;
multiType = "Eduardo";
multiType = true;

class Person {
    id : number;
    name : string;
    date : Date;
    constructor(id : number, name : string) {
        this.id = id;
        this.name = name;
        this.date = new Date();
    }
    displayInfo() : void {
        console.log(`${this.id} ${this.name} ${this.date}`);
    }
 }

function hasValue (man : Person) : void {
    man = new Person(1,'Eduardo');
    man.displayInfo();
}
var man : Person;
hasValue(man);



