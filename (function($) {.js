(function($) {

  "use strict";

  $(document).ready(function(){
    
    // Add animation effect on page load
    setTimeout(function() {
      $('#iframe-view').css('opacity', '0').animate({
        opacity: 1
      }, 800);
    }, 200);

  	$('#template-selector').on('change', function() {
  		var demo_url = this.value;
  		var product_url = $(this).find(':selected').data('product');

  		$("#iframe-view").css('opacity', '0.5');
      setTimeout(function() {
        $("#iframe-view").attr("src", demo_url).animate({
          opacity: 1
        }, 600);
      }, 300);
  	});

    $('a.device').click(function(e){
      e.preventDefault();
      var screen_size = $(this).attr('href');
      var iframe_width = 640;
      var iframe_height = 600;

      switch(screen_size) {
        case '#desktop':
          iframe_width = "100%";
          iframe_height = "100%";
        break;

        case '#laptop':
          iframe_width = "1280px";
          iframe_height = "1024px";
        break;

        case '#tab':
          iframe_width = "1024px";
          iframe_height = "1366px";
        break;

        default:
        case '#phone':
          iframe_width = "375px";
          iframe_height = "812px";
        break;
      }
      
      $('#iframe-view').animate({
        opacity: 0.7
      }, 200, function() {
        $(this).attr("width", iframe_width).attr("height", iframe_height);
        $(this).animate({
          opacity: 1
        }, 400);
      });
    });
    
    // Optional: Display navigation when user moves mouse to bottom right
    $(document).on('mousemove', function(e) {
      var pageWidth = $(window).width();
      var pageHeight = $(window).height();
      
      if (e.pageX > pageWidth - 100 && e.pageY > pageHeight - 100) {
        $('#demo-page-nav').addClass('show');
      } else if (e.pageX < pageWidth - 250 || e.pageY < pageHeight - 150) {
        $('#demo-page-nav').removeClass('show');
      }
    });
    
  });

})(jQuery);            