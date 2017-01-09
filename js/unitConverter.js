var converter = function(oz){
  return (oz * (1/16));
}

var oz = prompt("How much does it weigh in oz?");

alert(converter(oz));

var literToGallon = function(liter) {
  return (liter * 0.264172);
};

var liter = prompt("How much does it weigh in liters?");

alert(liter + " liters is " + literToGallon(liter) + " gallons.");
