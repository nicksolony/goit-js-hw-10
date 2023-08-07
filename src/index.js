import axios from "axios";

axios.defaults.baseURL = 'https://api.thecatapi.com/v1/breeds';
axios.defaults.headers.common["x-api-key"] = "live_sOdKW7TA6eUPaban2T56WWHht7VDTY1RtbQVCyqSqzeTwWs3BE6LTAPXGlcCcITU";


let breedSelectoDropdown = document.querySelector('.breed-select');
let errorMessage = document.querySelector('.error')

function onPageLoad() {
    breedSelectoDropdown.classList.add('is-hidden');    
    errorMessage.classList.add('is-hidden');
}

onPageLoad();

axios.get()
.then(function(r) {
    console.log(r);
})
.catch(function(err) {
    console.log(err);
})