$(document).ready(function() {

  $(".add-row").click(function(){
    // console.log("add-row");
    let name = $("#name").val();
    let email = $("#email").val();
    let markup = "<tr><td>" + name + " " + email + "</td>" + "<td></td>" + "<td></td></tr>";
    $("table tbody").append(markup);
  });
});

