theOldText = $(".msos-selecteditems-container").attr('title');

$(".msos-selecteditems-container").on('DOMSubtreeModified', function(e) {

  var theText = $(".msos-selecteditems-container").attr('title');

  if(theText !== theOldText){

    console.log(theText);

    theOldText = $(".msos-selecteditems-container").attr('title');

  }

});
