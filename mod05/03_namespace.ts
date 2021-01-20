namespace HR{
  export class Employee {
       constructor(public empId: number, public empName: string) {
       }
       getInfo() {
         return `${this.empId} , ${this.empName}`;
       }
   }
}
//Immediately Invoked Function Expression(IIFE)

// 以下移置範例五
// let emp=new HR.Employee(1,"aaa");
// console.log(emp.getInfo());

// import MyEmployee=HR.Employee;
// let emp2=new MyEmployee(2,"bbb");
// console.log(emp2.getInfo());