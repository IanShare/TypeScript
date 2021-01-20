"use strict";
var HR;
(function (HR) {
    class Employee {
        constructor(empId, empName) {
            this.empId = empId;
            this.empName = empName;
        }
        getInfo() {
            return `${this.empId} , ${this.empName}`;
        }
    }
    HR.Employee = Employee;
})(HR || (HR = {}));
//Immediately Invoked Function Expression(IIFE)
// 以下移置範例五
// let emp=new HR.Employee(1,"aaa");
// console.log(emp.getInfo());
// import MyEmployee=HR.Employee;
// let emp2=new MyEmployee(2,"bbb");
// console.log(emp2.getInfo());
