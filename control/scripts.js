$(".menu1button").click(
    function(){
        $(".menu1").toggleClass("active");
        
  }
);

$(".menu2-open-btn").click(
  function(){
      $(".menu2").addClass("active");
      $(".menu2-close-btn").addClass("active");
      
}
);

$(".menu2-close-btn").click(
  function(){
      $(".menu2").removeClass("active");
      $(".menu2-close-btn").removeClass("active");
      
}
);

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(document).scrollTop() > 900) {
      $("body").addClass("slideshowbg");
      $(".nav-bar").addClass("slideshowcolor");
    } else {
      $("body").removeClass("slideshowbg");
      $(".nav-bar").removeClass("slideshowcolor");
    }
  });
  $(window).scroll(function() {
    if ($(document).scrollTop() > 1200) {
      $("body").addClass("popupbg");
      $("nav-bar").addClass("popupcolor");
    } else {
      $("body").removeClass("popupbg");
      $("nav-bar").removeClass("popupcolor");
    }
  });
});

// slideshow
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("#slidebtn").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});