import {apiKey2} from './../.env';

export function callBetterDoctor() {
  let url = `https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=${apiKey2}`;
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
