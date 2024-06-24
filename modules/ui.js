// This Module is for updating the User Interface 
// based on the data retrieved from the API request.


 function displayCats(cats) {
    const catGallery = document.getElementById('catGallery');
    catGallery.innerHTML = '';
    cats.forEach(cat => {
        const catElement = document.createElement('img');
        catElement.classList.add('cat-image');
        catElement.src = cat.url;
        catElement.alt = 'A cute cat';
        catGallery.appendChild(catElement);
    });
}
module.exports = displayCats;