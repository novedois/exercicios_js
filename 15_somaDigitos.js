let numero = 153;

let numString = numero.toString();
let numArray = Array.from(numString);
let soma = 0;

for(let i = 0; i < numArray.length; i++) {
    let num = Number(numArray[i]);
    soma += num;
}

console.log(soma);

