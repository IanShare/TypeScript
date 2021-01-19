"use strict";
var mod03;
(function (mod03) {
    class Employee {
        constructor(id, name) {
            this.id = id;
            this.Name = name;
        }
        getInfo() {
            return `${this.id}: ${this.name}`;
        }
        set Name(v) {
            this.name = v.toUpperCase();
        }
        get Name() {
            return this.name + "...";
        }
    }
    let emp = new Employee(1, "aaa");
    // emp.Name="bbb"
    console.log(emp.Name);
})(mod03 || (mod03 = {}));
