 export default class CatApi {
    constructor() {
        this.selection = '';
    }
 }

 const API_KEY = 'live_sOdKW7TA6eUPaban2T56WWHht7VDTY1RtbQVCyqSqzeTwWs3BE6LTAPXGlcCcITU';
 const BASE_URL = 'https://newsapi.org/v2';
 const options = {
   headers: {
     Authorization: API_KEY,
   },
 }