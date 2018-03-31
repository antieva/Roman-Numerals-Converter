// Business logic.

// Initializing an object.
var arr = {
  "0": ["","","",""],
  "1": ["M","C","X","I"],
  "2": ["MM","CC","XX","II"],
  "3": ["MMM","CCC","XXX","III"],
  "4": ["","CD","XL","IV"],
  "5": ["","D","L","V"],
  "6": ["","DC","LX","VI"],
  "7": ["","DCC","LXX","VII"],
  "8": ["","DCCC","LXXX","VIII"],
  "9": ["","CM","XC","IX"]
}

// The function takes an integer as a parameter and returns a string.
var toRomans = function(number) {
  var result = "";
  var order = 1000;
  for (var i = 0; i < 4; i++){
    // Using Math.floor to devide variables and get an integer as a result.
    var j = Math.floor(number / order);
    result += arr[j.toString()][i];
    number %= order;
    order /= 10;
  }
  return result;
}



// UI logic starts here.
$(document).ready(function(){
  $("form#userInput").submit(function(event){
    event.preventDefault();
    $(".output").hide();
    var userInput = parseInt($("#number").val());

    var output = toRomans(userInput);
    $(".romanNumeral").text(output);

    $(".output").show();
  });
});
