
import catApi from "./js/cat-api";


let breedSelectoDropdown = document.querySelector('.breed-select');
let errorMessage = document.querySelector('.error');
let loaderEl = document.querySelector('.loader');
let catInfoEl = document.querySelector('.cat-info');


breedSelectoDropdown.addEventListener('change', e=>{
    addBreedImage(e.target.value);
})


catApi.fetchBreeds()
.then(createBreedList)
.catch(()=>{
    hideLoader();
    showError();
})

function createBreedList(breedsArray) {
    breedSelectoDropdown.classList.remove('is-hidden');
    hideLoader();
    breedSelectoDropdown.insertAdjacentHTML("beforeend", (breedsArray.map((breed => {
        return `<option value="${breed.id}">${breed.name}</option>`
    })).join("")));
};


function addBreedImage(id) {
    catApi.fetchCatByBreed(id)
    .then(response => {
        console.log(response[0].breeds);
        hideError();
        addCatInfo(response[0])})
    .catch(showError)
};

function addCatInfo(catData) {
    catInfoEl.innerHTML="";
    catInfoEl.insertAdjacentHTML('beforeend',`
            <img src="${catData.url}" alt="" width="300px"/>
            <div class='catInfo'>
                <h1>${catData.breeds[0].name}</h1>
                <p>${catData.breeds[0].description}</p>
                <p><strong>Temperament: </strong>${catData.breeds[0].temperament}</p>
            </div>
    `
    )
};

function showError() {
    if (errorMessage.classList.contains('is-hidden')) {
        errorMessage.classList.remove('is-hidden');   
    };
};

function hideError() {  
    if (!errorMessage.classList.contains('is-hidden')) {
        errorMessage.classList.add('is-hidden');   
    };
};


function showLoader() {
    loaderEl.classList.remove('is-hidden');
};

function hideLoader() {
        loaderEl.classList.add('is-hidden');
};