
async function getNewCat() {

    const headers = new Headers({
        "Content-Type": "application/json",
        "x-api-key": 'live_AQb1tl9xtDriPZcM3xEEKDtcquKdSBkw76NAPIBp34fpNThRqEHGkaRClEmIM8nY'
    });
    
    var requestOptions = {
        method: 'GET',
        headers: headers,
        redirect: 'follow'
    };
    
    fetch("https://api.thecatapi.com/v1/images/search?limit=10", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    
}
  
  
  
  // .then(response => response.json())
    // .then(result => console.log(result))
    // .catch(error => console.log('error', error));        
  



    // function displayCats(cats) {
    //     const catGallery = document.getElementById('catGallery');

    //     catGallery.innerHTML = '';
    //     cats.forEach(cat => {
    //         const catElement = document.createElement('img');
    //         catElement.classList.add('cat-image');
    //         catElement.src = cat.url;
    //         catElement.alt = 'A cute cat';
    //         catGallery.appendChild(catElement);
    //     });
    // }