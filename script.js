$(document).ready(function() {

  $('.carousel').carousel();
  

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

      $(window).scroll(function(){
    
        //Calling function to show up button
        scrollFunction();
      });
});

// When the user scrolls down 20px from the top of the document, show the button
function scrollFunction() {
  if ($('body').scrollTop > 20 || document.documentElement.scrollTop > 20) {
      $("#myBtn").fadeIn({queue: false, duration: '1s'});
  } else {
      $("#myBtn").fadeOut({queue: false, duration: '1s'});
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  $('html, body').animate({scrollTop : 0},600);
    return false;
}