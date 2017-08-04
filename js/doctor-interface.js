var Symptom = require('./../js/docor.js').doctorModule;

var displayDoctor = function(id, doctorData) {
  $('.showDoctor').text("The best doctor(s) to see for your reported symptom of:" + sx + " is " + doctorData + ".");
};

$(document).ready(function() {
  var currentSymptomObject = new Symptom();
  $('#find-doctor').click(function() {
    var sx = $('#symptom-name').val();
    var location = parseInt($('#location').val());
    var distance = parseInt($('#distance').val());
    $('#symptom-name').val("");
    currentSymptomObject.getDoctor(sx);
  });

});

exports.displayDoctorFunction = displayDoctor;
///////doctor-interface////////////////
