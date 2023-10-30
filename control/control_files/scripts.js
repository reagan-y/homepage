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
    } else {
      $("body").removeClass("slideshowbg");
    }
  });
  $(window).scroll(function() {
    if ($(document).scrollTop() > 1200) {
      $("body").addClass("popupbg");
    } else {
      $("body").removeClass("popupbg");
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

$(".popup1").click(
  function(){
      $(".popup1").toggleClass("pop");
      
}
);

