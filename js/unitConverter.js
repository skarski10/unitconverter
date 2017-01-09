var ozToLbs = function(oz){
  return (oz * (1/16));
}

var oz = prompt("How much does it weigh in oz?");

alert(oz + " ounces is " + ozToLbs(oz) + " pounds.");

var literToGallon = function(liter) {
  return (liter * 0.264172);
};

var liter = prompt("How much does it weigh in liters?");

alert(liter + " liters is " + literToGallon(liter) + " gallons.");

var teaToTable = function(teaspoon) {
  return (teaspoon * 0.277558);
};

var teaspoon = prompt("How much is it in teaspoons?");

alert(teaspoon + " teaspoons is " + teaToTable(teaspoon) + " tablespoons.");

jQuery(document).ready(function(){
jQuery("h1").click(function() {
  alert("This is a header.");
});

jQuery("p").click(function() {
  alert("This is a paragraph.");
});

jQuery("img").click(function() {
  alert("This is an image.");
});

}); //end doc ready
