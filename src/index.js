import axios from "axios";


axios.defaults.baseURL = 'https://api.thecatapi.com/v1/breeds';
axios.defaults.headers.common["x-api-key"] = "live_sOdKW7TA6eUPaban2T56WWHht7VDTY1RtbQVCyqSqzeTwWs3BE6LTAPXGlcCcITU";


let breedSelectoDropdown = document.querySelector('.breed-select');
let errorMessage = document.querySelector('.error');
let loaderEl = document.querySelector('.loader');


onPageLoad();

axios.get()
.then(response => getBreedList(response.data))
.then(data => createBreedList(data))
.catch(function(err) {
    console.log(err);
})



function onPageLoad() {
    breedSelectoDropdown.classList.add('is-hidden');    
    errorMessage.classList.add('is-hidden');
}

function getBreedList(allBreeds) {
    return allBreeds.map(({id,name,image, temperament})=>(
        {
            id,
            name,
            image,
            temperament
        }
    ));
};

function createBreedList(breedsArray) {
    breedSelectoDropdown.classList.remove('is-hidden');
    loaderEl.classList.add('is-hidden');
    breedSelectoDropdown.insertAdjacentHTML("beforeend", (breedsArray.map((breed => {
        return `<option value="${breed.id}">${breed.name}</option>`
    })).join("")));
};


