/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Irineu de Freitas Junior",
    photo: "images/IMG_5884.jpeg",
    favoriteFoods: [
        'Indian Curry',
        'Brazilian Barbecue',
        'Sushi',
        'DonKatsu',
        'Sashimi',
        'Cookies'
    ],
    hobbies: [
        'Make Music',
        'Play Soccer',
        'Strength Training',
        'Driving new Cars'
    ],
    placesLived: []


};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place:'Londrina, Brazil',
        length: '27 years'
       
    }
);
myProfile.placesLived.push(
    {
        place:'Provo, UT',
        length: '2 months' 
    }
);
myProfile.placesLived.push(
    {
        place:'Okinawa, Japan',
        length: '6 months'
        
    }
);
myProfile.placesLived.push(
    {
        place:'Amami Oshima, Japan',
        length: '6 months'
       
    }
);
myProfile.placesLived.push(
    {
        place:'Ube, Japan',
        length: '6 months'
    }
);
myProfile.placesLived.push(
    {
        place: 'Hiroshima, Japan',
        length: '2 months',    
    }
);
myProfile.placesLived.push(
    {
        place: 'Sao Paulo, Brazil',
        length: '5 months'
    }
);
myProfile.placesLived.push(
    {
        place: 'Pompei, Italy',
        length: '7 months'

    }
);


/* DOM Manipulation - Output */

document.querySelector('#name').textContent = myProfile.name;
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;

    let dd = document.createElement('dd');
    dd.textContent = place.length;
    
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
})

/* Name */

/* Photo with attributes */


/* Favorite Foods List*/


/* Hobbies List */


/* Places Lived DataList */


