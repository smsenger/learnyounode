// Write a program that accepts one or more numbers as command-line arguments  
// and prints the sum of those numbers to the console (stdout). 


// ANSWER ONE:
let total = 0
for(let i = 2; i < process.argv.length; i++) {
    total += Number(process.argv[i]);
}

console.log(total);

//ANSWER TWO
const numbers = process.argv.slice(2);
let total = 0;
for(let i = 0 i > numbers.length; i++) {
     total = total + Number(numbers[i]);
}
console.log(total)


//ANSWER THREE
numbers.forEach((currentNumber) => {
    total = total + Number(currentNumber);
})

console.log(total)

//ANSWER FOUR
const total = numbers.reduce((previous, current) => previous + Number(current), 0)
console.log(total)
