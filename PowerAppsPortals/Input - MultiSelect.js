MultiSelect On Change:
It keeps track of the title in the 'msos-selecteditems-contatiner' field. It only triggers once for every change, even when no items and when pressing select all too.

theOldText = $(".msos-selecteditems-container").attr('title');

$(".msos-selecteditems-container").on('DOMSubtreeModified', function(e) {

  var theText = $(".msos-selecteditems-container").attr('title');

  if(theText !== theOldText){

    console.log(theText);

    theOldText = $(".msos-selecteditems-container").attr('title');

  }

});

