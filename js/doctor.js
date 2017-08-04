var apiKey = require('./../.env').apiKey;
var displayDoctor = require('./../js/doctor-interface.js').displayDoctorFunction;

function Symptom() {

}

Symptom.prototype.getDoctor = function(sx) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + sx).then(function(response) {
    displayDoctor(id, response.symptom.doctor_name);
  }).fail(function(error) {
    $('.show-results').text(error.responseJSON.message);
  });
};

exports.symptomModule = Symptom;
/////////////bike///////////////////
