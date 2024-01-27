//console.log('Hello');
//console.log('I Like money');


//window.alert(`I like pizza`);
//window.alert(`Thi is an alert`);

// This is a comment

//document.getElementById("myH1").textContent = `Hello`;
//document.getElementById("myP").textContent = `I like pizza`;


//let x;
// x = 100;

// let price = 10.99;

// let firstName = 'Irineu';
// let favfood = 'Sushi';

// console.log(`The price is $${price} us dollars`);
// console.log(typeof price);
// console.log(`My favorite food is ${favfood}, crazy`);



// let online = true;
// console.log(`Bro is online: ${online}`);

// let fullName = "Irineu";
// let age = 29;
// let student = false;

// document.getElementById("myH1").textContent = `My name is ${fullName}`;
// document.getElementById("myP").textContent = `My age is ${age}`;


// let students = 30;

// // students = students + 1;

// // students = students ** 3;

// // students += 1;

// // students++; // increment
// // students--; // decrement
// console.log(students);


// let result = 2 + 4;

// console.log(result);


// let username;

// username = window.prompt("What is your username?");

// console.log(username);

// let username;
// document.getElementById("mySubmit").onclick = function(){
//     username=document.getElementById("myText").value;
//     document.getElementById("myH1").textContent = `Hello ${username}`;
//     console.log(username);

// let age = window.prompt ("How old are you?");
// age = Number(age);
// age += 1;

// console.log(age, typeof age);

// let x = "pizza";
// let y = ""

// const PI = 3.14159;
// let radius;
// let circumference;

// document.getElementById("mySubmit").onclick = function(){
//     radius = document.getElementById("myText").value;
//     radius = Number(radius);
//     circumference = 2* PI* radius;
//     document.getElementById("myH2").textContent = circumference +"cm";
// }

// // radius = window.prompt(`Enter the radius of a circle`);
// // radius = Number(radius);

// // circumference = 2* pi * radius;

// // console.log(circumference);

// const decreaseBtn = document.getElementById("decreseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const increaseBtn = document.getElementById("increaseBtn");
// const countlabel = document.getElementById ("countlabel");
// let count = 0;

// increaseBtn.onclick = function(){
//     count++;
//     countlabel.textContent = count;
// }

// decreaseBtn.onclick = function(){
//     count--;
//     countlabel.textContent = count;
// }

// resetBtn.onclick = function(){
//     count = 0;
//     countlabel.textContent = count;
// }



// let x = 3.21;
// let y = 2;
// let z;

// z = Math.round(x);

// console.log(z);

const min = 50;
const max = 100;

// set a min and max number in a random generator
let randomNum = Math.floor(Math.random() * (max - min)) + min;

console.log(randomNum);

