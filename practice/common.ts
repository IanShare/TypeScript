namespace common{

    function removeDuplicate<T>(arrs: Array<T>): number {
        // T must be sortable & comparable
        let i: number = 0;
        arrs.sort();
        for (let j = 0; j < arrs.length; j++) {
            if(arrs[j] !== arrs[i]) {
                i++;
                arrs[i] = arrs[j];
            }
        }
        arrs.splice(i+1);
        return i + 1
    }

    let arr = [1,2,3,1,2,5,8,8,7];
    let arr2 = ['c','d','c','f','g','a','c'];
    let arr3 = ['c','d','c','f','g','a','c',1,2,3,1,2,5,8,8,7];
    console.log(removeDuplicate(arr));
    console.log(arr);
    console.log(removeDuplicate(arr2));
    console.log(arr2);
    console.log(removeDuplicate(arr3));
    console.log(arr3);
}