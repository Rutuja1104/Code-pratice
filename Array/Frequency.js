//1 method
function findferquency(ar){
    const frequency ={};
    for(let num of ar){
        if(frequency[num]){
            frequency[num]++;
        }
        else{
            frequency[num]=1;
        }
    }
    return frequency;
}
const ar = [1,2,3,2,1,3,4];
const frequency = findferquency(ar);
console.log(frequency);
    
//2 methoed
// function findferquency(ar){
//     const frequency = new Map();
//     for (let num of ar) {
//         const count = frequency.get(num)||0;
//         frequency.set(num,count+1);
//     }
//     return frequency;
// }
// const ar = [1,2,3,2,1,3,4];
    
//     const frequency = findferquency(ar);
//     console.log(frequency);
