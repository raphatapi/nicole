$(document).ready(function() {

    var main = main = $('.main ul');
    
    // $('.scroll').click(function(event) {
            
    //     event.preventDefault();
    
    //     var full_url = this.href,
    //         parts = full_url.split('#'),
    //         trgt = parts[1],
    //         target_offset = $('#'+trgt).offset(),
    //         target_top = target_offset.top;
            
    //     $('html, body').animate({scrollTop:target_top}, 500);
        
    //     /* Remove active class on any li when an anchor is clicked */
        
    //     main.children().removeClass();
        
    //     /* Add active class to clicked anchor's parent li */
            
    //     $(this).parent().addClass('active');

    // });

    // Add smooth scrolling to all links
    $(".scroll").on('click', function(event) {
  
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (1200) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top - $("nav").outerHeight(true)
          }, 1200, function(){
       
            // Add hash (#) to URL when done scrolling (default click behavior)
            // window.location.hash = hash;
          });
        } // End if
      });
  
      $('.navbar-brand').on('click', function(){
        $('html, body').animate({scrollTop : 0},600);
        return false;
      });

});