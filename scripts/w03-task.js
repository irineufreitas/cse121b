/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add (number1, number2){
    return number1 + number2;
}

function addNumbers(){
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);
    document.querySelector('#sum').value = add(addNumber1,addNumber2);
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2){
    return number1 - number2;
}
const subtractNumbers = function(){
    let subtractNumber1 = Number(document.querySelector("#subtract1").value);
    let subtractNumber2 = Number(document.querySelector("#subtract2").value);
    document.querySelector('#difference').value = subtract(subtractNumber1,subtractNumber2);

};

document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    const factor1 = Number(document.querySelector("#factor1").value);
    const factor2 = Number(document.querySelector("#factor2").value);
    document.querySelector('#product').value = multiply(factor1, factor2);

};

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);


/* Open Function Use - Divide Numbers */
function divide (number1, number2){
    return number1 / number2;
}

function divideNumbers(){
    let dividend = Number(document.querySelector("#dividend").value);
    let divisor = Number(document.querySelector("#divisor").value);
    document.querySelector('#quotient').value = divide(dividend,divisor);
}

document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);


/* Decision Structure */

document.querySelector("#getTotal").addEventListener("click",calculateTotalDue);
function calculateTotalDue() {
    const subtotal = Number(document.querySelector("#subtotal").value);

    const isMember = document.querySelector("#member").checked;

    const discount = isMember && 0.2;
    
    const totalDue = subtotal - (subtotal * discount);

    document.querySelector("#total").textContent = `$${totalDue.toFixed(2)}`;
}

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
const arrayString = numbersArray.join(', ');

document.querySelector("#array").textContent = arrayString;


/* Output Odds Only Array */
const oddNumbers = numbersArray.filter(number => number %2 !== 0);

const oddNumbersString = oddNumbers.join(', ');

document.querySelector("#odds").textContent = oddNumbersString;

/* Output Evens Only Array */

const evenNumbers = numbersArray.filter(number => number %2 === 0);

const evenNumbersString = evenNumbers.join(', ');

document.querySelector("#evens").textContent = evenNumbers;


/* Output Sum of Org. Array */

const summ = numbersArray.reduce((sum, number) => sum + number);

const summString = numbersArray.join(', ');

document.querySelector("#sumOfArray").innerHTML = summ.toString();


/* Output Multiplied by 2 Array */

const multi = numbersArray.map(number => number * 2);

const multiString = numbersArray.join(', ');

document.querySelector("#multiplied").innerHTML = multi.join(', ');
/* Output Sum of Multiplied by 2 Array */

const multipliedArray = numbersArray.map(number => number * 2);

const sumOfMultiplied = multipliedArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

document.querySelector("#sumOfMultiplied").innerHTML = sumOfMultiplied.toString();