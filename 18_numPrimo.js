let num = 17;
let divs = 0;

function numPrimo(n) {
    for (let i = num; i > 0; i--) {
        if (num % i == 0) {
            divs++;
        }
        
    }
    
    if (divs <= 2) {
       return true;
    }
    return false
}

console.log(numPrimo(17));
console.log(numPrimo(18));