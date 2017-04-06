var tweeps = ['@lighthouselabs','@nytimesbits','@globalculture'];
tweeps.push('@drumpf');

function addPadding (s) {
  // var newS = ""
  // for (var i =0 ; i< 15 - s.length; i++) {
  //   newS += " ";
  // }
  // return s + newS;
  return new Array(20 - s.length ).join( ' ' ).concat(s);
}


prettyPrintItem = function(item) {
  console.log("Item --> ", addPadding(item), " <--");
}

function sloppyPrintItem (item) {
  console.log("Sloppy",item,"<<--");
}

strategies = {
  pretty: prettyPrintItem,
  sloppy: sloppyPrintItem
}

somePrint = function (array, styleOfPrinting) {
  for (var i =0; i < array.length; i++) {
    styleOfPrinting(array[i]);
  }
}

somePrint(tweeps, strategies.pretty);
somePrint(tweeps, strategies.sloppy);
somePrint(tweeps, sloppyPrintItem);

somePrint(tweeps, function(item) {
  console.log(item);
});

somePrint(tweeps, true ? 
  function(item) {
    console.log(item);
  } 
  : strategies.pretty);




