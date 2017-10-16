var text = "Velociraptor is a genus of blrblr herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";
var dinosaur = "triceratops";
dinosaur = dinosaur.toUpperCase();
var textUpper = text.replace('Velociraptor', dinosaur);
var textLength = textUpper.length/2;

var textHalf = textUpper.slice(0,textLength);

console.log(textHalf);
