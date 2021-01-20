export let projectName = "HR Management";
export default class Employee {
    constructor(empId, empName) {
        this.empId = empId;
        this.empName = empName;
    }
    getInfo() {
        return ` ${this.empId} , ${this.empName} `;
    }
}
