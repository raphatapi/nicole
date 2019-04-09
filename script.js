$(document).ready(function() {

    $('.carousel').carousel();
  

     // Add smooth scrolling to top links
    $(".scroll").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
          // Store hash
          var hashTop = this.hash;
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (1200) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
              scrollTop: $(hashTop).offset().top - $("nav").outerHeight(true)
            }, 1200, function(){
          });
        } // End if
      });
  

      // Add smooth scrolling to bottom links
    $(".contact").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
          //Store hash for bottom links
          var hashBottom = this.hash;
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (1200) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
              scrollTop: $(hashBottom).offset().top
            }, 1200, function(){
          });
        } // End if
    });

      $('.navbar-brand').on('click', function(){
        $('html, body').animate({scrollTop : 0},600);
        return false;
      });


      $(window).scroll(function(){
    
        if ($(this).scrollTop() > $(document).height() - $(window).height() - 100) {
          $('.navbar').css("display", "none");
        } else {
          $('.navbar').css("display", "inherit");
        }
        if ($(this).scrollTop() < 100 || $(this).scrollTop() > $(document).height() - $(window).height() - 100) {
          $('#myBtn').fadeOut();
        } else {
          $('#myBtn').fadeIn();
        }
      });

      $(".center").slick({
        slidesToShow: 3,
        dots:true,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 2000,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

    $("#contact-home").on("click", function(event) {
      event.preventDefault();
      topFunction();
    });

});

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  $('html, body').animate({scrollTop : 0},900);
    return false;
}

// function bottomFunction() {
//   $("html, body").animate({ scrollTop: document.body.scrollHeight }, 1200);
//     return false;
// }