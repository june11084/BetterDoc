import { getGeolocation } from './../js/geolocate.js';

describe('getGeolocation', function() {
   it('gets lat and long', function() {
   const address = "400 SW 6th Ave #800, Portland, OR 97204";
   const latLong = "35.2085396,-101.8409292"
   expect(getGeolocation(address)).toEqual(latLong);
   });
});
