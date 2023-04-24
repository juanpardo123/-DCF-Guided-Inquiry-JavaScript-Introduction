//  Create 4 math functions, one called add() that adds 2 numbers, one called subtract() that subtracts 2 numbers, one called multiply() to multiply 2 numbers, and one called divide() to divide two numbers.
let n1 = 5;
let n2 = 9;

console.log(add(n1,n2));
console.log(subtract(n1,n2));
console.log(multiply(n1,n2));
console.log(divide(n1,n2));

function add(num1,num2){
 return (Number(num1) + Number(num2));
}

function subtract(num1,num2){
    return (Number(num1) - Number(num2));
}

function multiply(num1,num2){
    return (Number(num1) * Number(num2));
}

function divide(num1,num2){
    return (Number(num1) / Number(num2));
}
