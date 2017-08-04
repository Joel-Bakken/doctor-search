var apiKey = require('./../.env').apiKey;
var displayDoctor = require('./../js/doctor-interface.js').displayDoctorFunction;

function Symptom() {

}

// Symptom.prototype.getDoctor = function(sx) {
//   $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + sx + '&location=' + latitude + '%2C' + longitude + '$2C' + distance + '&user_location=' + atitude + '%2C' + longitude + '&skip=0&limit=10&user_key=' + apiKey).then(function(response) {
//     displayDoctor(id, response.symptom.doctor_name);
//   }).fail(function(error) {
//     $('.show-results').text(error.responseJSON.message);
//   });
// };
exports.getDoctor = function(sx) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ sx+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
      console.log(result);
    })
   .fail(function(error){
      console.log("fail");
    });
};

exports.symptomModule = Symptom;
/////////////bike///////////////////
