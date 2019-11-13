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
    $("#portifolio > .container-fluid").css({"height":remains});
  }

  // On page load
  adjustJumbotronHeight();

  // On resize (or mobile orientation change)
  $(window).on("resize",function () {
    adjustJumbotronHeight();
  });
  
  
  var i = 0;
  var j = 0;
//  var x = document.getElementsByClassName("test_class");
//  $( "#test" ).hover(function() {
//      i += 1;
//      
//     for (j in x) {
//        $(x[j]).removeClass("");
//        $(x[j]).addClass("col-12");        
//      }
//    
//      $( this ).find( "span" ).text( "mouse over x " + i );
//      $("#coluna").removeClass("col-4");
//      $("#coluna").addClass("col-12");
//    
//    },
//    function() {    
//      for (j in x) {
//        $(x[j]).removeClass("col-12");
//        $(x[j]).addClass("col-4");        
//      }
//    
//      $( this ).find( "span" ).text( "mouse out " );
//      $("#coluna").removeClass("col-12");
//      $("#coluna").addClass("col-4");
//    });  
 
  var x = document.getElementsByClassName("about_card");
  $( "#test" ).hover(function() {
      i += 1;
      
//     for (j in x) {
//        $(x[j]).removeClass("flex-row");
//        $(x[j]).addClass("flex-column");        
//      }
      $(x[j]).attr('style', 'width: 50px !important');
//      $(x[j]).css({"padding-right": "110px"});
    
    },
    function() {    
//      for (j in x) {
//        $(x[j]).removeClass("flex-column");
//        $(x[j]).addClass("flex-row");        
//      }
      $(x[j]).attr('style', 'width: 100% !important');
    });  
});

