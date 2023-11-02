$(".menu1button").click(
    function(){
        $(".menu1").toggleClass("active");
        
  }
);

$(".menu2button").click(
  function(){
      $(".menu2").toggleClass("active");
      
}
);

$(".currentbtn2").click(
  function(){
      $(".menu2").addClass("active");
      
}
);


$(".menu3button").click(
  function(){
      $(".menu3").toggleClass("active");
      
}
);

$(".xmasbtn2").click(
  function(){
      $(".menu3").addClass("active");
      
}
);

$( function() {
  $( ".draggable" ).draggable();
} );
