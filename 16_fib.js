let total = 10;
let n1 = 1;
let n2 = 1;
let proximo;

for(let i = 1; i <= total; i++) {
    console.log(n1);
    proximo = n1 + n2;
    n1 = n2;
    n2 = proximo
}
