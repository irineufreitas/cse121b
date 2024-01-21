/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Irineu de Freitas Junior";
let currentYear = "2024";
let profilePicture = 'images/IMG_5884.jpeg';




/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
var imageElement = document.querySelector('img[src="images/IMG_5884.jpeg"]');




/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong> ${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);




/* Step 5 - Array */

let foods = ['Japanese Food', 'Brazilian Barbecue', 'Indian Curry and Nan', 'Tacos'];
foodElement.textContent = foods.join(', ');
let favfood = ['Pizza di Napoli'];

foods.push(favfood);

foodElement.innerHTML += `<br>${favfood}`;
foods.shift();

foodElement.innerHTML += `<br>${foods}`;

foods.pop()

foodElement.innerHTML += `<br>${foods}`;


