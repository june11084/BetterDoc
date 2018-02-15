
import {apiKey} from './../.env';
//aqicn key: e65970bf7f6e96c56127c7bc116f09b2

$(document).ready(function(){
  $('#search-form').submit(function(event){
    event.preventDefault();
    let city = $('#city').val();

    let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${city}&token=${apiKey}`;
    $.ajax({
      url: url,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        let responseData = response;
        $('#result').append(`<div >${response.data[0]}</div>`);
      },
      error: function() {
        $('#errors').text("There was an error processing your request. Please try again.");
      }
    });
  });
});
