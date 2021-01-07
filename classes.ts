class Car {
    name: string;
    company : string;
    maxSpeed : number;
    torque : number;
    constructor(name: string, company: string, maxSpeed: number,torque: number) {
        this.name = name;
        this.company = company;
        this.maxSpeed = maxSpeed;
        this.torque = torque;
    }
    move(distance : number) {
        let time : number = distance/this.maxSpeed;
        console.log(`This car in max speed can arrive on destiny in ${time} hours.`);
    }
}
class Toyota extends Car {
    constructor(name: string, maxSpeed: number,torque: number) {
        super(name, "Toyota", maxSpeed, torque);
    }
    move(distance:number) {
        if(distance > 50) {
            console.log('Good travel, its soo long :)');
        } else {
            console.log('Good travel, its soo short :)');
        }
        super.move(distance);
    }
}

class Ford extends Car {
    constructor(name: string,maxSpeed: number,torque: number) {
        super(name,"Ford",maxSpeed,torque);
    }
    move(distance: number) {
        console.log("This Ford is very fast go to max velocity :)");
        super.move(distance);
    }
}

const toyotaCar = new Toyota('Corolla',250,1500);
toyotaCar.move(350);

const fordCar = new Ford('Jetta',500,19000);
fordCar.move(19500);