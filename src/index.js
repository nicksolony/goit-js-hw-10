
import catApi from "./js/cat-api";


let breedSelectoDropdown = document.querySelector('.breed-select');
let errorMessage = document.querySelector('.error');
let loaderEl = document.querySelector('.loader');
let catInfoEl = document.querySelector('.cat-info');



onPageLoad();

breedSelectoDropdown.addEventListener('change', e=>{
    addBreedInfo(e.target.value);
})


catApi.fetchBreeds()
.then(createBreedList)
.catch(err=>{
    console.log(err);
})


function onPageLoad() {
    breedSelectoDropdown.classList.add('is-hidden');    
    errorMessage.classList.add('is-hidden');
}



function createBreedList(breedsArray) {
    breedSelectoDropdown.classList.remove('is-hidden');
    loaderEl.classList.add('is-hidden');
    breedSelectoDropdown.insertAdjacentHTML("beforeend", (breedsArray.map((breed => {
        return `<option value="${breed.id}">${breed.name}</option>`
    })).join("")));
};


function addBreedInfo(id) {
    catApi.fetchCatByBreed(id)
    .then(response => addCatImage(response[0].url))
    .catch(err=>{
        console.log(err);
    })
};

function addCatImage(url) {
    catInfoEl.innerHTML="";
    catInfoEl.insertAdjacentHTML('beforeend',`<img src="${url}" alt="" />`
    )
}



