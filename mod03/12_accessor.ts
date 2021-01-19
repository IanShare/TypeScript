namespace mod03 {
    class Employee {
        private name!:string;
        constructor(private id: number, name: string) {
          this.Name=name;
        }
        getInfo() {
            return `${this.id}: ${this.name}`;
        }
        public set Name(v:string){
            this.name=v.toUpperCase();
        }
        public get Name(){
            return this.name+"...";
        }
        
        private _value : string;
        public get value() : string {
            return this._value;
        }
        public set value(v : string) {
            this._value = v;
        }
        
    }
    let emp: Employee = new Employee(1, "aaa");
   // emp.Name="bbb"
    console.log(emp.Name);
   

}
