namespace mod04{
    function sum(...numbers:number[]) {
        let result=0;
        numbers.forEach(i=>result+=i);
        return result;
    }
    function test(...params:(number|string)[]) {
        let result=0;
        console.log(params);
        return result;
    }
    console.log(sum(1,2,3));
    console.log(sum(1,2,3,4,5));
    test(12,'dd',33,'aa')
}