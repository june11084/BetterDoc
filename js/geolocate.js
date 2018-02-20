import {apiKey2} from './../.env';
//google geocoding key: AIzaSyB38yaIdKTqdU7Z_cuWoGbyrBkNFJWsKlE
export function getGeolocation(address) {
   let finalCord = "0";
   let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey2}`;
   let cords = $.ajax({
    url: url,
    async:false,
    type: 'GET',
    data: {
      format: 'json'
    },
    success: function(response) {
      console.log("location found");
    },
    error: function() {
      $('#result').append("Invalid location. Please try again.");
      console.log("location not found");
      }
   });
   cords.done(function(data){
     finalCord = `${data.results[0].geometry.location.lat},${data.results[0].geometry.location.lng}`;
   });
   return finalCord;
}
