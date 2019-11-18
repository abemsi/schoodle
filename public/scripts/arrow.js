$("#bouncingArrow").on('click', function () {
  $(".create-container").slideToggle("slow", function() { 
  $("#event-title").focus();
  })
});