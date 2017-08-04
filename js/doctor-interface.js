var Symptom = require('./../js/doctor.js').doctorModule;

var displayDoctor = function(sx, doctorData) {
  $('.show-doctor').append('<li class="list-group-item">' + data.practices.name + '</li>');
};

$(document).ready(function() {
  var currentSymptomObject = new Symptom();
  $('#find-doctor').click(function() {
    var sx = $('#symptom-name').val();
    var latitude = parseInt($('#latitude').val());
    var longitude = parseInt($('#longitude').val());
    var distance = parseInt($('#distance').val());
    $('#symptom-name').val("");
    $('#latitude').val("");
    $('longitude').val("");


    currentSymptomObject.getDoctor(sx);
  });

});

exports.displayDoctorFunction = displayDoctor;
///////doctor-interface////////////////
