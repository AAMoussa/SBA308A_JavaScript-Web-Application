// This Module is for handling the API interactions

const API_KEY = 'live_AQb1tl9xtDriPZcM3xEEKDtcquKdSBkw76NAPIBp34fpNThRqEHGkaRClEmIM8nY';
const API_URL = `https://api.thecatapi.com/v1/images/search?limit=10&api_key=${API_KEY}`;

export async function fetchCats() {
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