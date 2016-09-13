$(document).ready(function() {
  console.log("cats are freaking rad")
  $("#questions form").submit(function(event) {
    var name1Input = $("input#name1").val();
    var pet1Input = $("input#pet1").val();
    var pet2Input = $("input#pet2").val();
    var pet3Input = parseInt($("input#pet3").val());
    var cattype = $("#cattype").val();
    var bday = $("#birthday").val();
    var catColor = $("#color").val();

    $(".name1").text(name1Input);
    $(".pet1").text(pet1Input);
    $(".pet2").text(pet2Input.toUpperCase());
    $(".pet3").text(pet3Input);
    $(".cattype").text(cattype);
    $(".birthday").text(bday);
    $(".color").text(catColor);

    $("#response").show();

    event.preventDefault();

  });
});
