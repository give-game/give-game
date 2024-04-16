
//Get the list of all the appareil
const allAppareils = [];
for (let i=0; i<recipes.length; i++) {
    let appareils = recipes[i].appliance;
    allAppareils.push(appareils);
}

const appareilsNoRepeat = new Set(allAppareils);
const appareilFiltersArray = Array.from(appareilsNoRepeat);

//Get the list of all the ustensiles
const allUstensils = [];
for (let i=0; i<recipes.length; i++) {
    let ustensils = recipes[i].ustensils;
    allUstensils.push(ustensiles);
}

const allUstensilsJoined = allUstensils.flat();
const lowerCaseUstensils = allUstensilsJoined.map(x => x.toLowerCase());
const ustensilsNoRepeat = new Set(lowerCaseUstensils);
const ustensilsFiltersArray = Array.from(ustensilsNoRepeat);

//Display the filter inside their container 
const ingredients = new FiltersList(ingredientFiltersBtn, ingredientFiltersList, ingredientFiltersArray);
ingredients.display();
const appareils = new FiltersList(appareilFiltersBtn, appareilFiltersList, appareilFiltersArray);
appareil.display();
const ustensils = new FiltersList(ustensilsFiltersBtn, ustensilsFiltersList, ustensilsFiltersArray);
ustensils.display();

/*Search Bar*/
const searchBar = document.querySelector('#searchbar');

searchBar.addEventListener("keyup", (e) => {
    const searchedLetters = e.target.value;
    const cards = document.querySelector('.card');
    filterElements(searchedLetters, cards);
});

function filterElements(letters, elements) {
    if(letters.length > 2){
        for (let i=0; i<elements.length; i++){
            if(elements[i].textContent.toLowerCase().includes(letters)){
                elements[i].style.display = 'block';
            } else {
                elements[i].style.display = 'none';
            }
        }
    }
}