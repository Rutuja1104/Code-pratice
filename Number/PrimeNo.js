let n=7,c=0;
for (let index = 2; index < n-1; index++) {
   if(n%index===0){
    c++;
   }    
}
if(c>0){
console.log("PRIME NUMBER")
}else{
    console.log("Not PRIME NUMBER")

}