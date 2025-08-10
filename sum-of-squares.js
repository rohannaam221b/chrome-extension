const n = [ 2, 4, 6];

let sum = 0;

for(let i =0; i<n.length; i++){
    sum = sum + (n[i]*n[i]);
}

console.log('sum of square:', sum);