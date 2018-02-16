
import {apiKey} from './../.env';
import {callBetterDoctor} from './../js/betterDoctor.js';
import {getGeolocation} from './../js/geolocate.js';
//betterdoctor key: e65970bf7f6e96c56127c7bc116f09b2
//google geocoding key: AIzaSyB38yaIdKTqdU7Z_cuWoGbyrBkNFJWsKlE
$(document).ready(function(){
  $('#search-form').submit(function(event){
    event.preventDefault();
    $('#result').empty();
    let address = $('#address').val();
    let latLong = getGeolocation(address);
    callBetterDoctor(latLong);
  });
});
