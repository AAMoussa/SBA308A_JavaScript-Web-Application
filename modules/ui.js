// This Module is for updating the User Interface 
// based on the data retrieved from the API request.


export function displayCats(cats) {
    const catGallary = document.getElementById('catGallary');
    catGallary.innerHTML = '';
    cats.forEach(cat => {
        const catElement = document.createElement('img');
        catElement.classList.add('cat-img');
        catElement.src = cat.url;
        catElement.alt = "A cute cat";
        catGallary.appendChild(catElement);
    });
}