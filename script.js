// create the asynchronous function to get data from the cat API
 
 
 async function getNewCats() {

    const headers = new Headers({
        "Content-Type": "application/json",
        "x-api-key": 'live_AQb1tl9xtDriPZcM3xEEKDtcquKdSBkw76NAPIBp34fpNThRqEHGkaRClEmIM8nY'
    });
    
    var requestOptions = {
        method: 'GET',
        headers: headers,
        redirect: 'follow'
    };
    
    fetch("https://api.thecatapi.com/v1/images/search?limit=20", requestOptions)
    .then(response => response.json())
    .then(result => displayCats(result))
    .catch(error => console.log('error', error));
         
 }

 // Create a  CALL-BACK function that takes the cats object returned as a response
 // and iterates through each object and add it to the html document as a 
 // gallery of images.
    function displayCats(cats) {
        const catGallery = document.getElementById('catGallery');
        catGallery.innerHTML = '';
        cats.forEach(cat => {
            const catElement = document.createElement('img');
            catElement.classList.add('cat-image');
            catElement.id = cat.id;
            catElement.height = cat.height;
            catElement.width = cat.width;
            catElement.src = cat.url;
            catElement.alt = 'A cute cat';
            catGallery.appendChild(catElement);
        });
    }

    // This is when the API request get executed by calling the getNewCats()
    getNewCats();