var apiKey = require('./../.env').apiKey;
var displayDoctor = require('./../js/doctor-interface.js').displayDoctorFunction;

function Symptom() {

}

Symptom.prototype.getDoctor = function(sx) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + sx + '&location=' + latitude + '%2C' + longitude + '$2C' + distance + '&user_location=' + atitude + '%2C' + longitude + '&skip=0&limit=10&user_key=' + apiKey).then(function(response) {
    displayDoctor(id, response.symptom.doctor_name);
  }).fail(function(error) {
    $('.show-results').text(error.responseJSON.message);
  });
};

exports.symptomModule = Symptom;
/////////////bike///////////////////
