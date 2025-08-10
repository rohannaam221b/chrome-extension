const n =[-1,-2,-5,5,-5];

let sum =0;

for(i=0; i <n.length; i++){
    if (n[i]>0){
        sum =sum+n[i];
    }
}

console.log('sum of array', sum);