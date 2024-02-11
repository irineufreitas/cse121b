/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');

let templeList = [];


/* async displayTemples Function */

const displayTemples = (temples) => {
    temples.forEach(temple => {
        const articleElement = document.createElement('article');

        const h3Element = document.createElement('h3');
        h3Element.textContent = temple.templeName;



        const imgElement = document.createElement('img');
        imgElement.src = temple.imageUrl;
        imgElement.alt = temple.location;

        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);

        templesElement.appendChild(articleElement);
    });
}

/* async getTemples Function using fetch()*/

const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    const templesData = await response.json();
    templeList = templesData;
    displayTemples(templeList);
}
/* reset Function */

const reset = () => {
    templesElement.innerHTML = ''; 
};


/* filterTemples Function */

const filterTemples = (temples) => {
    reset(); // Clear the output

    const filter = document.getElementById('filtered').value.toLowerCase(); // Get the value of the select element and convert to lowercase

    switch (filter) {
        case 'utah':
            displayTemples(temples.filter(temple => temple.location.toLowerCase().includes('utah')));
            break;
        case 'notutah':
            displayTemples(temples.filter(temple => !temple.location.toLowerCase().includes('utah')));
            break;
        case 'older':
            displayTemples(temples.filter(temple => {
                const [year] = temple.dedicated.split(',').map(item => parseInt(item));
                return year < 1950;
            }));
            break;
        case 'all':
        default:
            displayTemples(temples);
            break;
    }
};








/* Event Listener */

const filteredElement = document.getElementById('filtered');

filteredElement.addEventListener('change', () => {
    filterTemples(templeList);
});

getTemples();