"use strict";
// class Employee {
//     Id:number;
//     name:string;
//     constructor(id:number,name:string) {
//         this.Id=id;
//         this.name=name;
//     }
//     getInfo(){
//         return `${this.Id}: ${this.name}`;
//     }
// }
// let emp:Employee=new Employee(1,"aaa");
// console.log(emp.getInfo());
class Employee {
    constructor() {
        this.Id = 1;
        this.name = "aaa";
    }
    getInfo() {
        return `${this.Id}: ${this.name}`;
    }
}
let emp = new Employee();
console.log(emp.getInfo());
