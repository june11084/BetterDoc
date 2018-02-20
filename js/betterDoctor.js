import {apiKey} from './../.env';
//betterdoctor key: e65970bf7f6e96c56127c7bc116f09b2
export function callBetterDoctor(latLong, doctor, specialty, symptoms) {
  let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${doctor}&specialty_uid=${specialty}&query=${symptoms}&location=${latLong},50&user_location=${latLong}&skip=0&limit=13&user_key=${apiKey}`;
  console.log(url);
  $.ajax({
    url: url,
    type: 'GET',
    data: {
      format: 'json'
    },
    success: function(response) {
      let notEmpty = 0;
      for(let i = 0; i < response.data.length ; i ++){
        $('#result').append(`<li>Doctor: ${response.data[i].practices[0].name}, Phone Number: ${response.data[i].practices[0].phones[0].number}, Accepting new Patients: ${response.data[i].practices[0].accepts_new_patients}</li>`);
        notEmpty++;
      }
      if(notEmpty === 0){
        $('#result').append("No Doctors found");
      }
    },
    error: function() {
      $('#result').append(`<p>There was an error processing your request. Please try again.</p>`);
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
      $('#result').append(`<p>There was an error processing your request. Please try again.</p>`);
      }
  });
}
