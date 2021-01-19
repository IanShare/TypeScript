namespace mod02 {
    let i = 10;
    // i="aaa"; //error

    //    function add(i=0,j=0) {
    //        return i+j;
    //    }

    function add(i: number, j: number) {
        return i + j;
    }
    console.log(add(100,200));

    // let j; //undefined, any
    // j=10;
    // j="aaa";

    let j:number; 
    j=10;
    console.log(j);
    
    // 不建議使用以下方式，不過override 會使用
    function add2(i: any, j: any) {
        return i + j;
    }
    console.log(add2("aaa",10));
}