namespace mod03{
    interface MathFunction{
        (x:number,y:number):number;
    }

    interface strToArray{
        (x:string,y:string):Array<string>;
    }

    let add:MathFunction=function (i,j) {
        return i+j;
    };
    let sub:MathFunction=(i,j)=>i-j;
    let mul:MathFunction=(i,j)=>i*j;
    let addArray:strToArray = function(x,y){
        var arr = new Array<string>()
        arr.push(x);
        arr.push(y);
        return arr;
    }
    console.log(add(100,200));
    console.log(sub(500,300));
    console.log(mul(60,70));
    console.log(addArray("aaa","bbb"))
}