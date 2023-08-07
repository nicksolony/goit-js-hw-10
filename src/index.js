import axios from "axios";

axios.defaults.baseURL = 'https://api.thecatapi.com/v1/breeds';
axios.defaults.headers.common["x-api-key"] = "live_sOdKW7TA6eUPaban2T56WWHht7VDTY1RtbQVCyqSqzeTwWs3BE6LTAPXGlcCcITU";


let breedSelectoDropdown = document.querySelector('.breed-select');
let errorMessage = document.querySelector('.error')


onPageLoad();

axios.get()
.then(response => getBreedList(response.data))
.catch(function(err) {
    console.log(err);
})



function onPageLoad() {
    breedSelectoDropdown.classList.add('is-hidden');    
    errorMessage.classList.add('is-hidden');
}

function getBreedList(breedsArray) {
    console.log(breedsArray.map((breed)=>breed.name));
    
}