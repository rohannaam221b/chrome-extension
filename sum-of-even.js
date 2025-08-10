const n = [1,2,3,4,5,8];

let sum = 0;

for(i=0; i<n.length; i++){
    if(n[i] %2 === 0){
        sum= sum + n[i];
    }
}

console.log('sum of even', sum);