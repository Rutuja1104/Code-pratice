function countDistinctElement(arr){
    let elementCount={}
    let Distinct =0;
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if(!elementCount[element]){
            elementCount[element]=true;
            Distinct++;
        }
    }
    return Distinct
}
console.log(countDistinctElement([1,1,2,2,3,4,4,5]))
