const n = [ 10,11,23,9,40];

let sum = 0;

for (i=0; i<n.length; i++){
    if (n[i]>10){
        sum = sum +n[i];
    }
}
console.log("sum of numbers > 10 :", sum);