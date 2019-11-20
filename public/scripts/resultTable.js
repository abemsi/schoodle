$(document).ready(function() {

  $(".add-row").click(function(){
    let name = $("#name").val();
    let email = $("#email").val();
    let markup = "<tr><td>" + name + " " + email + "</td>" + "<td></td>" + "<td></td></tr>";
    let markup = "<tr><td>" + name + " " + email + "</td>" + "<td></td>" + "<td></td>" + "<td></td>";
    $("table tbody").append(markup);
  });
});

