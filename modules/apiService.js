// This Module is for handling the API interactions

const API_KEY = 'live_AQb1tl9xtDriPZcM3xEEKDtcquKdSBkw76NAPIBp34fpNThRqEHGkaRClEmIM8nY';
const API_URL = `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=${API_KEY}`;

 async function fetchCats() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Failed to Retrieved cats!')
        }
        const data = await response.json();
        return data;

    } catch (error) {
        throw new Error(`Error Retrieving cats: ${error.message}`);
    }
}
module.exports = fetchCats;
//,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// export async function fetchCats() {

// const headers = new Headers({
//     "Content-Type": "application/json",
//     "x-api-key": "live_AQb1tl9xtDriPZcM3xEEKDtcquKdSBkw76NAPIBp34fpNThRqEHGkaRClEmIM8nY"
//   });
  
//   var requestOptions = {
//     method: 'GET',
//     headers: headers,
//     redirect: 'follow'
//   };
  
//   const response = await fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", requestOptions)
//     const cats = await response.json();
//     return cats;
// }