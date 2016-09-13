$(document).ready(function() {
  console.log("cats are freaking rad")
  $("#questions form").submit(function(event) {
    var name1Input = $("input#name1").val();
    var pet1Input = $("input#pet1").val();
    var pet2Input = $("input#pet2").val();
    var pet3Input = parseInt($("input#pet3").val());
    var cattype = $("#cattype").val();

    $(".name1").text(name1Input);
    $(".pet1").text(pet1Input);
    $(".pet2").text(pet2Input.toUpperCase());
    $(".pet3").text(pet3Input);
    $(".cattype").text(cattype);

    $("#response").show();

    event.preventDefault();

  });
});
