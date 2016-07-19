function generateRandomNumber (min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomColor (){
  var r = generateRandomNumber(0, 255);
  var g = generateRandomNumber(0, 255);
  var b = generateRandomNumber(0, 255);
if (r === 255 && g === 255 && b === 255){ generateRandomColor();}
else return "rgb(" + r + ", " + g + ", " + b +")";
}

$('.random').click(function(){
  $('body').css("background-color", generateRandomColor());
});


$('.reset').click(function(){
  $('body').css("background-color", "white");
});
