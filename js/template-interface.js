// var template = require('./../js/template.js').templateModule;

//<!-- Back End -->
console.log('basic javascript is functioning');

//<!-- Front End  -->
$(document).ready(function(){

  $('#time').text(moment());

  if (jQuery) {
    console.log('jQuery 3.1.0 is loaded');
  } else {
    console.log('jQuery is not loaded');
  }

});
