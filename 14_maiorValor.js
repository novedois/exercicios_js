let arr = [ 1, 3, 5, 12, 33, 9, 0 ];
let maior = arr[0]

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maior) {
        maior = arr[i];
    }
}

console.log(maior);