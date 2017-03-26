(function ( $ ) {
  
  $.fn.carousel = function() {

    var leftArrow = $('.carousel-arrow-left');
    if (!leftArrow.length) jquery.carousel.jsconsole.log("Can't find .carousel-arrow-left");
    var rightArrow = $('.carousel-arrow-right');
    if (!rightArrow.length) console.log("Can't find .carousel-arrow-right");
    var $itemsList = $('.carousel-list');
    if (!$itemsList.length) console.log("Can't find .carousel-list");

    var itemsCount = $itemsList.find('li').length;
    var pixelsOffset = 220;
    var currentLeftValue = 0;
    var minimumOffset = - ((itemsCount - 3) * pixelsOffset);
    var maximumOffset = 0;

    $itemsList.find('li').each(function(){
      $(this).css({
        'background-color': 'rgb(' + 
                                  Math.ceil(Math.random()*128 + 128) + ',' + 
                                  Math.ceil(Math.random()*128 + 128) + ',' + 
                                  Math.ceil(Math.random()*128 + 128) + ')'
        });
    })

    leftArrow.click(function() {
      if(currentLeftValue != maximumOffset) {
        currentLeftValue += pixelsOffset;
        $itemsList.animate({ left: currentLeftValue + "px"}, 600);
      }
    });

    rightArrow.click(function() {
      if(currentLeftValue != minimumOffset) {
        currentLeftValue -= pixelsOffset;
        $itemsList.animate({ left: currentLeftValue + "px"}, 600);
      }
    });

    return this;
  }

})(jQuery);