//let a:any = 100.345;
let a:any="aaa";
console.log(typeof(a));
console.log((<number>a).toFixed(2));
console.log((a as number).toFixed(2));