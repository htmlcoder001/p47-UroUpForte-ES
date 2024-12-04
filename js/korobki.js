"use strict";

var par = location.hash.slice(1).split("~");
var parl = par.length;

if (parl > 2) isp = par[4].replace(/\+/g, " ");
if ("vibrate" in navigator) {
  var vibr = 1;
} else var vibr = 0;

var count = 1;
$(function () {
  $(".trye").click(function () {
    if (count < 2) {
      $(this).html($text_box);

      count++;
      setTimeout(function () {
        var sc2 = document.getElementById("success02");
        sc2.className += " animate";
        var sctip02 = document.getElementById("successtip02");
        sctip02.className += " animateSuccessTip";
        var md2 = document.getElementById("modal02");
        md2.className += " visible";
        var cnt = document.getElementById("cntVal");
        var so = document.querySelector(".sweet-overlay");
        so.style.display = "block";
      }, 800);
    } else {
      var discountBlock = document.getElementById("discount");
      $(this).replaceWith(discountBlock);
      $(discountBlock).addClass("show");
      setTimeout(function () {
        resultWrapper.style.display = "block";
      }, 1000);

      setTimeout(function () {
        $("#boxes").slideUp();
        $(".order_block").slideDown();
        start_timer();
      }, 3500);
    }
  });
});
var counter = 1;
$(document).ready(function () {
  $("#update").on("click", function () {
    if (counter == 1) {
      counter++;
      $("#cntVal").html(function (i, val) {
        return +val - 1;
      });
    }
  });
});

function hidemodal01() {
  if (vibr > 0) navigator.vibrate(70);
  var modal1 = document.getElementById("modal01").classList.remove("visible");
  var so = (document.querySelector(".sweet-overlay").style.display = "none");
}
function hidemodal02() {
  if (vibr > 0) navigator.vibrate(70);
  var modal2 = document.getElementById("modal02").classList.remove("visible");
  var so = (document.querySelector(".sweet-overlay").style.display = "none");
}

var resultWrapper = document.querySelector(".spin-result-wrapper");
var wheel = document.querySelector(".wheel-img");

$(function () {
  $("a[href^='#']").click(function () {
    var _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
    return false;
  });
});

function spin() {
  if (!wheel.classList.contains("rotated")) {
    wheel.classList.add("super-rotation");
    setTimeout(function () {
      resultWrapper.style.display = "block";
    }, 8000);
    setTimeout(function () {
      $(".spin-wrapper").slideUp();
      $(".order_block").slideDown();
      start_timer();
    }, 10000);
    wheel.classList.add("rotated");
  }
}

var closePopup = document.querySelector(".close-popup");
$(".close-popup, .pop-up-button").click(function (e) {
  e.preventDefault();
  $(".spin-result-wrapper").fadeOut();

  var top = $("#roulette").offset().top;
  $("body,html").animate({ scrollTop: top }, 800);
});

$(".ord_button").on("click", function () {
  $(".screenLock .msg .close").trigger("click");
  // spin();
});
