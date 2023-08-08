import axios from "axios";

axios.defaults.baseURL = 'https://api.thecatapi.com/v1/breeds';
axios.defaults.headers.common["x-api-key"] = "live_sOdKW7TA6eUPaban2T56WWHht7VDTY1RtbQVCyqSqzeTwWs3BE6LTAPXGlcCcITU";

function fetchBreeds() {
   return axios.get()
.then(response => getBreedList(response.data))
.then(data => {
    return data})
};

function getBreedList(allBreeds) {
    return allBreeds.map(({id,name,image, temperament})=>(
        {
            id,
            name
        }
    ));
};

function fetchCatByBreed(breedId) {
    return axios({
        method: 'GET',
        headers: {
            'x-api-key':"live_sOdKW7TA6eUPaban2T56WWHht7VDTY1RtbQVCyqSqzeTwWs3BE6LTAPXGlcCcITU"
        },
        baseURL: 'https://api.thecatapi.com/v1/images/search?breed_ids='
    })
.then(response => {
    return response.data
})
};

export default {fetchBreeds,fetchCatByBreed};