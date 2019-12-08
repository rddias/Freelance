/*jslint browser: true*/
/*global $, jQuery*/

$(document).ready(function () {
  
  function adjustJumbotronHeight() {
    var headerHeight = $("#header").outerHeight();
    var viewportHeight = $(window).innerHeight();

//          var remains = viewportHeight - headerHeight;
    var remains = viewportHeight;

    $("#header > .jumbotron").css({"height":remains});
//    $("#about > .container-fluid").css({"height":remains});
//    $("#portifolio > .container-fluid").css({"height":remains});
  }

  // On page load
  adjustJumbotronHeight();

  // On resize (or mobile orientation change)
  $(window).on("resize",function () {
    adjustJumbotronHeight();
  });
  
  var x = document.getElementsByClassName("about_card");
  $( "#responsive_card" ).hover(function() {
      $(x[0]).attr('style', 'width: 50px !important');
    },
    function() {    
      $(x[0]).attr('style', 'width: 100% !important');
    });  
  
  var icon = document.getElementById("rocket_icon");
  $( "#rocket" ).hover(function() {
      $(icon).attr('style', 'height: 150px');
    },
    function() {    
      $(icon).attr('style', 'height: 100px');
    });
});

