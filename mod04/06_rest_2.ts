namespace mod04{
    // function sum(...numbers:number[]) {
    //     let result=0;
    //     numbers.forEach(i=>result+=i);
    //     return result;
    // }

    // console.log(sum(1,2,3));
    // console.log(sum(1,2,3,4,5));
    //=================================
    function sum(...numbers:(number|string)[]) {
        let result=0;
        numbers.forEach(i=>{
            if (typeof i==="String") {
                console.log(i.toUpperCase());
            } else {
                result+=i
            }
            
        });
        return result;
    }

    console.log(sum(1,"aaa",3));
   
}