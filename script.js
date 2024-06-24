
const fetchCats = require ('./modules/apiService.js');
const displayCats = require ('./modules/ui.js') ;

//add the event listener at loading

document.addEventListener('DOMContentLoaded', () => {
    fetchCats()
        .then(cats => { displayCats(cats);})
        .catch(error => { 
            console.error('Error Retrieving cats: ', error);
        });
});

