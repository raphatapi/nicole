$(document).ready(function() {

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