$(document).ready(function () {
  var x = "x";
  var o = "o";
  var ox = true;
  var turns = 0;

  var spot1 = $("#spot1");
  var spot2 = $("#spot2");
  var spot3 = $("#spot3");
  var spot4 = $("#spot4");
  var spot5 = $("#spot5");
  var spot6 = $("#spot6");
  var spot7 = $("#spot7");
  var spot8 = $("#spot8");
  var spot9 = $("#spot9");

  $("#board li").on("click", function () {
    // alert("1");

    if (
      (spot1.hasClass("o") && spot2.hasClass("o") && spot3.hasClass("o")) ||
      (spot4.hasClass("o") && spot5.hasClass("o") && spot6.hasClass("o")) ||
      (spot7.hasClass("o") && spot8.hasClass("o") && spot9.hasClass("o")) ||
      (spot1.hasClass("o") && spot4.hasClass("o") && spot7.hasClass("o")) ||
      (spot2.hasClass("o") && spot5.hasClass("o") && spot8.hasClass("o")) ||
      (spot3.hasClass("o") && spot6.hasClass("o") && spot9.hasClass("o")) ||
      (spot1.hasClass("o") && spot5.hasClass("o") && spot9.hasClass("o")) ||
      (spot3.hasClass("o") && spot5.hasClass("o") && spot7.hasClass("o"))
    ) {
      alert("Winner is O");
    } else if (
      (spot1.hasClass("x") && spot2.hasClass("x") && spot3.hasClass("x")) ||
      (spot4.hasClass("x") && spot5.hasClass("x") && spot6.hasClass("x")) ||
      (spot7.hasClass("x") && spot8.hasClass("x") && spot9.hasClass("x")) ||
      (spot1.hasClass("x") && spot4.hasClass("x") && spot7.hasClass("x")) ||
      (spot2.hasClass("x") && spot5.hasClass("x") && spot8.hasClass("x")) ||
      (spot3.hasClass("x") && spot6.hasClass("x") && spot9.hasClass("x")) ||
      (spot1.hasClass("x") && spot5.hasClass("x") && spot9.hasClass("x")) ||
      (spot3.hasClass("x") && spot5.hasClass("x") && spot7.hasClass("x"))
    ) {
      alert("Winner is X");
    } else if (turns == 9) {
      alert("Already tied, please start again.");
    } else if ($(this).hasClass("disabled")) {
      alert("This box has already been filled!");
    } else if (ox == true) {
      turns++;
      $(this).text(o);
      $(this).addClass("disabled o");
      ox = false;
      if (
        (spot1.hasClass("o") && spot2.hasClass("o") && spot3.hasClass("o")) ||
        (spot4.hasClass("o") && spot5.hasClass("o") && spot6.hasClass("o")) ||
        (spot7.hasClass("o") && spot8.hasClass("o") && spot9.hasClass("o")) ||
        (spot1.hasClass("o") && spot4.hasClass("o") && spot7.hasClass("o")) ||
        (spot2.hasClass("o") && spot5.hasClass("o") && spot8.hasClass("o")) ||
        (spot3.hasClass("o") && spot6.hasClass("o") && spot9.hasClass("o")) ||
        (spot1.hasClass("o") && spot5.hasClass("o") && spot9.hasClass("o")) ||
        (spot3.hasClass("o") && spot5.hasClass("o") && spot7.hasClass("o"))
      ) {
        alert("Winner is O");
      } else if (
        (spot1.hasClass("x") && spot2.hasClass("x") && spot3.hasClass("x")) ||
        (spot4.hasClass("x") && spot5.hasClass("x") && spot6.hasClass("x")) ||
        (spot7.hasClass("x") && spot8.hasClass("x") && spot9.hasClass("x")) ||
        (spot1.hasClass("x") && spot4.hasClass("x") && spot7.hasClass("x")) ||
        (spot2.hasClass("x") && spot5.hasClass("x") && spot8.hasClass("x")) ||
        (spot3.hasClass("x") && spot6.hasClass("x") && spot9.hasClass("x")) ||
        (spot1.hasClass("x") && spot5.hasClass("x") && spot9.hasClass("x")) ||
        (spot3.hasClass("x") && spot5.hasClass("x") && spot7.hasClass("x"))
      ) {
        alert("Winner is X");
      }
    } else {
      turns++;
      $(this).text(x);
      $(this).addClass("disabled x");
      ox = true;
      if (
        (spot1.hasClass("o") && spot2.hasClass("o") && spot3.hasClass("o")) ||
        (spot4.hasClass("o") && spot5.hasClass("o") && spot6.hasClass("o")) ||
        (spot7.hasClass("o") && spot8.hasClass("o") && spot9.hasClass("o")) ||
        (spot1.hasClass("o") && spot4.hasClass("o") && spot7.hasClass("o")) ||
        (spot2.hasClass("o") && spot5.hasClass("o") && spot8.hasClass("o")) ||
        (spot3.hasClass("o") && spot6.hasClass("o") && spot9.hasClass("o")) ||
        (spot1.hasClass("o") && spot5.hasClass("o") && spot9.hasClass("o")) ||
        (spot3.hasClass("o") && spot5.hasClass("o") && spot7.hasClass("o"))
      ) {
        alert("Winner is O");
      } else if (
        (spot1.hasClass("x") && spot2.hasClass("x") && spot3.hasClass("x")) ||
        (spot4.hasClass("x") && spot5.hasClass("x") && spot6.hasClass("x")) ||
        (spot7.hasClass("x") && spot8.hasClass("x") && spot9.hasClass("x")) ||
        (spot1.hasClass("x") && spot4.hasClass("x") && spot7.hasClass("x")) ||
        (spot2.hasClass("x") && spot5.hasClass("x") && spot8.hasClass("x")) ||
        (spot3.hasClass("x") && spot6.hasClass("x") && spot9.hasClass("x")) ||
        (spot1.hasClass("x") && spot5.hasClass("x") && spot9.hasClass("x")) ||
        (spot3.hasClass("x") && spot5.hasClass("x") && spot7.hasClass("x"))
      ) {
        alert("Winner is X");
      }
    }
  });

  $("#reset").on("click", function () {
    $("#board li").text(" ");
    $("#board li").removeClass("disabled");
    $("#board li").removeClass(o);
    $("#board li").removeClass(x);
    turns = 0;
  });
});
