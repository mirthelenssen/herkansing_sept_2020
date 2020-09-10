$( function() {
    $( "#accordion" ).accordion();
  } );
  $( function() {
    $( "#tabs" ).tabs();
  } );
  $( "#sound" ).click(function() {
    $( "#toggle" ).toggle( "slide" );
     $("#themesound").css("display", "block");
    if ($(this).text() == "Stop Playing Theme Song") { 
      $(this).text("Play Breaking Bad Theme Song"); 
      $(this).css("color", "black");

  } else { 
      $(this).text("Stop Playing Theme Song"); 
      $(this).css("color", "black");

  }; 
  });
 