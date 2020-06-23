$(function () {
  var currentUser = 1;
  var pattren = "cross";
  $(".turn").text("player 1")
  $("td").on("click", function () {
      currenttd = $(this)

      if ($('.messages').html() == "player " + currentUser + " won") {
      } else if ($(this).hasClass("circle") || $(this).hasClass("cross")) {
          alert("this selection was already clicked")
      } else {
          currenttd.addClass(pattren);

      } if ($(".item1").hasClass(pattren) & $(".item2").hasClass(pattren) & $(".item3").hasClass(pattren) ||
          $(".item4").hasClass(pattren) & $(".item5").hasClass(pattren) & $(".item6").hasClass(pattren) ||
          $(".item7").hasClass(pattren) & $(".item8").hasClass(pattren) & $(".item9").hasClass(pattren) ||
          $(".item1").hasClass(pattren) & $(".item4").hasClass(pattren) & $(".item7").hasClass(pattren) ||
          $(".item2").hasClass(pattren) & $(".item5").hasClass(pattren) & $(".item8").hasClass(pattren) ||
          $(".item3").hasClass(pattren) & $(".item6").hasClass(pattren) & $(".item9").hasClass(pattren) ||
          $(".item1").hasClass(pattren) & $(".item5").hasClass(pattren) & $(".item9").hasClass(pattren) ||
          $(".item3").hasClass(pattren) & $(".item5").hasClass(pattren) & $(".item7").hasClass(pattren)) {
          $('.messages').html('player ' + currentUser + " won");
          $('.turn').remove();
      } else {
          setNextUser();
          setPattern();
          $('.turn').html("player " + currentUser)
      }
  });

  $(".reset").on("click", function () {
      location.reload();
  });

  function setNextUser() {
      if (currentUser === 1) {
          currentUser = 2;
      } else {
          currentUser = 1;
      }
  };
  function setPattern() {
      if (currentUser === 1) {
          pattren = "cross";
      } else if (currentUser) {
          pattren = "circle";
      }
  };
});