namespace common{
    let removeDuplicate = function(nums:number[]):number{
        nums = nums.filter((data,index)=>{
            return nums.indexOf(data) === index;
          });
        console.log(nums);
        return nums.length;
    }

    function test(nums:Array<number>):number {
        nums = new Array<number>();
        console.log(nums);
        return nums.length;
    }

    class MyTest{ 
        constructor(public nums:Array<number>){
        }
    }

    function test2(mytest:MyTest):number {
        mytest.nums = new Array<number>();
        console.log(mytest.nums );
        return mytest.nums.length;
    }
    
    let arr = [1,2,3,1,2,5,8,8,7];
    console.log(removeDuplicate(arr));
    console.log(arr);
    let arr2 = new Array<number>(1,2,3,1,2,5,8,8,7);
    console.log(test(arr2));
    console.log(arr2);
    let myTestObj = new MyTest([1,2,3,1,2,5,8,8,7]);
    console.log(myTestObj.nums);
    console.log(test2(myTestObj));
    console.log(myTestObj.nums);
}