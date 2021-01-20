"use strict";
var mod03;
(function (mod03) {
    class Employee {
        constructor(id, name) {
            this.id = id;
            this.name = name;
        }
        getInfo() {
            return `${this.id}: ${this.name}`;
        }
    }
    class Salary {
        constructor(_money) {
            this._money = _money;
        }
        get money() {
            return this._money;
        }
        set money(value) {
            this._money = value;
        }
    }
    class Sale extends Employee {
        constructor(id, name, bonus) {
            super(id, name);
            this.bonus = bonus;
        }
    }
    let emp = new Sale(1, "aaa", 3000);
    console.log(emp.getInfo(), emp.bonus);
})(mod03 || (mod03 = {}));
