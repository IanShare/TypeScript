"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = exports.projectName = void 0;
exports.projectName = "HR Management";
class Employee {
    constructor(empId, empName) {
        this.empId = empId;
        this.empName = empName;
    }
    getInfo() {
        return ` ${this.empId} , ${this.empName} `;
    }
}
exports.Employee = Employee;
