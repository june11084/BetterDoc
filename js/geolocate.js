import {apiKey} from './../.env';

export function callBetterDoctor() {
  let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${apiKey}`;
  $.ajax({
    url: url,
    type: 'GET',
    data: {
      format: 'json'
    },
    success: function(response) {
      for(let i = 0; i < response.data.length ; i ++){
        $('#result').append(`<div >${response.data[i].practices[0].location_slug}</div>`);
      }
    },
    error: function() {
      $('#errors').text("There was an error processing your request. Please try again.");
      }
  });
}
