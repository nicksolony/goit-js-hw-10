
import catApi from "./js/cat-api";
import SlimSelect from 'slim-select'


let breedSelector = document.querySelector('.breed-select');
let errorMessage = document.querySelector('.error');
let loaderEl = document.querySelector('.loader');
let catInfoEl = document.querySelector('.cat-info');



// breedSelector.addEventListener('change', e=>{
//     addBreedImage(e.target.value);
// })

let select = new SlimSelect ({
    select: `#single`,
    events: {
        afterChange: (option) => {
            console.log(option[0])
            addBreedImage(option[0].value)
        }
    },
    settings: {
        contentLocation: document.getElementById('local')
      }
})

loadBreeds();

function loadBreeds() {
    showLoader();
    catApi.fetchBreeds()
    .then((createBreedList))
    .catch(()=>{
        onError();
        breedSelector.classList.add('is-hidden');
        select.destroy();
    })    
}

console.log(select);

// function createBreedList(breedsArray) {
//     breedSelector.classList.remove('is-hidden');
//     hideLoader();
//     breedSelector.insertAdjacentHTML("beforeend", (breedsArray.map((breed => {
//         return `<option value="${breed.id}">${breed.name}</option>`
//     })).join("")));
// };

function createBreedList(breedsArray) {
    console.log(breedsArray);
    // breedSelector.classList.remove('is-hidden');
    hideLoader();
    select.setData((breedsArray.map((breed)=>{
        return {
            text: breed.name,
            value:breed.id
        }
    })
    ))
}


function addBreedImage(id) {
    hideError();
    showLoader();
    catInfoEl.innerHTML="";
    catApi.fetchCatByBreed(id)
    .then(response => {
        hideLoader()
        hideError();
        addCatInfo(response[0])})
    .catch(onError)
};

function addCatInfo(catData) {
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

function onError() {
    hideLoader();
    showError();
}