
import {apiKey} from './../.env';
import {callBetterDoctor} from './../js/betterDoctor.js';
import {getGeolocation} from './../js/geolocate.js';
import {getSpecialties} from './../js/betterDoctor.js';

getSpecialties();
$(document).ready(function(){
  $('#search-form').submit(function(event){
    event.preventDefault();
    $('#result').empty();
    let address = $('#address').val();
    console.log("address: " + address);
    let doctor = $('#doctor').val();
    console.log("doctor: " + doctor);
    let symptoms = $('#symptoms').val();
    console.log("symptoms: " + symptoms);
    let specialty = $('#specialties').val();
    console.log("specialty: " + specialty);
    let latLong = getGeolocation(address);
    callBetterDoctor(latLong, doctor, specialty, symptoms);
    $('#block').show();
  });
});
