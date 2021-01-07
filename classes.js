var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(name, company, maxSpeed, torque) {
        this.name = name;
        this.company = company;
        this.maxSpeed = maxSpeed;
        this.torque = torque;
    }
    Car.prototype.move = function (distance) {
        var time = distance / this.maxSpeed;
        console.log("This car in max speed can arrive on destiny in " + time + " hours.");
    };
    return Car;
}());
var Toyota = /** @class */ (function (_super) {
    __extends(Toyota, _super);
    function Toyota(name, maxSpeed, torque) {
        return _super.call(this, name, "Toyota", maxSpeed, torque) || this;
    }
    Toyota.prototype.move = function (distance) {
        if (distance > 50) {
            console.log('Good travel, its soo long :)');
        }
        else {
            console.log('Good travel, its soo short :)');
        }
        _super.prototype.move.call(this, distance);
    };
    return Toyota;
}(Car));
var Ford = /** @class */ (function (_super) {
    __extends(Ford, _super);
    function Ford(name, maxSpeed, torque) {
        return _super.call(this, name, "Ford", maxSpeed, torque) || this;
    }
    Ford.prototype.move = function (distance) {
        console.log("This Ford is very fast go to max velocity :)");
        _super.prototype.move.call(this, distance);
    };
    return Ford;
}(Car));
var toyotaCar = new Toyota('Corolla', 250, 1500);
toyotaCar.move(350);
var fordCar = new Ford('Jetta', 500, 19000);
fordCar.move(19500);
