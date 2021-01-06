export {}
let message: string = 'Hello Word'
console.log(message);

let isBeginner: boolean = false;
let name: string = "Eduardo";
//name = true => this code result in error because variable name is typed as string and not boolean
let sentence: string = `Hello My name is ${name}, i am a beginner in Typescript but i am better in English `;

let multiType: number | boolean | string;
multiType = 10;
multiType = "Eduardo";
multiType = true;

class Person {
    id: number;
    name: string;
    date: Date;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.date = new Date();
    }
    displayInfo(): void {
        console.log(`${this.id} ${this.name} ${this.date}`);
    }
}
const Eduardo = new Person(1,'Eduardo');
Eduardo.displayInfo();

interface ICar {
    model : string;
    make : string;
    chassi : number;
    displayCarInfo() : void;
}

class Car implements ICar {
    model : string;
    make : string;
    chassi : number;
    constructor(model : string, make : string, chassi : number) {
        this.model = model;
        this.make = make;
        this.chassi = chassi;
    }
    displayCarInfo() {
        console.log(`Modelo: ${this.model} Marca: ${this.make} Chassi: ${this.chassi}`)
    }
};
const Toyota = new Car('Corolla','Toyota',1321564456798);
Toyota.displayCarInfo();