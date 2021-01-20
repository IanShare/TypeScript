"use strict";
var mod03;
(function (mod03) {
    class Employee {
        constructor(id, name) {
            this.id = id;
            this.name = name;
        }
        getInfo() {
            return `id:${this.id} name:${this.name}`;
        }
    }
    class Sales extends Employee {
        constructor(id, name, bonus) {
            super(id, name);
            this.bonus = bonus;
        }
        getInfo() {
            // return `id:${this.id} name:${this.name} bouns:${this.bonus}`;
            //return `${super.id} name:${super.name} bouns:${this.bonus}`;
            return `${super.getInfo()} bouns:${this.bonus}`;
            //return 1;
        }
    }
    let emp = new Sales(1, "aaa", 3000);
    console.log(emp.getInfo());
    console.log(emp);
})(mod03 || (mod03 = {}));
