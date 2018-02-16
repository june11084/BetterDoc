
import {apiKey} from './../.env';
import {callBetterDoctor} from './../js/betterDoctor.js';
import {getGeolocation} from './../js/geolocate.js';
import {getSpecialties} from './../js/betterDoctor.js';
//betterdoctor key: e65970bf7f6e96c56127c7bc116f09b2
//google geocoding key: AIzaSyB38yaIdKTqdU7Z_cuWoGbyrBkNFJWsKlE
getSpecialties();
$(document).ready(function(){
  $('#search-form').submit(function(event){
    event.preventDefault();
    $('#result').empty();
    let address = $('#address').val();
    console.log("address: " + address);
    let doctor = $('#doctor').val();
    console.log("doctor: " + doctor);
    let specialty = $('#specialties').val();
    console.log("specialty: " + specialty);
    let latLong = getGeolocation(address);
    callBetterDoctor(latLong, doctor, specialty);
  });
});
