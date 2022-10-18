let nomes = [ 
    'joão', 
    'maria', 
    'ana', 
    'claudio', 
    'nabucodonossor', 
    'teobaldo', 
    'abcd' 
];

let maior = nomes[0]

for (let i = 0; i < nomes.length; i++) {
    if(nomes[i].length > maior.length) {
        maior = nomes[i];
    }
}

console.log(maior);
