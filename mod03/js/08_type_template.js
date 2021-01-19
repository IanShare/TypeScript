"use strict";
var mod03;
(function (mod03) {
    let employee = {
        empName: "Mary",
        age: 29,
        myvar: "",
        showInfo: function () {
        }
    };
    employee.myvar = "hello";
    employee.showInfo = function () {
        return this.empName + ", " + this.age + ", " + this.myvar;
    };
    console.log(employee.showInfo());
})(mod03 || (mod03 = {}));
