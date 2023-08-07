import CatApi from "./js/cat-api";

let breedSelectoDropdown = document.querySelector('.breed-select');
let errorMessage = document.querySelector('.error')

function onPageLoad() {
    breedSelectoDropdown.classList.add('is-hidden');    
    errorMessage.classList.add('is-hidden');
}

onPageLoad();