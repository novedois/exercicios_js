function fib(x) {
    if (x <= 2) {
        return x - 1;
    }
    else {
        return (fib(x-1) + fib(x-2));
    }
}

for(let i = 1; i <= 11; i++) {
    console.log(fib(i));
}