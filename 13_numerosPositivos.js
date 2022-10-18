// Criar uma função que receba como parâmetro um array de números e retorne um array
// contendo somente números positivos.

function positivos(arr) {
    let array = arr;
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            console.log(array[i]);
        }
    }
}

positivos([1, 2, 3, -4, -5, 7]);

console.log();

positivos([1, -2, 3, -4, -5, -7]);