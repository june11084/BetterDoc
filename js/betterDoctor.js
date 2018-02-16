import {apiKey} from './../.env';

export function callBetterDoctor(latLong, doctor, specialty) {
  let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${doctor}&specialty_uid=${specialty}&location=${latLong},50&user_location=${latLong}&skip=0&limit=10&user_key=${apiKey}`;
  console.log(url);
  $.ajax({
    url: url,
    type: 'GET',
    data: {
      format: 'json'
    },
    success: function(response) {
      for(let i = 0; i < response.data.length ; i ++){
        $('#result').append(`<li>${response.data[i].practices[0].location_slug}</li>`);
      }
    },
    error: function() {
      $('#result').text("There was an error processing your request. Please try again.");
      }
  });
}

export function getSpecialties() {
  let url = `https://api.betterdoctor.com/2016-03-01/specialties?user_key=${apiKey}`;
  console.log(url);
  $.ajax({
    url: url,
    type: 'GET',
    data: {
      format: 'json'
    },
    success: function(response) {
      for(let i = 0; i < response.data.length ; i ++){
        $('#specialties').append(`<option value="${response.data[i].uid}">${response.data[i].uid}</option>`);
      }
    },
    error: function() {
      $('#result').text("There was an error processing your request. Please try again.");
      }
  });
}
