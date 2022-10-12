$.fn.jQuerySimpleCounter = function( options ) {
  var settings = $.extend({
      start:  0,
      end:    100,
      easing: 'swing',
      duration: 400,
      complete: ''
  }, options );

  var thisElement = $(this);

  $({count: settings.start}).animate({count: settings.end}, {
  duration: settings.duration,
  easing: settings.easing,
  step: function() {
    var mathCount = Math.ceil(this.count);
    thisElement.text(mathCount);
  },
  complete: settings.complete
});
};


$('.counter1').jQuerySimpleCounter({end: 12,duration: 3000});
$('.counter2').jQuerySimpleCounter({end: 55,duration: 3000});
$('.counter3').jQuerySimpleCounter({end: 359,duration: 2000});
$('.counter4').jQuerySimpleCounter({end: 246,duration: 2500});
$('.counter5').jQuerySimpleCounter({end: 246,duration: 2500});