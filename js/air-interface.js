
import {apiKey} from './../.env';
import {callBetterDoctor} from './../js/betterDoctor.js';
//betterdoctor key: e65970bf7f6e96c56127c7bc116f09b2
//google geocoding key: AIzaSyB38yaIdKTqdU7Z_cuWoGbyrBkNFJWsKlE
$(document).ready(function(){
  $('#search-form').submit(function(event){
    event.preventDefault();
    let city = $('#city').val();
    callBetterDoctor();
  });
});
