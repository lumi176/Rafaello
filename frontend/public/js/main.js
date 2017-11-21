jQuery(document).ready(function($) {
  "use strict";



$('.gallery-container').isotope({
  // options
  itemSelector: '.item',
  layoutMode: 'fitRows'
});



$( ".btnfirst" ).click(function() {
 $('.gallery-container').isotope({filter:'.btnfirst'})
});

  
});

