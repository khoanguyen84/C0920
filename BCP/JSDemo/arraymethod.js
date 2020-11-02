let arr = [5, 6, 7, 2, 3, 8, 10, 20, 6, 7];

function myFillter() {
    var result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 8 && arr[i] <= 10) {
            result.push(arr[i]);
        }
    }
    return result;
}

let number1 = 7;
let number2 = 9;
console.log(`outside function: number1 = ${number1}, number2 = ${number2}`);
swrap(number1, number2);

function swrap(number1, number2) {
    let t = number1;
    number1 = number2;
    number2 = t;
    console.log(`inside function: number1 = ${number1}, number2 = ${number2}`);
}
console.log(`outside function: number1 = ${number1}, number2 = ${number2}`);


function inputNumber(msg) {
    let number = 0;
    do {
        number = Number(prompt(msg));
    }
    while (isNaN(number) || !Number.isInteger(number) || number < 2);
    return number;
}

function isPrime(n) {
    for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
        if (n % i == 0)
            return false;
    }
    return true;
}

function showPrimes(from, to) {
    let primes = [];
    for (let n = from; n <= to; n++) {
        if (isPrime(n)) {
            primes.push(n);
        }
    }
    return primes;
}

function main() {
    let from = inputNumber('enter from value');
    let to = inputNumber('enter to value');
    document.write(showPrimes(from, to).toString());
    document.getElementById("p1").innerHTML = showPrimes(from, to).toString();
    document.getElementById("h3").innerHTML = showPrimes(from, to).toString();
}


main();