
import catApi from "./js/cat-api";


let breedSelectoDropdown = document.querySelector('.breed-select');
let errorMessage = document.querySelector('.error');
let loaderEl = document.querySelector('.loader');
let catInfoEl = document.querySelector('.cat-info');




onPageLoad();

breedSelectoDropdown.addEventListener('change', e=>{
    addBreedImage(e.target.value);
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


function addBreedImage(id) {
    catApi.fetchCatByBreed(id)
    .then(response => {
        console.log(response[0].breeds);
        addCatInfo(response[0])})
    .catch(err=>{
        console.log(err);
    })
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



